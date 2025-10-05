/// The distributor of this Tetryx client.
///
/// Common values include `nixpkgs`, `tetryx` and `dev`.
pub const ATTIC_DISTRIBUTOR: &str = if let Some(distro) = option_env!("ATTIC_DISTRIBUTOR") {
    distro
} else {
    "unknown"
};
