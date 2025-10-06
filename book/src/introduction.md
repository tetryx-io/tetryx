# Introduction

**Tetryx** is the "Supabase for Space" - a source-available platform designed to accelerate space operations through modern software development practices. While it includes a powerful self-hostable Nix Binary Cache server backed by S3-compatible storage with global deduplication and garbage collection, Tetryx is expanding into a comprehensive "open space" stack.

The platform aims to provide:
- **Satellite Pass Automation**: Automated scheduling and execution of satellite communication passes
- **Groundstation Operations**: Database and APIs for managing groundstation resources and operations
- **Mission Planning Tools**: Software for coordinating space missions and satellite operations
- **Developer Infrastructure**: Nix-based binary cache and deployment tools optimized for space software development

Tetryx is still an early prototype expanding beyond binary caching into space operations. Want to jump in? [Start your own Tetryx server](./tutorial.md) in 15 minutes.

```
⚙️ Pushing 5 paths to "demo" on "local" (566 already cached, 2001 in upstream)...
✅ gnvi1x7r8kl3clzx0d266wi82fgyzidv-steam-run-fhs (29.69 MiB/s)
✅ rw7bx7ak2p02ljm3z4hhpkjlr8rzg6xz-steam-fhs (30.56 MiB/s)
✅ y92f9y7qhkpcvrqhzvf6k40j6iaxddq8-0p36ammvgyr55q9w75845kw4fw1c65ln-source (19.96 MiB/s)
🕒 vscode-1.74.2        ███████████████████████████████████████  345.66 MiB (41.32 MiB/s)
🕓 zoom-5.12.9.367      ███████████████████████████              329.36 MiB (39.47 MiB/s)
```

## Goals

**Space Operations Platform:**
- **Mission-Oriented Multi-Tenancy**: Create isolated environments for different space missions, satellite operators, and research teams. Each tenant operates independently without interfering with others' space operations.
- **Satellite Pass Automation**: Automate the complex scheduling and execution of satellite communication passes, including conflict resolution and resource optimization.
- **Groundstation Resource Management**: Centralized database and APIs for managing distributed groundstation networks, antennas, and communication equipment.
- **Real-time Space Operations**: Live monitoring, telemetry processing, and command & control for space assets.

**Developer Infrastructure:**
- **Global Deduplication**: Individual caches are restricted views of the content-addressed NAR Store and Chunk Store, enabling efficient sharing of space software components across missions.
- **Managed Signing**: Cryptographic signing is handled server-side for security in space-critical applications where signing keys must be protected.
- **Scalability**: Designed for deployment from single groundstations to distributed space operations centers, supporting serverless and cloud-native architectures.
- **Garbage Collection**: Automated cleanup optimized for resource-constrained space environments where storage and bandwidth are precious.
