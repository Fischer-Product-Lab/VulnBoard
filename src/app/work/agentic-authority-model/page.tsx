import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Graduated Authority for AI-Assisted Delivery",
  description:
    "A sanitized Fischer Product Lab case study showing how bounded agent authority, deterministic verification, independent review, and human release gates fit together.",
  openGraph: {
    title: "Graduated Authority for AI-Assisted Delivery",
    description:
      "A public operating model for useful AI assistance without uncontrolled external impact.",
  },
  twitter: {
    card: "summary",
    title: "Graduated Authority for AI-Assisted Delivery",
    description:
      "A public operating model for useful AI assistance without uncontrolled external impact.",
  },
};

const deliveryFlow = [
  { number: "01", label: "Inspect", detail: "Read the named evidence and current state." },
  { number: "02", label: "Bound", detail: "Define the target, exclusions, and authority ceiling." },
  { number: "03", label: "Isolate", detail: "Create a reversible workspace for implementation." },
  { number: "04", label: "Build", detail: "Make the smallest complete change inside that boundary." },
  { number: "05", label: "Verify", detail: "Run deterministic checks against the exact artifact." },
  { number: "06", label: "Review", detail: "Use a separate, read-only review perspective." },
  { number: "07", label: "Approve", detail: "Present evidence at the next human-controlled gate." },
  { number: "08", label: "Publish", detail: "Release only the state that was reviewed and approved." },
] as const;

const authorityLanes = [
  {
    action: "Read and inspect",
    authority: "Named sources, requirements, and current artifacts",
    gate: "Permitted inside the agreed scope",
    level: "Observe",
    tone: "observe",
  },
  {
    action: "Implement in isolation",
    authority: "Bounded edits in a reversible working state",
    gate: "No release authority is implied",
    level: "Bounded",
    tone: "bounded",
  },
  {
    action: "Run verification",
    authority: "Builds, tests, checks, and exact-output comparison",
    gate: "Failure or missing evidence remains visible",
    level: "Verify",
    tone: "verify",
  },
  {
    action: "Independent review",
    authority: "Read-only inspection of the same candidate artifact",
    gate: "Reviewer cannot silently repair its own target",
    level: "Review",
    tone: "review",
  },
  {
    action: "Create a local checkpoint",
    authority: "Record an exact, recoverable source state",
    gate: "Checkpoint does not authorize a push or merge",
    level: "Checkpoint",
    tone: "checkpoint",
  },
  {
    action: "Push, open a PR, or merge",
    authority: "Change a shared source of truth",
    gate: "Explicit human approval at the shared-state boundary",
    level: "Approve",
    tone: "approve",
  },
  {
    action: "Use credentials, sign, or distribute",
    authority: "Access identity-bearing release systems",
    gate: "Human-controlled credentials and distribution decision",
    level: "Human only",
    tone: "human",
  },
  {
    action: "Submit, publish, or communicate externally",
    authority: "Create public or third-party impact",
    gate: "Human approves the exact artifact and destination",
    level: "Human only",
    tone: "human",
  },
] as const;

const designDecisions = [
  {
    number: "01",
    title: "Stable artifact identity",
    body: "Operators, checks, and reviewers must point to the same route, file, version, or commit. A label is not enough when evidence can drift underneath it.",
  },
  {
    number: "02",
    title: "Deterministic status",
    body: "State is derived from explicit inputs. Missing evidence remains unknown or blocked; it is not converted into a reassuring default.",
  },
  {
    number: "03",
    title: "Independent review",
    body: "A read-only reviewer evaluates the candidate before shared-state changes. The review record stays separate from implementation intent.",
  },
  {
    number: "04",
    title: "Reversible defaults",
    body: "Isolation, small changes, checkpoints, and rollback come before high-impact permissions. Recovery is part of the operating model, not an afterthought.",
  },
  {
    number: "05",
    title: "Capability is not authority",
    body: "An agent may be technically able to push, sign, submit, or send. The workflow still treats those as separate decisions with separate owners.",
  },
  {
    number: "06",
    title: "External impact is explicit",
    body: "Publication, distribution, and communication gates name the exact artifact, destination, and approver before anything leaves the bounded workspace.",
  },
] as const;

export default function AgenticAuthorityModelPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.heroBand}>
          <nav className={styles.topbar} aria-label="Case study navigation">
            <Link className={styles.brand} href="/" aria-label="Fischer Product Lab home">
              <span className={styles.brandMark} aria-hidden="true">FPL</span>
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
              <p className={styles.eyebrow}>Sanitized portfolio case study</p>
              <h1>Useful agent authority without uncontrolled external impact.</h1>
              <p className={styles.lede}>
                A graduated operating model separates the authority to inspect, implement, verify, review, commit,
                release, and communicate. Each transition is deliberate, observable, and reversible until a human
                chooses otherwise.
              </p>
              <div className={styles.actions}>
                <a className={styles.primaryAction} href="#authority-map">
                  Inspect the authority map <span aria-hidden="true">↓</span>
                </a>
                <Link className={styles.secondaryAction} href="/services/ai-vendor-review">
                  See the applied service
                </Link>
              </div>
            </div>

            <aside className={styles.thesisCard} aria-label="Operating thesis">
              <p className={styles.cardLabel}>Operating question</p>
              <p className={styles.cardQuestion}>Where should the agent stop?</p>
              <div className={styles.cardRule}>
                <span>Working rule</span>
                <strong>Increase authority only when evidence, reversibility, and ownership increase with it.</strong>
              </div>
              <p className={styles.cardFootnote}>
                Public design evidence only. No customer, employer, credential, or private system details are used.
              </p>
            </aside>
          </header>
        </div>

        <section className={styles.section} aria-labelledby="flow-title">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>The controlled path</p>
            <h2 id="flow-title">One candidate state, carried from evidence to release.</h2>
            <p>
              The workflow keeps artifact identity intact while authority rises in stages. Verification and review
              happen before the first shared-state or public-impact gate.
            </p>
          </div>
          <ol className={styles.flow} aria-label="Controlled delivery sequence">
            {deliveryFlow.map((step) => (
              <li key={step.number}>
                <span className={styles.stepNumber}>{step.number}</span>
                <strong>{step.label}</strong>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section} id="authority-map" aria-labelledby="authority-title">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Authority map</p>
            <h2 id="authority-title">Permissions attach to actions—not to a vague idea of autonomy.</h2>
            <p>
              The same capable system can move quickly inside a bounded workspace and still stop before changing a
              shared source, using credentials, distributing software, or speaking externally.
            </p>
          </div>

          <div className={styles.matrix} role="table" aria-label="Graduated authority model">
            <div className={styles.matrixHeader} role="row">
              <span role="columnheader">Action</span>
              <span role="columnheader">Permitted authority</span>
              <span role="columnheader">Control boundary</span>
              <span role="columnheader">Level</span>
            </div>
            {authorityLanes.map((lane) => (
              <div className={styles.matrixRow} role="row" key={lane.action}>
                <strong role="cell">{lane.action}</strong>
                <span role="cell">{lane.authority}</span>
                <span role="cell">{lane.gate}</span>
                <span role="cell" className={`${styles.level} ${styles[lane.tone]}`}>
                  {lane.level}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="decisions-title">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Design decisions</p>
            <h2 id="decisions-title">The controls are part of the product experience.</h2>
            <p>
              A useful authority model is more than a permission list. The interface has to preserve identity,
              surface uncertainty, and show exactly which decision is waiting on whom.
            </p>
          </div>
          <div className={styles.decisionGrid}>
            {designDecisions.map((decision) => (
              <article className={styles.decisionCard} key={decision.number}>
                <span>{decision.number}</span>
                <h3>{decision.title}</h3>
                <p>{decision.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.evidenceBand} aria-labelledby="evidence-title">
          <div>
            <p className={styles.eyebrow}>What this demonstrates</p>
            <h2 id="evidence-title">Product judgment at the boundary between assistance and authority.</h2>
          </div>
          <div className={styles.evidenceGrid}>
            <div>
              <strong>Interface contract</strong>
              <p>Overview, detail, review, and release surfaces retain stable references to the same artifact.</p>
            </div>
            <div>
              <strong>Control design</strong>
              <p>Read, write, checkpoint, shared-state, credential, distribution, and publication rights stay distinct.</p>
            </div>
            <div>
              <strong>Executive clarity</strong>
              <p>The workflow names the evidence, current status, next gate, owner, and rollback path.</p>
            </div>
          </div>
          <p className={styles.boundaryNote}>
            This is a sanitized operating-model demonstration using public-safe, synthetic examples. It does not claim
            a client implementation, enterprise adoption, or measured customer outcomes.
          </p>
        </section>

        <section className={styles.finalCta} aria-labelledby="cta-title">
          <div>
            <p className={styles.eyebrow}>Apply the model</p>
            <h2 id="cta-title">Use the authority map to evaluate one real workflow.</h2>
            <p>
              The AI Vendor Review Acceleration Sprint turns these boundaries into a current-state map, evidence
              register, human/AI authority design, shadow-pilot plan, and proceed, iterate, or stop decision.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link className={styles.primaryAction} href="/services/ai-vendor-review">
              Review the sprint <span aria-hidden="true">→</span>
            </Link>
            <Link className={styles.secondaryAction} href="/demo">
              Open VulnBoard
            </Link>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>Fischer Product Lab</span>
          <span>Public-safe portfolio evidence · © Trevor Fischer</span>
        </footer>
      </div>
    </main>
  );
}
