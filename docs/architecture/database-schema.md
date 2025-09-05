# Data Storage Architecture

## Statamic Flat-File Architecture

This project uses **pure flat-file storage** via Statamic CMS. No database is required for content, users, or configuration.

## File-Based Storage Structure

```
content/
├── collections/           # Content collections (pages, posts, etc.)
│   ├── pages/            # Marketing pages
│   └── posts/            # Blog posts
├── globals/              # Global settings (header, footer, SEO)
├── navigation/           # Site navigation structures  
├── taxonomies/           # Categories, tags, etc.
└── trees/               # Site structure definitions

users/                    # User accounts (editors, admins)
├── user1@example.com.yaml
└── user2@example.com.yaml

resources/
├── blueprints/          # Content structure definitions
├── fieldsets/           # Reusable field groups
└── forms/              # Contact forms, lead generation

storage/
├── forms/              # Form submissions (flat files)
├── logs/               # Application logs
└── statamic/           # Statamic cache and temporary files
```

## Cache Storage

Laravel configured for file-based caching:

```php
// config/cache.php
'default' => 'file',

'stores' => [
    'file' => [
        'driver' => 'file',
        'path' => storage_path('framework/cache/data'),
    ],
],
```

## Session Storage

Sessions stored as files:

```php
// config/session.php  
'driver' => 'file',
'files' => storage_path('framework/sessions'),
```

## Form Submissions

Statamic forms store submissions as YAML files:

```
storage/forms/contact/
├── 2024-01-15-143022.yaml
├── 2024-01-15-150334.yaml
└── 2024-01-15-162145.yaml
```

## No Database Required

The following are **NOT needed** for this project:
- ❌ MySQL/PostgreSQL database  
- ❌ Database migrations
- ❌ User authentication tables
- ❌ Content storage tables
- ❌ Session database storage

## Benefits of Flat-File Architecture

- **Version Control**: All content tracked in Git
- **Simple Deployment**: No database migrations or syncing
- **Performance**: Fast file-based reads, built-in caching
- **Backup**: Simple file system backups
- **Security**: No SQL injection risks
- **Development**: Easy local setup, no database configuration