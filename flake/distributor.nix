{ lib, flake-parts-lib, ... }:
let
  inherit (lib)
    mkOption
    types
    ;
in
{
  options = {
    tetryx.distributor = mkOption {
      type = types.str;
      default = "dev";
    };
  };
}
