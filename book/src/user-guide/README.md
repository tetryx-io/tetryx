# User Guide

## Logging in

You should have received an `tetryx login` command from an admin like the following:

```
tetryx login central https://tetryx.domain.tld/ eyJ...
```

The `tetryx` client can work with multiple servers at the same time.
To select the `foo` cache from server `central`, use one of the following:

- `foo`, if the `central` server is configured as the default
- `central:foo`

To configure the default server, set `default-server` in `~/.config/tetryx/config.toml`.

## Enabling a cache

To configure Nix to automatically use cache `foo`:

```
tetryx use foo
```

This adds the binary cache to your `~/.config/nix/nix.conf` and configures the credentials required to access it.

If you wish to configure Nix manually, you can view the binary cache endpoint and the cache public key:

```console
$ tetryx cache info foo
               Public: true
           Public Key: foo:WcnO6s4aVkB6CKRaPPpKvHLZykWXASV6c+/Ssg8uQEY=
Binary Cache Endpoint: https://tetryx.domain.tld/foo
      Store Directory: /nix/store
             Priority: 41
  Upstream Cache Keys: ["cache.nixos.org-1"]
     Retention Period: Global Default
```

On NixOS, you can configure the cache declaratively in your system configuration with the above information:

```nix
{
  nix.settings = {
    substituters = [
      "https://tetryx.domain.tld/foo"
    ];
    trusted-public-keys = [
      "foo:WcnO6s4aVkB6CKRaPPpKvHLZykWXASV6c+/Ssg8uQEY="
    ];
  };
}
```

## Disabling a cache

To configure Nix to no longer use a cache, remove the corresponding entries from the list of `substituters` and `trusted-public-keys` in `~/.config/nix/nix.conf`

## Pushing to the cache

To push a store path to cache `foo`:

```bash
tetryx push foo /nix/store/...
```

Other examples include:

```bash
tetryx push foo ./result
tetryx push foo /run/current-system
```
