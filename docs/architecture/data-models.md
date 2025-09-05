# Data Models

## Page
**Purpose:** Represents all website pages using Statamic's flexible page builder approach

**Key Attributes:**
- id: string - Unique page identifier
- title: string - Page title for SEO and navigation
- slug: string - URL-friendly identifier
- template: string - Blade template to use for rendering
- content: array - Replicator field containing page blocks
- seo_title: string - SEO optimized title
- meta_description: string - Page meta description
- published: boolean - Publication status

### TypeScript Interface
```typescript
interface Page {
  id: string;
  title: string;
  slug: string;
  template: string;
  content: Block[];
  seo_title?: string;
  meta_description?: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}
```

### Relationships
- Has many blocks through content replicator field
- Belongs to site taxonomy

## Block
**Purpose:** Individual content blocks that make up pages (Hero, Packages, etc.)

**Key Attributes:**
- type: string - Block type identifier (hero, packages, comparison, etc.)
- data: object - Block-specific configuration and content
- enabled: boolean - Whether block is active
- order: number - Display order on page

### TypeScript Interface
```typescript
interface Block {
  type: string;
  data: Record<string, any>;
  enabled: boolean;
  order?: number;
}
```

### Relationships
- Belongs to Page through replicator field

## Post
**Purpose:** Blog posts and insights content

**Key Attributes:**
- id: string - Unique post identifier
- title: string - Post title
- slug: string - URL-friendly identifier
- content: string - Post content using Bard field
- excerpt: string - Short description
- published_at: datetime - Publication date
- author: string - Content author
- categories: array - Post categories
- featured_image: string - Main post image

### TypeScript Interface
```typescript
interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  published_at: string;
  author?: string;
  categories: string[];
  featured_image?: string;
  seo_title?: string;
  meta_description?: string;
}
```

### Relationships
- Belongs to categories taxonomy
- May have featured image asset