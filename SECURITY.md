# Security Policy

VulnBoard is a read-only Fischer Product Lab portfolio demo. It uses synthetic data only and is not connected to production systems.

## Supported Scope

This repository contains a public portfolio application intended to demonstrate executive vulnerability risk reporting and remediation governance. Security review should focus on the demo app, documentation, and repository configuration.

## Demo Security Posture

- Synthetic mock data only
- No customer, employer, or production data
- No secrets or environment variables required for V1
- No external service integrations
- No file uploads
- No public write endpoints
- No authentication, authorization, or admin workflow in V1
- No AI calls or model integrations in V1
- Read-only static/demo behavior

## Out of Scope

- Real vulnerability scanner integrations
- Real ticketing, cloud, CMDB, or GRC systems
- Real user accounts or authentication
- Production incident, customer, employer, or personal data
- Mutable remediation workflows

## Reporting Issues

For portfolio review feedback, open a GitHub issue or contact Trevor Fischer directly. Do not include secrets, real customer data, proprietary vulnerability details, or employer-specific system information in reports.

If you discover a security concern in this demo, include:

- A concise description
- Reproduction steps using synthetic demo data only
- Potential impact
- Suggested mitigation, if known

## Data Handling

All data in this app should remain synthetic. Do not paste real CVEs tied to private environments, scanner exports, tickets, hostnames, IP addresses, user details, or proprietary control evidence into the repo or app.