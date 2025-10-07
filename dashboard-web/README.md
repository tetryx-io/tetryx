# Tetryx Dashboard

## Open Space & Autonomous Vehicle Stack - Administrative Interface

A modern web dashboard for managing the Tetryx open source modular stack that enables defense, aerospace, and space companies to rapidly build and support hardware components, vehicles, and autonomous systems.

![Tetryx](https://tetryx.io/logo.svg)

## Overview

Tetryx Dashboard is a Next.js-based administrative interface for the Tetryx open source stack. This dashboard serves as the central command and control interface for managing complex operations including:

- **Binary Cache Management**: High-performance Nix binary cache infrastructure for mission-critical operations
- **System Monitoring**: Real-time health monitoring and performance analytics for autonomous systems
- **Mission Control**: Centralized interface for space missions, autonomous vehicle deployments, and defense system coordination
- **Administrative Controls**: Secure user management with enterprise-grade security and reliability

The platform is designed to support organizations ranging from defense contractors to aerospace companies to space operations, providing the foundational tools needed for autonomous system development and deployment.

## Key Features

- **Binary Cache Management**: Create, configure, and monitor Nix binary caches optimized for autonomous systems and space operations
- **Real-time System Monitoring**: Performance analytics and health monitoring for mission-critical operations with predictive maintenance insights
- **Mission Control Interface**: Centralized command and control for space missions, autonomous vehicle deployments, and defense system coordination
- **Secure Authentication**: Enterprise-grade user management with JWT token authentication and role-based access control
- **Modular Architecture**: Extensible platform supporting diverse use cases from satellite deployments to autonomous vehicle networks

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
- **API**: Tetryx Server REST API (default port 8080)
- **Authentication**: JWT token-based authentication with session management
- **Real-time Updates**: Server-sent events for live system monitoring
- **Cache Operations**: RESTful endpoints for binary cache management

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
NEXT_PUBLIC_TETRYX_URL=http://localhost:8080
NEXT_PUBLIC_TETRYX_ANON_KEY=your-anon-key

# Optional: Service Role Key for administrative operations
TETRYX_SERVICE_ROLE_KEY=your-service-role-key
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

### Authentication Endpoints
- `POST /auth/login` - User authentication with email/password
- `POST /auth/signup` - User registration
- `POST /auth/logout` - User logout

### Cache Management Endpoints
- `GET /api/caches` - List all binary caches
- `GET /api/caches/:name` - Get specific cache details
- `POST /api/caches` - Create new binary cache
- `DELETE /api/caches/:name` - Delete cache

### System Monitoring
- `GET /api/stats` - System performance statistics and health metrics

Authentication is handled via JWT tokens with both localStorage and cookie-based session management for SSR compatibility.

## Contributing

1. Ensure Tetryx server is running
2. Start dashboard in development mode
3. Make changes and test locally
4. Run type checks and formatting
5. Submit pull request

## License

Licensed under the Elastic License v2 (ELv2) - see the LICENSE file for details.