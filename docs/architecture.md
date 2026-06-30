# Architecture

## Current Shape

VulnBoard is a Next.js App Router application with synthetic TypeScript data and
client-side filtering for the findings queue.

```text
src/
  app/
    page.tsx
    dashboard/page.tsx
    findings/page.tsx
    applications/page.tsx
    business-units/page.tsx
    sla/page.tsx
    remediation/page.tsx
    exceptions/page.tsx
    reports/page.tsx
  components/
    dashboard/
  data/
    vulnerabilities.ts
```

## Data Flow

Synthetic data is imported from `src/data/vulnerabilities.ts` into UI
components. There are no network calls, databases, API keys, or write paths in
the current demo.

## Future Architecture

Future versions can add server-side route handlers for exports, controlled AI
classification, or synthetic demo APIs. Any sensitive work should stay
server-side with validation, rate limits, and no client-side secrets.
