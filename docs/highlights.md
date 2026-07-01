# VulnBoard Highlights

## One-Line Summary

VulnBoard turns vulnerability management data into an executive operating dashboard for remediation decisions, owner accountability, SLA pressure, and business risk visibility.

**Live demo:** https://vuln-board.vercel.app/

## Why It Matters

Security leaders rarely need more raw vulnerability data. They need decision-quality signals: what changed, what is overdue, where risk is concentrated, who owns it, and what leadership action is required.

VulnBoard demonstrates that translation layer.

## Product Highlights

- Executive decision brief with posture, business exposure, SLA decision, and action-needed signals
- Reporting-period controls for 30D, 90D, and YTD views
- SLA health, overdue exposure, aging buckets, and due-soon pressure
- Remediation trend chart showing opened vs remediated findings
- Owner breakdown and business-unit risk contribution
- Application and asset risk view
- Risk acceptance watchlist
- Leadership commitment tracker
- Finding filters placed directly above the filtered vulnerability queue
- Executive memo and mock export actions
- Portfolio landing page linking VulnBoard, AgentOps, and TrustDesk

## Engineering Highlights

- Next.js 16 App Router application
- TypeScript synthetic data model
- Read-only local data architecture
- Static-build friendly routes
- Responsive enterprise SaaS layout
- Accessible labels for filters and controls
- No secrets, no external services, no production integrations

## Security Highlights

- Synthetic data only
- No public write endpoints
- No file uploads
- No AI calls in V1
- No environment variables needed
- Threat model and security policy included
- GitHub hardening prepared with Dependabot and CodeQL workflows

## Interview Talking Points

- How to turn scanner noise into executive decision support
- How to frame vulnerability metrics around ownership and business impact
- Why the filter controls were moved next to the findings queue
- How the demo stays safe for public deployment
- How VulnBoard fits into a broader cyber, AI governance, trust, and operational risk portfolio
