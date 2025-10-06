# Tetryx Dashboard

## Space Operations Platform Dashboard

A modern web dashboard for managing Tetryx cache operations, monitoring system health, and controlling space mission artifacts.

![Tetryx](https://tetryx.io/logo.svg)

## Overview

Tetryx Dashboard is a Next.js-based web interface that provides comprehensive management capabilities for the Tetryx space operations platform. It enables mission operators to monitor cache performance, manage storage, and oversee binary artifact distribution for space missions.

## Features

- **Cache Management**: View, create, and configure Nix binary caches
- **System Monitoring**: Real-time statistics and health monitoring
- **Storage Analytics**: Track storage usage and performance metrics
- **Mission Control**: Manage space mission artifacts and dependencies
- **User Management**: Handle authentication and permissions

## Tech Stack

### Frontend
- **Framework**: Next.js 14+
- **UI Components**:
  - Tailwind CSS for styling
  - HeadlessUI for accessible components
  - Custom dashboard components
- **State Management**: React Context + SWR
- **Type Safety**: TypeScript

### Backend Integration
- **API**: Tetryx Server REST API (port 8080)
- **Authentication**: JWT tokens
- **Real-time Updates**: Server-sent events

### Development Tools
- **Type Checking**: TypeScript
- **Code Formatting**: Prettier
- **Linting**: ESLint
- **Package Manager**: npm/yarn

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn package manager
- Running Tetryx server instance

### Environment Setup

Create a `.env.local` file in the root directory:

```bash
# Tetryx Server Configuration
NEXT_PUBLIC_TETRYX_API_URL=http://localhost:8080
NEXT_PUBLIC_DASHBOARD_PORT=3000

# Optional: Authentication
TETRYX_JWT_SECRET=your-jwt-secret
```

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Building for Production

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

## Development

### Project Structure

```
dashboard-web/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Main dashboard pages
│   ├── caches/           # Cache management
│   ├── settings/         # Configuration
│   └── api/              # API routes (proxy to Tetryx server)
├── components/           # Reusable UI components
├── lib/                  # Utilities and helpers
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run type-check` - Run TypeScript checks
- `npm run format:check` - Check code formatting
- `npm run format:fix` - Fix code formatting

## Deployment

The dashboard can be deployed alongside the Tetryx server or as a standalone service:

### Docker
```bash
docker build -t tetryx-dashboard .
docker run -p 3000:3000 tetryx-dashboard
```

### Nix
```bash
nix build .#tetryx-dashboard-web
```

## API Integration

The dashboard communicates with the Tetryx server via REST API:

- `GET /api/caches` - List all caches
- `GET /api/stats` - System statistics
- `POST /api/caches` - Create new cache
- `DELETE /api/caches/:name` - Delete cache

Authentication uses JWT tokens provided by the Tetryx server.

## Contributing

1. Ensure Tetryx server is running
2. Start dashboard in development mode
3. Make changes and test locally
4. Run type checks and formatting
5. Submit pull request

## License

Licensed under the Elastic License v2 (ELv2) - see the LICENSE file for details.