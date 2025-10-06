# Tetryx Dashboard

## Open Space & Autonomous Vehicle Stack - Administrative Interface

A modern web dashboard for managing the Tetryx open source modular stack, providing centralized administration for defense, aerospace, and space companies building autonomous systems.

![Tetryx](https://tetryx.io/logo.svg)

## Overview

Tetryx Dashboard is a Next.js-based administrative interface for the Tetryx open source stack. It enables system administrators and mission operators to monitor cache performance, manage binary distributions, oversee hardware component deployments, and maintain system health across distributed autonomous vehicle networks.

## Features

- **Binary Cache Management**: View, create, and configure Nix binary caches for autonomous systems
- **System Monitoring**: Real-time statistics and health monitoring for mission-critical operations
- **Hardware Component Tracking**: Monitor and manage distributed hardware deployments
- **Mission Control Interface**: Centralized control for space missions and autonomous vehicle networks
- **Administrative Controls**: Secure user management and system permissions for enterprise environments

## Tech Stack

### Frontend
- **Framework**: Next.js 14+
- **UI Components**:
  - Tailwind CSS for styling
  - HeadlessUI for accessible components
  - Custom dashboard components
- **State Management**: React Context + GraphQL
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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run type-check` - Run TypeScript checks
- `npm run format:check` - Check code formatting
- `npm run format:fix` - Fix code formatting

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