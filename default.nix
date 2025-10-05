let
  flake = import ./flake-compat.nix;
in flake.defaultNix.default.overrideAttrs (_: {
  passthru = {
    tetryx-client = flake.defaultNix.outputs.packages.${builtins.currentSystem}.tetryx-client;
    demo = flake.defaultNix.outputs.devShells.${builtins.currentSystem}.demo;
  };
})
