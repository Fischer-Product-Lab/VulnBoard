"use client";

import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { findings, type Finding } from "@/data/vulnerabilities";
import {
  activeFilterCount,
  assetOptions,
  defaultFilters,
  filterFindings,
  readFindingFilters,
  severityOptions,
  slaOptions,
  type FindingFilters,
} from "@/lib/finding-query";

const units = [...new Set(findings.map((item) => item.businessUnit))].sort();
const toClass = (value: string) => value.toLowerCase().replace(/\s+/g, "-");
const sortLabels = {
  priority: "Priority",
  due: "Earliest due date",
  updated: "Recently updated",
};

function FindingDetails({ finding }: { finding: Finding }) {
  return (
    <details className="finding-details">
      <summary>
        Review evidence <span className="sr-only">for {finding.id}</span>
      </summary>
      <dl>
        <div>
          <dt>Remediation owner</dt>
          <dd>{finding.remediationOwner}</dd>
        </div>
        <div>
          <dt>Evidence</dt>
          <dd>{finding.evidence}</dd>
        </div>
        <div>
          <dt>First detected</dt>
          <dd>{finding.firstDetected}</dd>
        </div>
        <div>
          <dt>Last updated</dt>
          <dd>{finding.lastUpdated}</dd>
        </div>
      </dl>
      <p>{finding.notes}</p>
    </details>
  );
}

function QueueContent() {
  const params = useSearchParams();
  const pathname = usePathname();
  const filters = readFindingFilters(params, units);
  const results = filterFindings(findings, filters);
  const active = activeFilterCount(filters);

  function update(patch: Partial<FindingFilters>, replace = false) {
    const next = { ...filters, ...patch };
    const query = new URLSearchParams(params.toString());
    for (const key of Object.keys(defaultFilters) as (keyof FindingFilters)[]) {
      if (next[key] === defaultFilters[key]) query.delete(key);
      else query.set(key, next[key]);
    }
    const url = `${pathname}${query.size ? `?${query}` : ""}${window.location.hash}`;
    if (
      url ===
      `${window.location.pathname}${window.location.search}${window.location.hash}`
    )
      return;
    if (replace) window.history.replaceState(null, "", url);
    else window.history.pushState(null, "", url);
  }

  const views = [
    {
      name: "All sample findings",
      count: findings.length,
      patch: defaultFilters,
      selected: active === 0,
    },
    {
      name: "Overdue",
      count: findings.filter((f) => f.slaStatus === "Overdue").length,
      patch: { ...defaultFilters, sla: "Overdue" as const },
      selected: filters.sla === "Overdue" && active === 1,
    },
    {
      name: "Due soon",
      count: findings.filter((f) => f.slaStatus === "Due Soon").length,
      patch: { ...defaultFilters, sla: "Due Soon" as const },
      selected: filters.sla === "Due Soon" && active === 1,
    },
    {
      name: "Critical",
      count: findings.filter((f) => f.severity === "Critical").length,
      patch: { ...defaultFilters, severity: "Critical" as const },
      selected: filters.severity === "Critical" && active === 1,
    },
  ];

  return (
    <>
      <div
        className="queue-views"
        role="group"
        aria-label="Quick finding views"
      >
        {views.map((view) => (
          <button
            key={view.name}
            type="button"
            aria-pressed={view.selected}
            onClick={() => update(view.patch)}
          >
            {view.name}
            <span>{view.count}</span>
          </button>
        ))}
      </div>
      <div className="queue-controls">
        <div className="filter-field queue-search">
          <label htmlFor="finding-search">Search findings</label>
          <div className="search-input-wrap">
            <input
              id="finding-search"
              type="search"
              value={filters.q}
              maxLength={160}
              placeholder="Finding, CVE, asset, or owner"
              onChange={(e) => update({ q: e.target.value }, true)}
            />
            {filters.q && (
              <button type="button" onClick={() => update({ q: "" }, true)}>
                Clear search
              </button>
            )}
          </div>
        </div>
        <div className="filter-field">
          <label htmlFor="queue-severity">Severity</label>
          <select
            id="queue-severity"
            value={filters.severity}
            onChange={(e) =>
              update({ severity: e.target.value as FindingFilters["severity"] })
            }
          >
            {severityOptions.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="queue-sla">SLA status</label>
          <select
            id="queue-sla"
            value={filters.sla}
            onChange={(e) =>
              update({ sla: e.target.value as FindingFilters["sla"] })
            }
          >
            {slaOptions.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="queue-unit">Business unit</label>
          <select
            id="queue-unit"
            value={filters.unit}
            onChange={(e) => update({ unit: e.target.value })}
          >
            {["All", ...units].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="queue-asset">Asset type</label>
          <select
            id="queue-asset"
            value={filters.asset}
            onChange={(e) =>
              update({ asset: e.target.value as FindingFilters["asset"] })
            }
          >
            {assetOptions.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="queue-sort">Sort findings</label>
          <select
            id="queue-sort"
            value={filters.sort}
            onChange={(e) =>
              update({ sort: e.target.value as FindingFilters["sort"] })
            }
          >
            {Object.entries(sortLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="queue-result-bar">
        <p role="status" aria-live="polite" aria-atomic="true">
          <strong>
            {results.length} of {findings.length}
          </strong>{" "}
          sample findings · {active} active filter{active === 1 ? "" : "s"}
        </p>
        <button
          type="button"
          className="text-button secondary"
          onClick={() => update(defaultFilters)}
          disabled={!active && !filters.q && filters.sort === "priority"}
        >
          Reset view
        </button>
      </div>
      <p className="queue-sort-note">
        {filters.sort === "priority"
          ? "Priority order: severity, then SLA urgency, then earliest due date."
          : `Sorted by ${sortLabels[filters.sort].toLowerCase()}.`}{" "}
        SLA labels use the fixed demo scenario, not today’s date.
      </p>
      {results.length === 0 ? (
        <div className="queue-empty">
          <span aria-hidden="true">⌕</span>
          <h3>No findings match this view</h3>
          <p>
            Try a different search, or reset the filters to see all eight sample
            findings.
          </p>
          <button
            className="text-button"
            type="button"
            onClick={() => update(defaultFilters)}
          >
            Show all findings
          </button>
        </div>
      ) : (
        <>
          <div
            className="table-wrap queue-table-wrap"
            role="region"
            aria-label="Finding results, scroll horizontally on narrow screens"
            tabIndex={0}
          >
            <table className="queue-table">
              <caption className="sr-only">
                Synthetic findings sorted by{" "}
                {sortLabels[filters.sort].toLowerCase()}. Expand a finding to
                review evidence.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Finding / evidence</th>
                  <th scope="col">Asset / ownership</th>
                  <th
                    scope="col"
                    aria-sort={
                      filters.sort === "priority" ? "other" : undefined
                    }
                  >
                    Severity
                  </th>
                  <th
                    scope="col"
                    aria-sort={filters.sort === "due" ? "ascending" : undefined}
                  >
                    SLA / due date
                  </th>
                  <th scope="col">Exception</th>
                </tr>
              </thead>
              <tbody>
                {results.map((finding) => (
                  <tr key={finding.id} id={finding.id}>
                    <td>
                      <strong className="finding-id">{finding.id}</strong>
                      <span className="finding-title">{finding.title}</span>
                      <span className="table-subtext">{finding.cve}</span>
                      <FindingDetails finding={finding} />
                    </td>
                    <td>
                      <strong>{finding.asset}</strong>
                      <span className="table-subtext">
                        {finding.assetType} · {finding.businessUnit}
                      </span>
                      <span className="finding-owner">{finding.owner}</span>
                    </td>
                    <td>
                      <span className={`severity ${toClass(finding.severity)}`}>
                        {finding.severity}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`sla-status ${toClass(finding.slaStatus)}`}
                      >
                        {finding.slaStatus}
                      </span>
                      <time
                        className="table-subtext"
                        dateTime={finding.dueDate}
                      >
                        {finding.dueDate}
                      </time>
                    </td>
                    <td>
                      <span
                        className={`exception-label ${toClass(finding.exceptionStatus)}`}
                      >
                        {finding.exceptionStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ol className="queue-mobile-list" aria-label="Finding results">
            {results.map((finding) => (
              <li key={finding.id}>
                <div className="mobile-finding-top">
                  <strong className="finding-id">{finding.id}</strong>
                  <span className={`severity ${toClass(finding.severity)}`}>
                    {finding.severity}
                  </span>
                </div>
                <h3>{finding.title}</h3>
                <p className="table-subtext">{finding.cve}</p>
                <dl className="mobile-finding-meta">
                  <div>
                    <dt>Asset</dt>
                    <dd>{finding.asset}</dd>
                  </div>
                  <div>
                    <dt>Owner</dt>
                    <dd>{finding.owner}</dd>
                  </div>
                  <div>
                    <dt>Scope</dt>
                    <dd>
                      {finding.businessUnit} · {finding.assetType}
                    </dd>
                  </div>
                  <div>
                    <dt>Due date</dt>
                    <dd>
                      <time dateTime={finding.dueDate}>{finding.dueDate}</time>{" "}
                      · {finding.slaStatus}
                    </dd>
                  </div>
                  <div>
                    <dt>Exception</dt>
                    <dd>{finding.exceptionStatus}</dd>
                  </div>
                </dl>
                <FindingDetails finding={finding} />
              </li>
            ))}
          </ol>
        </>
      )}
    </>
  );
}

export function FindingsQueue() {
  return (
    <section
      className="table-panel findings-queue"
      id="findings-queue"
      aria-label="Prioritized findings queue"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Triage workspace</p>
          <h2>Prioritized findings</h2>
        </div>
        <span className="snapshot-tag">Fixed June 2026 scenario</span>
      </div>
      <p className="queue-scope">
        Eight illustrative records for hands-on review. This sample is separate
        from the portfolio-level headline metrics and does not change with the
        reporting period.
      </p>
      <Suspense
        fallback={
          <p className="queue-loading" role="status">
            Loading the sample findings workspace…
          </p>
        }
      >
        <QueueContent />
      </Suspense>
    </section>
  );
}
