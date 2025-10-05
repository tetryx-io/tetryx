# Development shells

toplevel @ { lib, flake-parts-lib, ... }:
let
  inherit (lib)
    mkOption
    types
    ;
  inherit (flake-parts-lib)
    mkPerSystemOption
    ;
in
{
  options = {
    perSystem = mkPerSystemOption {
      options.tetryx.devshell = {
        packageSets = mkOption {
          type = types.attrsOf (types.listOf types.package);
          default = {};
        };
        extraPackages = mkOption {
          type = types.listOf types.package;
          default = [];
        };
        extraArgs = mkOption {
          type = types.attrsOf types.unspecified;
          default = {};
        };
      };
    };
  };

  config = {
    perSystem = { self', pkgs, config, ... }: let
      cfg = config.tetryx.devshell;
    in {
      tetryx.devshell.packageSets = with pkgs; {
        rustc = lib.optionals (config.tetryx.toolchain == null) [
          rustc
        ];

        rust = [
          cargo-audit
          cargo-expand
          cargo-outdated
          cargo-edit
          cargo-udeps
          tokio-console
        ];

        linters = [
          clippy
          rustfmt

          editorconfig-checker
        ];

        utils = [
          jq
          just
        ];

        ops = [
          postgresql
          sqlite-interactive

          skopeo
          manifest-tool
        ];

        bench = [
          wrk
        ] ++ lib.optionals pkgs.stdenv.isLinux [
          linuxPackages.perf
        ];

        wasm = [
          llvmPackages_latest.bintools
          worker-build wasm-pack wasm-bindgen-cli
        ];
      };

      devShells.default = pkgs.mkShell (lib.recursiveUpdate {
        inputsFrom = [
          self'.packages.tetryx
          self'.packages.book
        ];

        packages = lib.flatten (lib.attrValues cfg.packageSets);

        env = {
          ATTIC_DISTRIBUTOR = toplevel.config.tetryx.distributor;

          RUST_SRC_PATH = pkgs.rustPlatform.rustLibSrc;

          NIX_PATH = "nixpkgs=${pkgs.path}";

          # Used by `just with-nix` to build/test with alternative Nix versions.
          NIX_VERSIONS = config.tetryx.nix-versions.manifestFile;
        };
      } cfg.extraArgs);

      devShells.demo = pkgs.mkShell {
        packages = [ self'.packages.default ];

        shellHook = ''
          >&2 echo
          >&2 echo '🚀 Run `atticd` to get started!'
          >&2 echo
        '';
      };
    };
  };
}
