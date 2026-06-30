import {
  applicationData,
  businessUnitData,
  commitments,
  exceptions,
  executiveMemo,
  findings,
  metrics,
  slaData,
} from "@/data/vulnerabilities";
import { ExportActions } from "@/components/dashboard/export-actions";

function toClass(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

export function FindingsPageContent() {
  return (
    <section className="table-panel" aria-label="Vulnerability findings">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Findings</p>
          <h1>Vulnerability Findings Queue</h1>
          <p className="lede">Synthetic high-priority findings with ownership, SLA status, and exception state.</p>
        </div>
        <span className="table-count">{findings.length} findings</span>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Finding</th>
              <th>Asset</th>
              <th>Business Unit</th>
              <th>Severity</th>
              <th>Owner</th>
              <th>SLA</th>
              <th>Due</th>
            </tr>
          </thead>
          <tbody>
            {findings.map((finding) => (
              <tr key={finding.id}>
                <td>
                  <strong>{finding.id}</strong>
                  <span className="table-subtext">
                    {finding.cve} &middot; {finding.title}
                  </span>
                </td>
                <td>{finding.asset}</td>
                <td>{finding.businessUnit}</td>
                <td>
                  <span className={`severity ${toClass(finding.severity)}`}>{finding.severity}</span>
                </td>
                <td>{finding.owner}</td>
                <td>
                  <span className={`sla-status ${toClass(finding.slaStatus)}`}>{finding.slaStatus}</span>
                </td>
                <td>{finding.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function ApplicationsPageContent() {
  return (
    <section className="table-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Applications</p>
          <h1>Application Risk View</h1>
          <p className="lede">Highest-risk applications and assets by open exposure and critical/high concentration.</p>
        </div>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Application / Asset</th>
              <th>Owner</th>
              <th>Open</th>
              <th>Critical/High</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {applicationData.map((app) => (
              <tr key={app.name}>
                <td>{app.name}</td>
                <td>{app.owner}</td>
                <td>{app.open}</td>
                <td>{app.criticalHigh}</td>
                <td>
                  <div className="risk-meter">
                    <span style={{ width: `${app.risk}%` }} />
                    <strong>{app.risk}</strong>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function BusinessUnitsPageContent() {
  return (
    <section className="dashboard-grid">
      {businessUnitData.map((unit) => (
        <article className="panel span-4" key={unit.name}>
          <p className="eyebrow">Business Unit Risk</p>
          <h3>{unit.name}</h3>
          <p className="lede">Estimated exposed value {unit.exposure}</p>
          <div className="unit-bar">
            <span style={{ width: `${unit.risk}%`, background: unit.color }} />
          </div>
          <p className="owner-score">{unit.risk}</p>
        </article>
      ))}
    </section>
  );
}

export function SlaPageContent() {
  return (
    <section className="dashboard-grid">
      <article className="panel span-7">
        <p className="eyebrow">SLA Summary</p>
        <h1>SLA and Aging Analysis</h1>
        <p className="lede">SLA compliance is below the 90% target and requires leadership attention.</p>
        <div className="metric-grid" style={{ marginTop: 18 }}>
          {metrics.slice(3, 7).map((metric) => (
            <article className="metric-card" key={metric.label}>
              <span className="metric-label">{metric.label}</span>
              <strong>{metric.value}</strong>
              <span className={`delta ${metric.tone}`}>{metric.detail}</span>
            </article>
          ))}
        </div>
      </article>
      <article className="panel span-5">
        <p className="eyebrow">Overdue by Severity</p>
        <div className="sla-list" style={{ marginTop: 18 }}>
          {slaData.map((item) => (
            <div className="sla-row" key={item.severity}>
              <span className="severity-dot" style={{ background: item.color }} />
              <div className="sla-content">
                <div className="sla-top">
                  <span className="sla-title">{item.severity}</span>
                  <span className="sla-count">
                    {item.overdue} of {item.total}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export function RemediationPageContent() {
  return (
    <section className="panel">
      <p className="eyebrow">Remediation</p>
      <h1>Leadership Commitments</h1>
      <p className="lede">Commitments that require follow-up in the weekly remediation operating rhythm.</p>
      <div className="commitment-list" style={{ marginTop: 18 }}>
        {commitments.map((item) => (
          <div className="commitment-row" key={`${item.owner}-${item.date}`}>
            <div>
              <strong>{item.commitment}</strong>
              <span>
                {item.owner} &middot; target {item.date}
              </span>
            </div>
            <span className={`sla-status ${toClass(item.status)}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ExceptionsPageContent() {
  return (
    <section className="panel">
      <p className="eyebrow">Exceptions</p>
      <h1>Risk Acceptance Watchlist</h1>
      <p className="lede">Synthetic exceptions that should be reviewed before expiration or renewal.</p>
      <div className="exception-list" style={{ marginTop: 18 }}>
        {exceptions.map((item) => (
          <div className="exception-row" key={item.id}>
            <div>
              <strong>
                {item.id} &middot; {item.asset}
              </strong>
              <span>
                {item.owner} &middot; expires {item.expires}
              </span>
            </div>
            <span className={`severity ${toClass(item.severity)}`}>{item.severity}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ReportsPageContent() {
  return (
    <section className="panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Reports</p>
          <h1>Executive Memo</h1>
          <p className="lede">Board-review narrative for vulnerability risk posture and leadership action.</p>
        </div>
        <ExportActions />
      </div>
      <div className="memo-grid">
        {executiveMemo.map((item) => (
          <div key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
