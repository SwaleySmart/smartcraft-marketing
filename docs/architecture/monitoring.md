# Monitoring and Observability

## Monitoring Stack
- **Frontend Monitoring:** PostHog for user analytics and error tracking
- **Backend Monitoring:** Laravel Telescope for local debugging, server logs for production
- **Error Tracking:** Laravel's built-in error logging + PostHog error capture
- **Performance Monitoring:** Laravel Horizon for queue monitoring, server metrics via Ploi

## Key Metrics

**Frontend Metrics:**
- Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.05)
- JavaScript errors and unhandled promises
- API response times from frontend perspective
- User interactions and conversion funnels

**Backend Metrics:**
- Request rate and response time distribution
- Error rate by endpoint and error type
- Database query performance and slow query log
- Cache hit rates and memory usage

---

*This architecture document serves as the definitive guide for developing the Smartcraft marketing website. All development decisions should align with the patterns and technologies defined herein.*