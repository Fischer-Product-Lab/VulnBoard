# VulnBoard PRD

## Product Summary

VulnBoard is an executive-facing vulnerability metrics dashboard for a fictional enterprise security organization. It helps security leaders, BISOs, product owners, application teams, infrastructure teams, GRC stakeholders, and executives understand where vulnerability risk is concentrated and where leadership intervention is needed.

## Portfolio Goal

Show that Trevor Fischer can translate technical security data into a polished product experience for decision makers. VulnBoard emphasizes product judgment, risk communication, ownership, secure-by-design defaults, and executive-ready storytelling.

## Problem

Vulnerability programs often have plenty of scanner data but weak executive signal. Leaders need to understand:

1. Are we getting better or worse?
2. Where is risk concentrated?
3. Which owners need intervention?
4. Which items are overdue or aging?
5. What decisions should executives make this week?

## Target Users

- CISO office and security leadership
- BISOs and security business enablement teams
- Vulnerability management program owners
- Product and application owners
- Infrastructure and cloud platform teams
- GRC and enterprise risk stakeholders
- Executives preparing for operating reviews or board updates

## V1 Scope

V1 is a read-only portfolio demo with synthetic data. It includes:

- Executive decision brief
- Portfolio risk score
- 30D, 90D, and YTD reporting periods
- High and critical finding metrics
- SLA pressure and aging buckets
- Remediation trend chart
- Owner breakdown
- Business-unit risk contribution
- Application and asset risk table
- Risk acceptance watchlist
- Remediation commitment tracker
- Finding filters directly above the findings queue
- Executive memo and mock export actions
- Portfolio landing page with links to AgentOps and TrustDesk
- About page and public documentation

## Non-Goals

- No real scanner ingestion
- No Jira, ServiceNow, cloud, CMDB, or GRC integration
- No user authentication
- No mutable remediation workflow
- No AI-generated risk decisions
- No production data
- No environment variables or secrets

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Fischer Product Lab portfolio landing page |
| `/dashboard` | Executive VulnBoard dashboard |
| `/findings` | Filterable vulnerability queue |
| `/applications` | Application and asset risk view |
| `/business-units` | Business-unit risk contribution |
| `/sla` | SLA and aging analysis |
| `/remediation` | Leadership commitments |
| `/exceptions` | Risk acceptance watchlist |
| `/reports` | Executive memo and mock export actions |
| `/about` | Product overview, docs, and security posture |

## Data Model

Synthetic findings include:

- Finding ID and CVE-style identifier
- Title and affected asset
- Severity
- Business unit
- Owner and remediation owner
- Asset type
- SLA status
- Due date
- First detected date
- Last updated date
- Exception status
- Evidence reference
- Remediation notes

## Success Criteria

- A senior reviewer can understand the risk story in under three minutes.
- The dashboard clearly connects exposure, SLA pressure, business ownership, and executive action.
- The UI feels like a credible enterprise product rather than a generic dashboard.
- All data is synthetic and safe for public GitHub/Vercel deployment.
- `npm.cmd run lint` and `npm.cmd run build` pass before publish.