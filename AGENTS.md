<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Fischer Product Lab Agent Guide

Future Codex sessions should read this file before making product, design, or
code changes in this workspace.

## Project Context

Fischer Product Lab is Trevor Fischer's cyber, AI governance, trust, and
operational risk product portfolio. The goal is to build polished
enterprise-grade demo products that show security judgment, product thinking,
executive communication, and secure-by-design delivery.

The first product is VulnBoard, a Vulnerability Metrics Dashboard for a
fictional enterprise security organization. It should feel like an internal
executive product used by security leaders, BISOs, product owners, application
teams, infrastructure teams, and executives.

## Build Standards

- Keep the product portfolio-grade, not toy-like.
- Use synthetic/mock data only.
- Prefer realistic product behavior over visual gimmicks.
- Keep code simple, readable, and maintainable.
- Avoid external services, paid APIs, secrets, and production integrations
  unless explicitly requested.
- Make the demo useful for a hiring manager or senior security/product leader
  reviewing Trevor's portfolio.

## Design Standards

- Executive-facing enterprise SaaS feel.
- Premium command-center polish: deep navy/black, ivory panels, restrained gold
  accents.
- Clear information architecture and strong data hierarchy.
- Crisp, practical security language.
- No fake hacker aesthetic, fear-based copy, or gimmicky AI visuals.
- Responsive layout with no horizontal overflow.

## Security Expectations

- Never hardcode secrets, credentials, tokens, or real system identifiers.
- Keep all data synthetic.
- Do not connect to real customer, employer, vulnerability scanner, ticketing,
  cloud, or AI systems unless Trevor explicitly asks.
- Do not add public write paths for the initial portfolio demo.
- Add validation and defensive handling if forms or inputs are introduced.
- Prefer read-only local/mock behavior for V1.

## Current Product Scope

VulnBoard should include:

- Executive summary and mock executive memo
- Critical/high findings
- SLA status and aging buckets
- Owner/team breakdown
- Remediation trends
- Business-unit risk view
- Application or infrastructure risk view
- Risk acceptance tracking
- Findings table and detail-oriented data
- Mock export actions for CSV, PDF, and executive memo
