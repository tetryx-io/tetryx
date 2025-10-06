{ lib, stdenv, nix-gitignore, mdbook, mdbook-linkcheck, python3, callPackage, writeScript
, tetryx ? null
}:

let
  colorizedHelp = let
    help = callPackage ./colorized-help.nix {
      inherit tetryx;
    };
  in if tetryx != null then help else null;
in stdenv.mkDerivation {
  inherit colorizedHelp;

  name = "tetryx-book";

  src = nix-gitignore.gitignoreSource [] ./.;

  nativeBuildInputs = [ mdbook ];

  buildPhase = ''
    emitColorizedHelp() {
      command=$1

      if [[ -n "$colorizedHelp" ]]; then
          cat "$colorizedHelp/$command.md" >> src/reference/$command-cli.md
      else
          echo "Error: No tetryx executable passed to the builder" >> src/reference/$command-cli.md
      fi
    }

    emitColorizedHelp tetryx
    emitColorizedHelp tetryxd
    emitColorizedHelp tetryxadm

    mdbook build -d ./build
    cp -r ./build $out
  '';

  installPhase = "true";
}
