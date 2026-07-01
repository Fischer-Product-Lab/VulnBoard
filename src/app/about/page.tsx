import Link from "next/link";
import { ProductShell } from "@/components/dashboard/product-shell";

const docLinks = [
  { href: "https://github.com/Fischer-Product-Lab/VulnBoard/blob/main/docs/vulnboard-prd.md", label: "Product PRD" },
  { href: "https://github.com/Fischer-Product-Lab/VulnBoard/blob/main/docs/highlights.md", label: "Highlights" },
  { href: "https://github.com/Fischer-Product-Lab/VulnBoard/blob/main/docs/threat-model.md", label: "Threat Model" },
  { href: "https://github.com/Fischer-Product-Lab/VulnBoard/blob/main/docs/BUILD_LOG.md", label: "Build Log" },
];

export default function AboutPage() {
  return (
    <ProductShell active="/about">
      <section className="topbar" aria-label="About VulnBoard">
        <div>
          <p className="eyebrow">About this demo</p>
          <h1>VulnBoard</h1>
          <p className="lede">
            A read-only Fischer Product Lab portfolio product for executive vulnerability risk reporting,
            remediation governance, and business-owned security accountability.
          </p>
        </div>
      </section>

      <section className="dashboard-grid">
        <article className="panel span-7">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Product Thesis</p>
              <h3>Translate vulnerability noise into executive action.</h3>
            </div>
          </div>
          <div className="memo-grid">
            <div>
              <strong>Problem</strong>
              <p>
                Vulnerability programs often have abundant scanner data but limited executive signal. Leaders need to
                know what changed, where risk is concentrated, who owns it, and what decisions are needed now.
              </p>
            </div>
            <div>
              <strong>Approach</strong>
              <p>
                VulnBoard combines SLA debt, severity, ownership, aging, business-unit exposure, and remediation trends
                into an executive operating surface.
              </p>
            </div>
          </div>
        </article>

        <article className="panel span-5">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Security Posture</p>
              <h3>Safe for public portfolio review</h3>
            </div>
          </div>
          <div className="commitment-list">
            <div className="commitment-row">
              <div>
                <strong>Synthetic data only</strong>
                <span>No customer, employer, scanner, ticketing, or production data.</span>
              </div>
            </div>
            <div className="commitment-row">
              <div>
                <strong>Read-only V1</strong>
                <span>No write APIs, file uploads, authentication, or admin workflows.</span>
              </div>
            </div>
            <div className="commitment-row">
              <div>
                <strong>No secrets</strong>
                <span>No environment variables or external integrations required.</span>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel span-7">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Portfolio Fit</p>
              <h3>Part of Fischer Product Lab</h3>
            </div>
          </div>
          <p className="lede">
            VulnBoard sits alongside AgentOps and TrustDesk as part of a broader portfolio focused on cyber,
            AI governance, trust, and operational risk products.
          </p>
          <div className="landing-actions about-actions">
            <Link href="/dashboard">Open dashboard</Link>
            <a href="https://agentops-fpl.vercel.app/" rel="noreferrer" target="_blank">AgentOps</a>
            <a href="https://trustdesk-fpl.vercel.app/" rel="noreferrer" target="_blank">TrustDesk</a>
          </div>
        </article>

        <article className="panel span-5">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Docs</p>
              <h3>GitHub-ready artifacts</h3>
            </div>
          </div>
          <div className="owner-list">
            {docLinks.map((doc) => (
              <div className="owner-row" key={doc.href}>
                <a href={doc.href} rel="noreferrer" target="_blank">{doc.label}</a>
                <span className="owner-score">Docs</span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </ProductShell>
  );
}
