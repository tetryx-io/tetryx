{
  lib,
  pkgs,
  config,
  ...
}:

let
  inherit (lib) types;

  cfg = config.services.tetryxd;

  # unused when the entrypoint is flake
  flake = import ../flake-compat.nix;
  overlay = flake.defaultNix.overlays.default;

  format = pkgs.formats.toml { };

  checkedConfigFile =
    pkgs.runCommand "checked-tetryx-server.toml"
      {
        configFile = cfg.configFile;
      }
      ''
        cat $configFile

        export ATTIC_SERVER_TOKEN_HS256_SECRET_BASE64="dGVzdCBzZWNyZXQ="
        export ATTIC_SERVER_DATABASE_URL="sqlite://:memory:"
        ${cfg.package}/bin/tetryxd --mode check-config -f $configFile
        cat <$configFile >$out
      '';

  atticadmShim = pkgs.writeShellScript "atticadm" ''
    if [ -n "$ATTICADM_PWD" ]; then
      cd "$ATTICADM_PWD"
      if [ "$?" != "0" ]; then
        >&2 echo "Warning: Failed to change directory to $ATTICADM_PWD"
      fi
    fi

    exec ${cfg.package}/bin/tetryxadm -f ${checkedConfigFile} "$@"
  '';

  atticadmWrapper = pkgs.writeShellScriptBin "tetryxd-tetryxadm" ''
    exec systemd-run \
      --quiet \
      --pipe \
      --pty \
      --wait \
      --collect \
      --service-type=exec \
      --property=EnvironmentFile=${cfg.environmentFile} \
      --property=DynamicUser=yes \
      --property=User=${cfg.user} \
      --property=Environment=ATTICADM_PWD=$(pwd) \
      --working-directory / \
      -- \
      ${atticadmShim} "$@"
  '';

  hasLocalPostgresDB =
    let
      url = cfg.settings.database.url or "";
      localStrings = [
        "localhost"
        "127.0.0.1"
        "/run/postgresql"
      ];
      hasLocalStrings = lib.any (lib.flip lib.hasInfix url) localStrings;
    in
    config.services.postgresql.enable && lib.hasPrefix "postgresql://" url && hasLocalStrings;
in
{
  imports = [
    (lib.mkRenamedOptionModule [ "services" "tetryxd" "credentialsFile" ] [ "services" "tetryxd" "environmentFile" ])
  ];

  disabledModules = [ "services/networking/tetryxd.nix" ];

  options = {
    services.tetryxd = {
      enable = lib.mkEnableOption "the tetryxd, the Tetryx Space Operations server";

      package = lib.mkPackageOption pkgs "tetryx-server" { };

      environmentFile = lib.mkOption {
        description = ''
          Path to an EnvironmentFile containing required environment
          variables:

          - ATTIC_SERVER_TOKEN_RS256_SECRET_BASE64: The base64-encoded RSA PEM PKCS1 of the
            RS256 JWT secret. Generate it with `openssl genrsa -traditional 4096 | base64 -w0`.
        '';
        type = types.nullOr types.path;
        default = null;
      };

      user = lib.mkOption {
        description = ''
          The user under which tetryx runs.
        '';
        type = types.str;
        default = "tetryxd";
      };

      group = lib.mkOption {
        description = ''
          The group under which tetryx runs.
        '';
        type = types.str;
        default = "tetryxd";
      };

      settings = lib.mkOption {
        description = ''
          Structured configurations of tetryxd.
        '';
        type = format.type;
        default = { }; # setting defaults here does not compose well
      };

      configFile = lib.mkOption {
        description = ''
          Path to an existing tetryxd configuration file.

          By default, it's generated from `services.tetryxd.settings`.
        '';
        type = types.path;
        default = format.generate "server.toml" cfg.settings;
        defaultText = "generated from `services.tetryxd.settings`";
      };

      mode = lib.mkOption {
        description = ''
          Mode in which to run the server.

          'monolithic' runs all components, and is suitable for single-node deployments.

          'api-server' runs only the API server, and is suitable for clustering.

          'garbage-collector' only runs the garbage collector periodically.

          A simple NixOS-based Tetryx deployment will typically have one 'monolithic' and any number of 'api-server' nodes.

          There are several other supported modes that perform one-off operations, but these are the only ones that make sense to run via the NixOS module.
        '';
        type = lib.types.enum [
          "monolithic"
          "api-server"
          "garbage-collector"
        ];
        default = "monolithic";
      };

      # Internal flags
      useFlakeCompatOverlay = lib.mkOption {
        description = ''
          Whether to insert the overlay with flake-compat.
        '';
        type = types.bool;
        internal = true;
        default = true;
      };
    };
  };

  config = lib.mkIf cfg.enable {
    assertions = [
      {
        assertion = cfg.environmentFile != null;
        message = ''
          <option>services.tetryxd.environmentFile</option> is not set.

          Run `openssl genrsa -traditional -out private_key.pem 4096 | base64 -w0` and create a file with the following contents:

          ATTIC_SERVER_TOKEN_RS256_SECRET="output from command"

          Then, set `services.tetryxd.environmentFile` to the quoted absolute path of the file.
        '';
      }
      {
        assertion = !lib.isStorePath cfg.environmentFile;
        message = ''
          <option>services.tetryxd.environmentFile</option> points to a path in the Nix store. The Nix store is globally readable.

          You should use a quoted absolute path to prevent leaking secrets in the Nix store.
        '';
      }
    ];

    services.tetryxd.settings = {
      database.url = lib.mkDefault "sqlite:///var/lib/tetryxd/server.db?mode=rwc";

      # "storage" is internally tagged
      # if the user sets something the whole thing must be replaced
      storage = lib.mkDefault {
        type = "local";
        path = "/var/lib/tetryxd/storage";
      };
    };

    systemd.services.tetryxd = {
      wantedBy = [ "multi-user.target" ];
      after = [ "network-online.target" ] ++ lib.optionals hasLocalPostgresDB [ "postgresql.service" ];
      requires = lib.optionals hasLocalPostgresDB [ "postgresql.service" ];
      wants = [ "network-online.target" ];

      serviceConfig = {
        ExecStart = "${cfg.package}/bin/tetryxd -f ${checkedConfigFile} --mode ${cfg.mode}";
        EnvironmentFile = cfg.environmentFile;
        StateDirectory = "tetryxd"; # for usage with local storage and sqlite
        DynamicUser = true;
        User = cfg.user;
        Group = cfg.group;
        Restart = "on-failure";
        RestartSec = 10;

        CapabilityBoundingSet = [ "" ];
        DeviceAllow = "";
        DevicePolicy = "closed";
        LockPersonality = true;
        MemoryDenyWriteExecute = true;
        NoNewPrivileges = true;
        PrivateDevices = true;
        PrivateTmp = true;
        PrivateUsers = true;
        ProcSubset = "pid";
        ProtectClock = true;
        ProtectControlGroups = true;
        ProtectHome = true;
        ProtectHostname = true;
        ProtectKernelLogs = true;
        ProtectKernelModules = true;
        ProtectKernelTunables = true;
        ProtectProc = "invisible";
        ProtectSystem = "strict";
        ReadWritePaths =
          let
            path = cfg.settings.storage.path;
            isDefaultStateDirectory = path == "/var/lib/tetryxd" || lib.hasPrefix "/var/lib/tetryxd/" path;
          in
          lib.optionals (cfg.settings.storage.type or "" == "local" && !isDefaultStateDirectory) [ path ];
        RemoveIPC = true;
        RestrictAddressFamilies = [
          "AF_INET"
          "AF_INET6"
          "AF_UNIX"
        ];
        RestrictNamespaces = true;
        RestrictRealtime = true;
        RestrictSUIDSGID = true;
        SystemCallArchitectures = "native";
        SystemCallFilter = [
          "@system-service"
          "~@resources"
          "~@privileged"
        ];
        UMask = "0077";
      };
    };

    environment.systemPackages = [
      atticadmWrapper
    ];

    nixpkgs.overlays = lib.mkIf cfg.useFlakeCompatOverlay [
      overlay
    ];
  };
}
