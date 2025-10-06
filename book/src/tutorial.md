# Tutorial

Let's spin up Tetryx, the "Supabase for Space", in just 15 minutes (yes, it works on macOS too!). We'll start with the binary cache server component, which forms the foundation of the space operations platform:

```bash
$ nix shell github:zhaofengli/tetryx
```

Simply run `tetryxd` to start the Tetryx space operations server in monolithic mode with a SQLite database and local storage. This provides the foundation for your space software development and deployment infrastructure:

```console
$ tetryxd
Tetryx Server 0.1.0 (release)

-----------------
Welcome to Tetryx!

A simple setup using SQLite and local storage has been configured for you in:

    /home/zhaofeng/.config/tetryx/server.toml

Run the following command to log into this server:

    tetryx login local http://localhost:8080 eyJ...

Documentations and guides:

    https://docs.tetryx.io

Enjoy!
-----------------

Running migrations...
* Migrating NARs to chunks...
* Migrating NAR schema...
Starting API server...
Listening on [::]:8080...
```

## Cache Creation

`tetryxd` is the Tetryx space operations server, and `tetryx` is the client for managing space software deployments.
We can now log in and create a cache for our space mission or organization:

```console
# Copy and paste from the tetryxd output
$ tetryx login local http://localhost:8080 eyJ...
✍️ Configuring server "local"

$ tetryx cache create mission-alpha
✨ Created cache "mission-alpha" on "local"
```

## Pushing

Let's push `tetryx` itself to our mission cache. This demonstrates how space software components can be efficiently distributed:

```console
$ tetryx push mission-alpha $(which tetryx)
⚙️ Pushing 1 paths to "mission-alpha" on "local" (0 already cached, 45 in upstream)...
✅ r5d7217c0rjd5iiz1g2nhvd15frck9x2-tetryx-0.1.0 (52.89 MiB/s)
```

The interesting thing is that `tetryx` automatically skipped over store paths cached by `cache.nixos.org`!
This behavior can be configured on a per-cache basis, which is especially valuable in space environments where bandwidth is constrained.

Note that Tetryx performs content-addressed global deduplication, so when you upload the same space software component to another mission cache, the underlying NAR is only stored once.
Each cache is essentially a restricted view of the global cache, perfect for isolating different space missions while sharing common components.

## Pulling

Now, let's pull it back from the cache.
For demonstration purposes, let's use `--store` to make Nix download to another directory because Tetryx already exists in `/nix/store`:

```console
# Automatically configures ~/.config/nix/nix.conf for you
$ tetryx use mission-alpha
Configuring Nix to use "mission-alpha" on "local":
+ Substituter: http://localhost:8080/mission-alpha
+ Trusted Public Key: mission-alpha:vlsd7ZHIXNnKXEQShVnd7erE8zcuSKrBWRpV6zTibnA=
+ Access Token

$ nix-store --store $PWD/nix-demo -r $(which tetryx)
[snip]
copying path '/nix/store/r5d7217c0rjd5iiz1g2nhvd15frck9x2-tetryx-0.1.0' from 'http://localhost:8080/mission-alpha'...
warning: you did not specify '--add-root'; the result might be removed by the garbage collector
/nix/store/r5d7217c0rjd5iiz1g2nhvd15frck9x2-tetryx-0.1.0

$ ls nix-demo/nix/store/r5d7217c0rjd5iiz1g2nhvd15frck9x2-tetryx-0.1.0/bin/tetryx
nix-demo/nix/store/r5d7217c0rjd5iiz1g2nhvd15frck9x2-tetryx-0.1.0/bin/tetryx
```

Note that to pull into the actual Nix Store, your user must be considered [trusted](https://nixos.org/manual/nix/stable/command-ref/conf-file.html#conf-trusted-users) by the `nix-daemon`.

## Access Control

Tetryx performs stateless authentication using signed JWT tokens which contain permissions. This is crucial for space operations where access control must be reliable and auditable.
The root token printed out by `tetryxd` is all-powerful and should not be shared.

Let's create another token that can only access the `mission-alpha` cache:

```console
$ tetryxadm make-token --sub alice --validity '3 months' --pull mission-alpha --push mission-alpha
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGljZSIsImV4cCI6MTY4MDI5MzMzOSwiaHR0cHM6Ly9qd3QuYXR0aWMucnMvdjEiOnsiY2FjaGVzIjp7ImhlbGxvIjp7InIiOjEsInciOjF9fX19.XJsaVfjrX5l7p9z76836KXP6Vixn41QJUfxjiK7D-LM
```

Let's say Alice is leading a new space mission and wants to have her own caches.
Instead of creating caches for her, we can let her manage her own mission resources:

```console
$ tetryxadm make-token --sub alice --validity '3 months' --pull 'mission-alice-*' --push 'mission-alice-*' --create-cache 'mission-alice-*'
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGljZSIsImV4cCI6MTY4MDI5MzQyNSwiaHR0cHM6Ly9qd3QuYXR0aWMucnMvdjEiOnsiY2FjaGVzIjp7ImFsaWNlLSoiOnsiciI6MSwidyI6MSwiY2MiOjF9fX19.MkSnK6yGDWYUVnYiJF3tQgdTlqstfWlbziFWUr-lKUk
```

Now Alice can use this token to _create_ any cache beginning with `mission-alice-` and push space software components to them.
Try passing `--dump-claims` to show the JWT claims without encoding the token to see what's going on.

## Going Public

Let's make the cache public. Making it public gives unauthenticated users pull access:

```console
$ tetryx cache configure mission-alpha --public
✅ Configured "mission-alpha" on "local"

# Now we can query the cache without being authenticated
$ curl http://localhost:8080/mission-alpha/nix-cache-info
WantMassQuery: 1
StoreDir: /nix/store
Priority: 41
```

## Garbage Collection

In space operations, storage resources are precious and must be managed carefully.
Let's configure garbage collection on the cache to automatically delete objects that haven't been accessed in a while:

```
$ tetryx cache configure mission-alpha --retention-period '1s'
✅ Configured "mission-alpha" on "local"
```

Now the retention period is only one second.
Instead of waiting for the periodic garbage collection to occur (see `server.toml`), let's trigger it manually:

```bash
tetryxd --mode garbage-collector-once
```

Now the store path doesn't exist on the cache anymore!

```console
$ nix-store --store $PWD/nix-demo-2 -r $(which tetryx)
don't know how to build these paths:
  /nix/store/v660wl07i1lcrrgpr1yspn2va5d1xgjr-tetryx-0.1.0
error: build of '/nix/store/v660wl07i1lcrrgpr1yspn2va5d1xgjr-tetryx-0.1.0' failed

$ curl http://localhost:8080/mission-alpha/v660wl07i1lcrrgpr1yspn2va5d1xgjr.narinfo
{"code":404,"error":"NoSuchObject","message":"The requested object does not exist."}
```

Let's reset it back to the default, which is to not garbage collect (configure it in `server.toml`):

```console
$ tetryx cache configure mission-alpha --reset-retention-period
✅ Configured "mission-alpha" on "local"

$ tetryx cache info mission-alpha
               Public: true
           Public Key: mission-alpha:vlsd7ZHIXNnKXEQShVnd7erE8zcuSKrBWRpV6zTibnA=
Binary Cache Endpoint: http://localhost:8080/mission-alpha
         API Endpoint: http://localhost:8080/
      Store Directory: /nix/store
             Priority: 41
  Upstream Cache Keys: ["cache.nixos.org-1"]
     Retention Period: Global Default
```

Because of Tetryx's global deduplication, garbage collection actually happens on three levels:

1. **Local Cache**: When an object is garbage collected, only the mapping between the metadata in the local cache and the NAR in the global cache gets deleted. The local cache loses access to the NAR, but the storage isn't freed.
2. **Global NAR Store**: Orphan NARs not referenced by any local cache then become eligible for deletion.
3. **Global Chunk Store**: Finally, orphan chunks not referenced by any NAR become eligible for deletion. This time the storage space is actually freed and subsequent uploads of the same chunk will actually trigger an upload to the storage backend.

## Summary

In just a few commands, we have set up the foundation of our space operations platform:

1. Set up a new Tetryx space operations server with binary cache capabilities
2. Created a mission-specific cache for space software deployment
3. Pushed space software components to the cache
4. Configured Nix to use the space operations binary cache
5. Generated mission-specific access tokens with proper permissions
6. Made the cache publicly accessible for team collaboration
7. Performed resource-conscious garbage collection suitable for space environments

## What's next

> Note: Tetryx is an early prototype expanding from binary caching into a comprehensive space operations platform! Everything is subject to change as we build out satellite pass automation, groundstation operations, and mission planning capabilities. APIs may change without backward-compatibility as we develop the space operations features. We'd love to have space software developers and operators give it a try!

**For Production Space Operations:**
- Set up `tetryxd` with PostgreSQL and S3-compatible storage for reliability
- Deploy behind a load balancer like NGINX with HTTPS for secure space communications
- Configure distributed deployment across multiple groundstations
- Take a look at `~/.config/tetryx/server.toml` to see space-specific configuration options!

**Component Architecture:**
While it's easy to get started by running `tetryxd` in monolithic mode, for production space operations it's best to run different components separately with `--mode`:

- `api-server`: Stateless and can be replicated across groundstations
- `garbage-collector`: Performs periodic cleanup; critical for space storage management
- *(Coming soon)* `pass-scheduler`: Automated satellite pass scheduling and management
- *(Coming soon)* `groundstation-controller`: Groundstation resource coordination

**Future Space Operations Features:**
- Satellite pass prediction and automated scheduling
- Groundstation antenna control and coordination
- Real-time telemetry processing and storage
- Mission planning and coordination APIs
- Integration with space situational awareness systems
