# Unified Project Structure

```
smartcraft/
├── .github/                    # CI/CD workflows
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── app/                        # Laravel application
│   ├── Http/
│   │   ├── Controllers/        # Page and form controllers
│   │   ├── Middleware/         # Custom middleware
│   │   └── Requests/           # Form request validation
│   ├── Services/               # Business logic services
│   ├── Repositories/           # Data access layer
│   ├── Events/                 # Laravel events for analytics
│   └── Listeners/              # Event listeners
├── resources/                  # Frontend and views
│   ├── js/                     # Vue 3 application
│   │   ├── Components/         # Vue components
│   │   │   ├── Blocks/         # Statamic block components
│   │   │   ├── Layout/         # Layout components
│   │   │   └── UI/             # Shared UI components
│   │   ├── Pages/              # Inertia page components
│   │   ├── Composables/        # Vue composition functions
│   │   ├── Stores/             # Pinia stores
│   │   ├── Types/              # TypeScript definitions
│   │   └── app.ts              # Vue app entry point
│   ├── views/                  # Minimal Blade layouts
│   ├── css/                    # Tailwind CSS
│   └── lang/                   # Language files
├── content/                    # Statamic content
│   ├── collections/            # Content collections
│   ├── globals/                # Global content
│   ├── assets/                 # Asset containers
│   └── users/                  # Content editors
├── config/                     # Laravel + Statamic config
├── database/                   # Database migrations
├── storage/                    # File storage and cache
├── public/                     # Web root and compiled assets
├── tests/                      # Application tests
│   ├── Feature/                # Laravel feature tests
│   ├── Unit/                   # Laravel unit tests
│   └── E2E/                    # Playwright tests
├── .env.example                # Environment template
├── package.json                # Frontend dependencies
├── composer.json               # PHP dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── playwright.config.ts        # E2E test configuration
└── README.md
```