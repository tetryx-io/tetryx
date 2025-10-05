{ self
, lib
, flake-parts-lib
, inputs
, config
, makeCranePkgs
, getSystem
, ...
}:

let
  inherit (lib)
    mkOption
    types
    ;
  inherit (flake-parts-lib)
    mkPerSystemOption
    ;

  # Re-evaluate perSystem with cross nixpkgs
  # HACK before https://github.com/hercules-ci/flake-parts/issues/95 is solved
  evalCross = { system, pkgs }: config.allSystems.${system}.debug.extendModules {
    modules = [
      ({ config, lib, ... }: {
        _module.args.pkgs = pkgs;
        _module.args.self' = lib.mkForce config;
      })
    ];
  };
in
{
  options = {
    perSystem = mkPerSystemOption {
      options.tetryx = {
        toolchain = mkOption {
          type = types.nullOr types.package;
          default = null;
        };
        extraPackageArgs = mkOption {
          type = types.attrsOf types.anything;
          default = {};
        };
      };
    };
  };

  config = {
    _module.args.makeCranePkgs = lib.mkDefault (pkgs: let
      perSystemConfig = getSystem pkgs.system;
      craneLib = builtins.foldl' (acc: f: f acc) pkgs [
        inputs.crane.mkLib
        (craneLib:
          if perSystemConfig.tetryx.toolchain == null then craneLib
          else craneLib.overrideToolchain config.tetryx.toolchain
        )
      ];
    in pkgs.callPackage ../crane.nix {
      inherit craneLib;
      inherit (perSystemConfig.tetryx) extraPackageArgs;
    });

    perSystem = {
      self',
      pkgs,
      config,
      cranePkgs,
      cranePkgsStatic,
      ...
    }: (lib.mkMerge [
      {
        _module.args = {
          cranePkgs = makeCranePkgs pkgs;
          cranePkgsStatic = makeCranePkgs pkgs.pkgsStatic;
        };

        packages = {
          default = self'.packages.tetryx;

          inherit (cranePkgs)
            tetryx
            tetryx-client
            tetryx-server
          ;

          tetryx-static = cranePkgsStatic.tetryx;
          tetryx-client-static = cranePkgsStatic.tetryx-client;
          tetryx-server-static = cranePkgsStatic.tetryx-server;

          tetryx-ci-installer = pkgs.callPackage ../ci-installer.nix {
            inherit self;
          };

          book = pkgs.callPackage ../book {
            tetryx = self'.packages.tetryx;
          };
        };
      }

      (lib.mkIf pkgs.stdenv.isLinux {
        packages = {
          tetryx-server-image = pkgs.dockerTools.buildImage {
            name = "tetryx-server";
            tag = "main";
            copyToRoot = [
              self'.packages.tetryx-server

              # Debugging utilities for `fly ssh console`
              pkgs.busybox

              # Now required by the fly.io sshd
              pkgs.dockerTools.fakeNss
            ];
            config = {
              Entrypoint = [ "/bin/atticd" ];
              Env = [
                "SSL_CERT_FILE=${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt"
              ];
            };
          };
        };
      })

      (lib.mkIf (pkgs.system == "x86_64-linux") {
        packages = {
          tetryx-server-image-aarch64 = let
            eval = evalCross {
              system = "aarch64-linux";
              pkgs = pkgs.pkgsCross.aarch64-multiplatform;
            };

          in eval.config.packages.tetryx-server-image;
        };
      })
    ]);
  };
}
