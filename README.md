# bun-monorepo-template

This is a monorepo template managed with [Bun Workspaces](https://bun.com/docs/pm/workspaces#workspaces).

## 📖 Documentation

### 📦 Bun Workspace Management

- [Workspaces](https://bun.com/docs/pm/workspaces) – Develop complex monorepos with multiple independent packages
- [Catalogs](https://bun.com/docs/pm/catalogs) – Share dependency versions across packages
- [bun link](https://bun.com/docs/pm/cli/link) – Link local packages for development
- [bun pm](https://bun.com/docs/pm/cli/pm) – Package manager utilities

### 🛠 Development Tooling

- [EditorConfig](https://editorconfig.org/) – Consistent coding styles across editors
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) – High-performance linter for JS & TS
- [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) – High-performance formatter
- [Husky](https://typicode.github.io/husky/) – Git hooks for linting & testing
- [Vitest](https://vitest.dev/) - Next generation testing framework powered by Vite

### 🚀 Runtime Targets

- [Hono](https://hono.dev/) - Small, simple, and ultra fast web framework built on Web Standards
- [Electrobun](https://blackboard.sh/electrobun/docs/) - Ultra fast and tiny desktop app framework

## 🗂 Project Structure

```asciidoc
bun-monorepo-template/
├── apps/                             # Applications
│   ├── cli/                          # Command Line applications
│   │   └── cli-app/                  # Sample Command Line application
│   │   └── tsconfig.cli.json         # Command Line applications TypeScript config
│   ├── desktop/                      # Desktop applications
│   │   └── electrobun-app/           # Sample Desktop application
│   │   └── tsconfig.desktop.json     # Desktop applications TypeScript config
│   ├── workers/                      # Cloudflare workers
│   │   └── hono-app/                 # Sample Cloudflare worker
│   │   └── tsconfig.workers.json     # Cloudflare workers TypeScript config
│   │   └── vitest.workers.config.ts  # Cloudflare workers Vitest config
├── packages/                         # Packages
│   └── shared/                       # Shared utilities, constants, and types
│   └── devtools/                     # Shared devtools
├── scripts/                          # Repo level shell scripts
├── types/                            # Repo level TypeScript type definitions
├── .editorconfig                     # Root EditorConfig config
├── .oxfmtrc.json                     # Root Oxfmt config
├── .oxlintrc.json                    # Root Oxlint config
├── package.json                      # Root package.json
├── tsconfig.base.json                # Base TypeScript config
```

## 🚀 Getting started

```bash
# Install dependencies
bun install

# Run all apps in normal mode
bun run start

# Run specific apps in normal mode
bun run start:cli-app            # CLI app only
bun run start:electrobun-app     # Electrobun app only

# Run all apps in development mode
bun run dev

# Run specific apps in development mode
bun run dev:cli-app            # CLI app only
bun run dev:hono-app           # Hono worker only
bun run dev:electrobun-app     # Electrobun app only

# Build all apps
bun run build

# Build specific apps
bun run build:cli-app

# Deploy all apps
bun run deploy

# Deploy specific apps
bun run deploy:hono-app

# Test all apps
bun run test          # Without watch mode
bun run test:watch    # With watch mode

# Test only affected files
bun run test:affected

# Test specific apps
bun run test:hono-app

# Format all files
bun run fmt           # Format files
bun run fmt:check     # Check only

# Lint all files
bun run lint          # Check only
bun run lint:fix      # Fix files
```
