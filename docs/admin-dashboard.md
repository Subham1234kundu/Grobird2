# Admin dashboard data

The dashboard loads lead and blog counts from Supabase on each request. Card sparklines show daily creations over the last 14 days; comparison badges compare the latest seven days against the preceding seven. Lead dates and today's lead count use Asia/Kolkata time.

## Lead remarks

Run `supabase/leads-admin.sql` once in the Supabase SQL Editor to add the `remark` column. New installations include the column in `supabase/schema.sql`. This migration preserves existing leads.

## Google Analytics reports

Enable the Google Analytics Data API in the service account's Google Cloud project and grant that service account Viewer access to your GA4 property. Set these server environment variables locally and in your hosting environment:

```dotenv
GA_PROPERTY_ID=123456789
GA_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GA_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n"
```

Restart the server after changing environment variables. Keep the private key server-only. `NEXT_PUBLIC_GA_ID` loads the site tracking tag; it does not authorize reading reports.

The page views card shows recorded views since January 1, 2020. The bar chart shows the last 14 days, and traffic bubbles show the top three channels' shares of all sessions over the last 30 days. Analytics date buckets use the property's reporting time zone. Reports can lag tracking events.

Missing credentials and API failures show an unavailable state; they never produce fabricated chart values. Leads export includes all matching records across database pages and respects the active search, status, and date filters.

References: [GA4 Data API quickstart](https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart) and [runReport](https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport).
