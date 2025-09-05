# API Specification

Since this application uses Inertia.js, there is no traditional REST API. Instead, Inertia provides JSON responses for page data and form submissions.

## Inertia Response Format

```typescript
interface InertiaResponse {
  component: string;
  props: Record<string, any>;
  url: string;
  version: string;
}
```

## Key Inertia Endpoints

**Page Rendering:**
- `GET /` - Home page with hero, packages, and key blocks
- `GET /packages` - Service packages comparison
- `GET /services/{service}` - Individual service pages
- `GET /process` - SMART process explanation
- `GET /case-studies` - Case studies listing and details
- `GET /insights` - Blog posts and insights
- `GET /about` - Company information
- `GET /contact` - Contact forms and information

**Form Submissions:**
- `POST /contact` - Contact form submission
- `POST /rfp` - RFP form submission
- `POST /subscribe` - Newsletter subscription

**Admin/CMS:**
- `GET /cp` - Statamic Control Panel (authentication required)