{ config, ... }:
{
  flake.nixosModules = {
    tetryxd = {
      imports = [
        ../nixos/tetryxd.nix
      ];

      services.tetryxd.useFlakeCompatOverlay = false;

      nixpkgs.overlays = [
        config.flake.overlays.default
      ];
    };
  };
}
