import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import WorkflowBaselineCalculator from "./workflow-baseline";

export const metadata: Metadata = {
  title: "AI Vendor Review Acceleration Sprint",
  description:
    "A fixed-scope, 10-business-day workflow sprint for third-party risk, GRC, procurement risk, and AI governance teams.",
  openGraph: {
    title: "AI Vendor Review Acceleration Sprint",
    description:
      "Turn one document-heavy vendor-review workflow into a human-controlled, measurable pilot decision in 10 business days.",
  },
  twitter: {
    card: "summary",
    title: "AI Vendor Review Acceleration Sprint",
    description:
      "Turn one document-heavy vendor-review workflow into a human-controlled, measurable pilot decision in 10 business days.",
  },
};

const fitCheckHref =
  "mailto:hello@fischerproductlab.com?subject=Vendor%20Review%20Workflow%20Sprint%20fit%20check&body=Hi%20Trevor%2C%0A%0AI%27d%20like%20to%20check%20whether%20the%20sprint%20fits%20our%20workflow.%0A%0AOrganization%3A%0AMy%20role%3A%0AWorkflow%20to%20review%3A%0AApproximate%20monthly%20volume%3A%0ABiggest%20delay%20or%20source%20of%20rework%3A%0ADesired%20decision%20timing%3A%0A";

const deliverables = [
  {
    number: "01",
    title: "Current-state workflow and baseline",
    body: "A measured view of volume, cycle time, active review effort, backlog, rework, systems, handoffs, owners, and decisions.",
  },
  {
    number: "02",
    title: "Evidence map and gap register",
    body: "One representative case traced from source evidence to findings, contradictions, missing material, and required follow-up.",
  },
  {
    number: "03",
    title: "Human/AI authority and controls",
    body: "Clear boundaries for what AI may observe, summarize, cite, route, or draft—and which judgments remain human-controlled.",
  },
  {
    number: "04",
    title: "Shadow-pilot and ROI decision brief",
    body: "Evaluation cases, thresholds, stop conditions, transparent economics, and an executive proceed, iterate, or stop recommendation.",
  },
];

const timeline = [
  {
    label: "Days 1–3",
    title: "Baseline",
    body: "Confirm one recurring workflow, measure the current path, and establish the materials and decision-authority boundary.",
  },
  {
    label: "Days 4–7",
    title: "Trace and control",
    body: "Walk one representative case, surface evidence gaps and rework, and define safe assistance and human-control boundaries.",
  },
  {
    label: "Days 8–10",
    title: "Pilot and decide",
    body: "Design the shadow pilot, quantify the economics, set stop conditions, and deliver the executive decision brief.",
  },
];

const proofProducts = [
  {
    name: "Agentic authority model",
    href: "/work/agentic-authority-model",
    body: "How bounded implementation, independent review, and human release gates become one observable operating model.",
    external: false,
  },
  {
    name: "TrustDesk",
    href: "https://trustdesk-fpl.vercel.app/",
    body: "How controls, evidence, and assurance can become a usable trust decision workspace.",
    external: true,
  },
  {
    name: "AgentOps",
    href: "https://agentops-fpl.vercel.app/",
    body: "How AI oversight, workflow reliability, and responsible deployment can be made operational.",
    external: true,
  },
  {
    name: "VulnBoard",
    href: "/dashboard",
    body: "How complex risk signals can be reframed for executive decisions, ownership, and action.",
    external: false,
  },
];

export default function AiVendorReviewPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.heroBand}>
        <nav className={styles.topbar} aria-label="Service page navigation">
          <Link className={styles.brand} href="/" aria-label="Fischer Product Lab home">
            <span className={styles.brandMark} aria-hidden="true">
              FPL
            </span>
            <span>
              <strong>Fischer Product Lab</strong>
              <small>Cyber · AI governance · trust</small>
            </span>
          </Link>
          <Link className={styles.backLink} href="/">
            Portfolio <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>AI Vendor Review Acceleration Sprint</p>
            <h1>Turn one vendor-review workflow into a measurable, human-controlled pilot decision in 10 business days.</h1>
            <p className={styles.lede}>
              A fixed-scope engagement for third-party risk, GRC, procurement risk, and AI governance teams facing a
              recurring queue of evidence collection, document review, handoffs, and rework.
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryAction} href={fitCheckHref}>
                Request a 20-minute fit check <span aria-hidden="true">→</span>
              </a>
              <a className={styles.secondaryAction} href="#baseline">
                Build a private baseline
              </a>
            </div>
            <p className={styles.heroNote}>
              One workflow. One representative case. No production writes, autonomous risk decisions, or platform
              commitment.
            </p>
          </div>

          <aside className={styles.commercialCard} aria-label="Engagement summary">
            <p className={styles.commercialLabel}>Design-partner engagement</p>
            <p className={styles.price}>$5,000</p>
            <p className={styles.priceNote}>Fixed fee</p>
            <dl className={styles.facts}>
              <div>
                <dt>Duration</dt>
                <dd>10 business days</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>One workflow / one representative case</dd>
              </div>
              <div>
                <dt>Primary output</dt>
                <dd>Decision brief + shadow-pilot plan</dd>
              </div>
            </dl>
            <p className={styles.cardFootnote}>
              Founding rate for the first two qualified engagements. Additional workflows and implementation are
              separately scoped.
            </p>
          </aside>
        </header>
        </div>

        <section className={styles.section} id="scope" aria-labelledby="outcome-title">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>The outcome</p>
            <h2 id="outcome-title">A defensible go, iterate, or stop decision—not an automation pitch.</h2>
            <p>
              The sprint measures how one review lane works today, identifies where AI assistance may be safe and
              useful, and leaves the team with the evidence needed to approve, reshape, or reject a shadow pilot.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {deliverables.map((deliverable) => (
              <article className={styles.deliverableCard} key={deliverable.number}>
                <span className={styles.cardNumber}>{deliverable.number}</span>
                <h3>{deliverable.title}</h3>
                <p>{deliverable.body}</p>
              </article>
            ))}
          </div>
          <aside className={styles.sampleProof} aria-labelledby="sample-proof-title">
            <div>
              <p className={styles.sampleLabel}>Synthetic sample output</p>
              <h3 id="sample-proof-title">Inspect the decision memo before a fit call.</h3>
              <p>
                This six-page example shows the recommendation, evidence gaps, authority boundary, pilot thresholds,
                stop conditions, and transparent economics. Every company, metric, finding, and outcome is fictional.
              </p>
            </div>
            <a
              className={styles.sampleLink}
              href="/samples/ai-vendor-review-decision-memo.pdf"
              rel="noreferrer"
              target="_blank"
            >
              Open sample memo <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </section>

        <section className={styles.section} id="baseline" aria-labelledby="baseline-title">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Private workflow baseline</p>
            <h2 id="baseline-title">Put a dollar figure on the current workflow before you buy anything.</h2>
            <p>
              Use known figures or rough ranges to model today&apos;s active review and rework effort. The calculator
              estimates current labor only; it does not assume the sprint will create savings or promise an outcome.
            </p>
          </div>
          <WorkflowBaselineCalculator />
        </section>

        <section className={styles.section} aria-labelledby="timeline-title">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>The 10-day path</p>
            <h2 id="timeline-title">Baseline. Trace. Decide.</h2>
          </div>
          <ol className={styles.timeline}>
            {timeline.map((phase) => (
              <li key={phase.label}>
                <span>{phase.label}</span>
                <h3>{phase.title}</h3>
                <p>{phase.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section} aria-labelledby="fit-title">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Fit check</p>
            <h2 id="fit-title">Best when a real decision is waiting.</h2>
          </div>
          <div className={styles.fitGrid}>
            <article className={styles.fitPanel}>
              <p className={styles.fitLabel}>Good fit</p>
              <ul>
                <li>A recurring vendor-review lane has visible backlog, delay, active effort, or repeated rework.</li>
                <li>The work depends on questionnaires, reports, policies, contracts, portals, email, or other documents.</li>
                <li>A sponsor and qualified workflow validator can participate in the review.</li>
                <li>The team can provide a synthetic, sanitized, or explicitly authorized representative case.</li>
                <li>Leadership wants evidence before committing to AI workflow automation or broader tooling.</li>
              </ul>
            </article>
            <article className={`${styles.fitPanel} ${styles.notFitPanel}`}>
              <p className={styles.fitLabel}>Not designed for</p>
              <ul>
                <li>A one-off vendor decision with no recurring workflow to improve.</li>
                <li>A formal certification, audit opinion, penetration test, or legal review.</li>
                <li>A production implementation, unrestricted system access, or autonomous decision authority.</li>
                <li>A team without a named sponsor, human validation owner, or safe representative case.</li>
                <li>A full enterprise transformation or indefinite ownership of the operating queue.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="proof-title">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Capability proof</p>
            <h2 id="proof-title">See the product judgment behind the engagement.</h2>
            <p>
              These synthetic portfolio products show the operating patterns behind the sprint: evidence provenance,
              human approval, bounded authority, hard governance gates, and executive-ready decisions.
            </p>
          </div>
          <div className={styles.proofGrid}>
            {proofProducts.map((product) =>
              product.external ? (
                <a
                  className={styles.proofCard}
                  href={product.href}
                  key={product.name}
                  rel="noreferrer"
                  target="_blank"
                >
                  <strong>{product.name}</strong>
                  <p>{product.body}</p>
                  <span>
                    Open live demo <span aria-hidden="true">↗</span>
                  </span>
                </a>
              ) : (
                <Link className={styles.proofCard} href={product.href} key={product.name}>
                  <strong>{product.name}</strong>
                  <p>{product.body}</p>
                  <span>
                    Open portfolio proof <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ),
            )}
          </div>
          <p className={styles.disclaimer}>
            All portfolio demos use synthetic data and do not represent client implementations, testimonials, or
            measured customer outcomes.
          </p>
        </section>

        <section className={styles.finalCta} aria-labelledby="final-cta-title">
          <div>
            <p className={styles.eyebrow}>Start with fit</p>
            <h2 id="final-cta-title">Bring one recurring vendor-review workflow.</h2>
            <p>
              A short fit check will confirm the volume, delay or rework, sponsor, safe evidence case, decision path,
              and whether the fixed scope can produce a useful outcome.
            </p>
          </div>
          <a className={styles.primaryAction} href={fitCheckHref}>
            Request the fit check <span aria-hidden="true">→</span>
          </a>
        </section>

        <footer className={styles.footer}>
          <span>Fischer Product Lab</span>
          <a href="mailto:hello@fischerproductlab.com">hello@fischerproductlab.com</a>
        </footer>
      </div>
    </main>
  );
}
