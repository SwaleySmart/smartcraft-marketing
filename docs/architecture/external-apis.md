# External APIs

## PostHog Analytics
- **Purpose:** User behavior tracking, conversion analytics, and performance monitoring
- **Documentation:** https://posthog.com/docs/api
- **Base URL:** https://app.posthog.com/
- **Authentication:** API key authentication
- **Rate Limits:** 1000 requests per minute per project

**Key Endpoints Used:**
- `POST /capture/` - Event tracking
- `GET /api/projects/{id}/events/` - Event retrieval for analysis

**Integration Notes:** Events are sent from both server-side (Laravel) and client-side (Vue) for comprehensive tracking

## Form Webhook Integrations
- **Purpose:** Lead processing and CRM integration for contact forms
- **Documentation:** To be configured based on chosen CRM
- **Base URL:** Various webhook endpoints
- **Authentication:** Bearer tokens or webhook signatures
- **Rate Limits:** Varies by provider

**Key Endpoints Used:**
- `POST /webhook/contact` - Contact form submissions
- `POST /webhook/rfp` - RFP form submissions

**Integration Notes:** Statamic forms can be configured to send to multiple webhook endpoints simultaneously