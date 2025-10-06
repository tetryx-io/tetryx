# Tetryx

**Tetryx** is the "Supabase for Space" - a source-available platform for space operations that includes a self-hostable Nix Binary Cache server, satellite pass automation backend, groundstation operations database and APIs, and more.

The platform is designed to enable rapid development and deployment of space software systems with modern DevOps practices, featuring a Nix-based binary cache server with global deduplication and garbage collection as its foundation.

Tetryx is an early prototype expanding into a comprehensive space operations stack.

```
⚙️ Pushing 5 paths to "demo" on "local" (566 already cached, 2001 in upstream)...
✅ gnvi1x7r8kl3clzx0d266wi82fgyzidv-steam-run-fhs (29.69 MiB/s)
✅ rw7bx7ak2p02ljm3z4hhpkjlr8rzg6xz-steam-fhs (30.56 MiB/s)
✅ y92f9y7qhkpcvrqhzvf6k40j6iaxddq8-0p36ammvgyr55q9w75845kw4fw1c65ln-source (19.96 MiB/s)
🕒 vscode-1.74.2        ███████████████████████████████████████  345.66 MiB (41.32 MiB/s)
🕓 zoom-5.12.9.367      ███████████████████████████              329.36 MiB (39.47 MiB/s)
```

## Try it out (15 minutes)

Let's [spin up Tetryx](https://docs.tetryx.rs/tutorial.html) in just 15 minutes.
And yes, it works on macOS too!

## Goals

**Space Operations Platform:**
- **Satellite Pass Automation**: Automated scheduling and execution of satellite communication passes
- **Groundstation Operations**: Database and APIs for managing groundstation resources and operations
- **Mission Planning**: Tools for planning and coordinating space missions and satellite operations
- **Real-time Monitoring**: Live monitoring and telemetry processing for space assets

**Developer Infrastructure (Nix Binary Cache):**
- **Multi-Tenancy**: Create isolated environments for different missions, teams, and organizations. Tenants are mutually untrusting and cannot interfere with each other's operations.
- **Global Deduplication**: Individual caches are restricted views of the content-addressed store, enabling efficient sharing of common space software components.
- **Managed Signing**: Cryptographic signing is handled server-side, ensuring integrity without exposing private keys.
- **Scalability**: Designed for deployment on modern cloud platforms and serverless infrastructure, from single-node setups to distributed space operations centers.
- **Garbage Collection**: Automated cleanup of unused artifacts to maintain optimal performance in resource-constrained environments.

## Licensing

Tetryx is available under the **Elastic License 2.0**.
See `LICENSE` for details.

By contributing to the project, you agree to license your work under the aforementioned license.
