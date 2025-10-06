use std::env;
use std::net::SocketAddr;
use std::path::PathBuf;

use anyhow::Result;
use clap::{Parser, ValueEnum};
use tokio::join;
use tokio::task::spawn;
use tracing_error::ErrorLayer;
use tracing_subscriber::prelude::*;
use tracing_subscriber::EnvFilter;

use tetryx_server::config;

/// Tetryx space operations platform server.
#[derive(Debug, Parser)]
#[clap(version)]
#[clap(propagate_version = true)]
struct Opts {
    /// Path to the config file.
    #[clap(short = 'f', long)]
    config: Option<PathBuf>,

    /// Socket address to listen on.
    ///
    /// This overrides `listen` in the config.
    #[clap(short = 'l', long)]
    listen: Option<SocketAddr>,

    /// Mode to run.
    #[clap(long, default_value = "monolithic")]
    mode: ServerMode,

    /// Whether to enable tokio-console.
    ///
    /// The console server will listen on its default port.
    #[clap(long)]
    tokio_console: bool,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, ValueEnum)]
enum ServerMode {
    /// Run all components.
    Monolithic,

    /// Run the API server.
    ApiServer,

    /// Run the garbage collector periodically.
    GarbageCollector,

    /// Run the database migrations then exit.
    DbMigrations,

    /// Run garbage collection then exit.
    GarbageCollectorOnce,

    /// Check the configuration then exit.
    CheckConfig,
}

#[tokio::main]
async fn main() -> Result<()> {
    let opts = Opts::parse();

    init_logging(opts.tokio_console);
    dump_version();

    let config =
        config::load_config(opts.config.as_deref(), opts.mode == ServerMode::Monolithic).await?;

    match opts.mode {
        ServerMode::Monolithic => {
            tetryx_server::run_migrations(config.clone()).await?;

            let (api_server, _) = join!(
                tetryx_server::run_api_server(opts.listen, config.clone()),
                tetryx_server::gc::run_garbage_collection(config.clone()),
            );

            api_server?;
        }
        ServerMode::ApiServer => {
            tetryx_server::run_api_server(opts.listen, config).await?;
        }
        ServerMode::GarbageCollector => {
            tetryx_server::gc::run_garbage_collection(config.clone()).await;
        }
        ServerMode::DbMigrations => {
            tetryx_server::run_migrations(config).await?;
        }
        ServerMode::GarbageCollectorOnce => {
            tetryx_server::gc::run_garbage_collection_once(config).await?;
        }
        ServerMode::CheckConfig => {
            // config is valid, let's just exit :)
        }
    }

    Ok(())
}

fn init_logging(tokio_console: bool) {
    let env_filter = EnvFilter::from_default_env();
    let fmt_layer = tracing_subscriber::fmt::layer().with_filter(env_filter);

    let error_layer = ErrorLayer::default();

    let console_layer = if tokio_console {
        let (layer, server) = console_subscriber::ConsoleLayer::new();
        spawn(server.serve());
        Some(layer)
    } else {
        None
    };

    tracing_subscriber::registry()
        .with(fmt_layer)
        .with(error_layer)
        .with(console_layer)
        .init();

    if tokio_console {
        eprintln!("Note: tokio-console is enabled");
    }
}

fn dump_version() {
    #[cfg(debug_assertions)]
    eprintln!("Tetryx Server {} (debug)", env!("CARGO_PKG_VERSION"));

    #[cfg(not(debug_assertions))]
    eprintln!("Tetryx Server {} (release)", env!("CARGO_PKG_VERSION"));

    eprintln!();
    eprintln!("Supabase for Space - Space Operations Platform");
    eprintln!("Documentation: https://docs.tetryx.io");
    eprintln!();
}
