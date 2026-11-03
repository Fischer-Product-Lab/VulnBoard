# VulnBoard - Vulnerability Metrics Dashboard

VulnBoard is a Fischer Product Lab portfolio product for executive vulnerability risk reporting. It turns synthetic vulnerability data into a board-ready operating view of exposure, SLA pressure, remediation trends, owner accountability, exceptions, and business-unit risk.

**Status:** V1 live on Vercel and published to GitHub  
**Live demo:** https://vuln-board.vercel.app/  
**Repository:** https://github.com/Fischer-Product-Lab/VulnBoard  
**Portfolio:** Fischer Product Lab  
**Demo posture:** Read-only, synthetic data only, no production integrations

## Portfolio Context

Fischer Product Lab is Trevor Fischer's portfolio of cyber, AI governance, trust, and operational risk product demos. The suite is designed to show practical product thinking, security judgment, executive communication, and secure-by-design delivery.

Related live demos:

| Product | Focus | Demo |
| --- | --- | --- |
| VulnBoard | Vulnerability risk and executive remediation governance | https://vuln-board.vercel.app/ |
| AgentOps | AI operations and governance | https://agentops-fpl.vercel.app/ |
| TrustDesk | Trust, risk, assurance, and control evidence | https://trustdesk-fpl.vercel.app/ |

## What VulnBoard Demonstrates

- Executive decision framing for vulnerability management
- High and critical finding visibility
- SLA debt, aging, and overdue exposure
- Remediation velocity and trend analysis
- Owner and business-unit accountability
- Application and infrastructure risk views
- Risk acceptance and exception watchlists
- Board-ready narrative and mock export actions

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Cinematic VulnBoard marketing landing |
| `/demo` | Working executive dashboard (same product as `/dashboard`) |
| `/dashboard` | Executive VulnBoard dashboard |
| `/findings` | Findings queue and vulnerability table |
| `/applications` | Highest-risk applications and assets |
| `/business-units` | Business-unit risk contribution |
| `/sla` | SLA health and aging buckets |
| `/remediation` | Leadership commitments and remediation tracker |
| `/exceptions` | Risk acceptance watchlist |
| `/reports` | Executive memo and report actions |
| `/about` | Demo overview, architecture, security posture, and docs |

## Security Posture

VulnBoard is intentionally safe for a public portfolio demo:

- Synthetic mock data only
- No customer, employer, or production data
- No secrets, API keys, or environment variables
- No file uploads
- No write API routes or mutable workflows
- No AI calls in V1
- Static/read-only demo behavior

See [SECURITY.md](SECURITY.md) and [docs/threat-model.md](docs/threat-model.md).

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Local typed synthetic data
- npm scripts
- Vercel-ready static build

## Getting Started

Run from the local project folder:

```powershell
cd "C:\Users\t_fis\dev\Vulnerability Dashboard"
npm install
npm.cmd run dev -- -p 3001
```

Then open:

```text
http://localhost:3001
```

## Verification

```powershell
npm.cmd run lint
npm.cmd run build
```

Both should pass before publishing or deploying.

## Documentation

- [Product PRD](docs/vulnboard-prd.md)
- [Portfolio Highlights](docs/highlights.md)
- [Threat Model](docs/threat-model.md)
- [Build Log](docs/BUILD_LOG.md)
- [Architecture Notes](docs/architecture.md)
- [Security Controls](docs/security-controls.md)

## Repository And Deployment

- Repository: https://github.com/Fischer-Product-Lab/VulnBoard
- Live demo: https://vuln-board.vercel.app/
- Deployment source: Vercel import from the GitHub `main` branch

Recommended pre-publish checks for future changes:

```powershell
npm.cmd run lint
npm.cmd run build
```

## Local product-experience refresh

The findings workspace now supports searchable, shareable URL filters, deterministic
priority ordering, and inline evidence review. Example: `/findings?severity=Critical&sla=Overdue`.
The dashboard and `/demo` use the same queue. On narrow screens, the queue becomes a
readable card list and product navigation is a native disclosure menu.

All eight sample findings and portfolio aggregates remain synthetic. The sample
queue is separate from aggregate metrics. Reporting-period controls update the
executive brief, operating signals, and trend only; other views retain the fixed
June 2026 scenario. Refresh does not imply a live data connection.

Run `npm test`, `npm run lint`, `npx tsc --noEmit`, and `npm run build` before review.
The unit and server-rendered component tests use Node's built-in test runner and
the existing TypeScript development dependency. Real-browser responsive and
interaction checks are still required before publication.
