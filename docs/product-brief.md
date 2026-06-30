# Product Brief: Vulnerability Metrics Dashboard

## Concept

The Vulnerability Metrics Dashboard is an executive-facing remediation and security risk analytics product for a fictional enterprise environment. It helps security leaders, BISOs, product owners, application teams, infrastructure teams, and executives understand where vulnerability risk is concentrated and where leadership intervention is needed.

## Target Users

- CISO office and security leadership
- BISOs and security business enablement teams
- Vulnerability management program owners
- Product and application owners
- Infrastructure and cloud platform teams
- GRC and enterprise risk stakeholders

## Core Workflows

1. Review executive risk posture and current remediation trend.
2. Identify critical/high findings and SLA pressure.
3. Filter findings by severity, owner, business unit, SLA status, and asset type.
4. Compare business-unit and application-level risk.
5. Review overdue, due-soon, and aging exposure.
6. Track risk acceptances and remediation commitments.
7. Prepare an executive memo or leadership status report.

## Feature List

- Executive summary cards
- Portfolio risk score
- Critical/high findings metrics
- SLA compliance and aging visualization
- Remediation velocity and reopened finding metrics
- Business-unit risk breakdown
- Application owner risk table
- Vulnerability findings table
- Exception/risk acceptance tracking
- Mock export controls for CSV, PDF, and executive memo

## Data Model

Synthetic findings include:

- Finding ID and CVE-style identifier
- Severity
- Affected application or infrastructure asset
- Business unit
- Application owner
- Remediation owner
- Asset type
- SLA status
- First detected date
- Due date
- Last updated date
- Exception/risk acceptance status
- Evidence link
- Remediation notes

## Screens / Pages

The intended full product includes:

- Landing page
- Executive dashboard
- Findings table and detail view
- Application risk view
- Business-unit risk view
- SLA and aging analysis
- Remediation tracker
- Exceptions and risk acceptance
- Reports and executive memo view

The current static prototype compresses these into a polished single-page dashboard with navigation anchors.

## Success Criteria

- A senior security or product leader can understand the risk story in under three minutes.
- The demo clearly communicates business ownership, SLA pressure, and remediation progress.
- The UI feels like a credible enterprise security product, not a generic dashboard.
- The implementation uses synthetic data only and avoids unsafe integrations.
