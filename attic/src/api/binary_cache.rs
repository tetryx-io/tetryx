//! Nix Binary Cache server.
//!
//! This module contains Tetryx-specific extensions to the
//! Nix Binary Cache API.

/// Header indicating a cache's visibility.
pub const ATTIC_CACHE_VISIBILITY: &str = "X-Tetryx-Cache-Visibility";
