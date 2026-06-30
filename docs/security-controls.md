# Security Controls

## Secure Defaults

VulnBoard is read-only and uses synthetic local data. The public demo should not
accept uploads, store user input, or call production integrations.

## Data Minimization

The app uses fictional applications, owners, business units, CVE-style IDs, and
remediation notes. No employer, customer, or personal data belongs in the demo.

## Secrets Management

V1 does not require secrets. If future integrations are added, secrets must live
in environment variables and must never use a public `NEXT_PUBLIC_` prefix unless
the value is intentionally public.

## AI Safety

V1 does not include arbitrary public AI prompts. Future AI workflows should use
bounded server-side routes, validation, deterministic policy checks, audit
events, and human review for high-risk outputs.

## Auditability

Portfolio workflows should show ownership, SLA status, exception state,
remediation notes, and leadership commitments so decisions are explainable.
