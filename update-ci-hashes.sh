#!/usr/bin/env bash
# Script to update CI installer hashes

set -euo pipefail

echo "Building packages and extracting store paths..."

# Build for current system (x86_64-linux)
echo "Building for x86_64-linux..."
LINUX_AMD64_PATH=$(nix build .#tetryx --print-out-paths)
LINUX_AMD64_STATIC_PATH=$(nix build .#tetryx-client-static --print-out-paths 2>/dev/null || echo "FAILED")

echo "Current store paths:"
echo "  x86_64-linux: $LINUX_AMD64_PATH"
echo "  x86_64-linux-static: $LINUX_AMD64_STATIC_PATH"

# For cross-compilation, you would need:
# - Build server with cross-compilation support
# - Or build on each platform separately
# - Or use GitHub Actions matrix builds

echo ""
echo "To get hashes for other platforms, you need to:"
echo "1. Build on each target platform, or"
echo "2. Set up cross-compilation, or"
echo "3. Use CI/GitHub Actions to build on multiple platforms"

echo ""
echo "Example GitHub Actions matrix build:"
cat << 'EOF'
strategy:
  matrix:
    include:
      - system: x86_64-linux
        os: ubuntu-latest
      - system: aarch64-linux
        os: ubuntu-latest
      - system: x86_64-darwin
        os: macos-latest
      - system: aarch64-darwin
        os: macos-latest
steps:
  - name: Build and extract path
    run: |
      nix build .#tetryx --print-out-paths > store-path-${{ matrix.system }}.txt
EOF

echo ""
echo "The ci-installer.nix automatically generates the correct script."
echo "If you need to manually update, the current hash format should be:"
echo "  /nix/store/aarxasq8110q5983xavdnfkkrsxi8p0j-tetryx-0.1.0"