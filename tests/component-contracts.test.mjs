import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { sourceLoader } from "./load-source.mjs";

function render(file, name, props = {}, query = "") {
  const load = sourceLoader({
    "next/navigation": {
      useSearchParams: () => new URLSearchParams(query),
      usePathname: () => "/findings",
    },
    "next/link": {
      __esModule: true,
      default: ({ children, ...rest }) =>
        React.createElement("a", rest, children),
    },
  });
  return renderToStaticMarkup(React.createElement(load(file)[name], props));
}
const queue = (query = "") =>
  render(
    "src/components/dashboard/findings-queue.tsx",
    "FindingsQueue",
    {},
    query,
  );

test("queue renders filtered records and announces the result count", () => {
  const html = queue("severity=Critical&sla=Overdue");
  assert.match(html, /2 of 8/);
  assert.match(html, /VULN-1048/);
  assert.match(html, /VULN-1027/);
  assert.doesNotMatch(html, /VULN-0951/);
  assert.match(html, /role="status" aria-live="polite" aria-atomic="true"/);
});
test("evidence is available in native disclosures on both desktop and mobile", () => {
  const html = queue("q=VULN-1048");
  assert.equal(
    (html.match(/<details class="finding-details">/g) ?? []).length,
    2,
  );
  assert.match(html, /Patch validation pending/);
  assert.match(html, /Identity Platform/);
  assert.match(html, /production window requires business approval/);
  assert.match(html, /class="queue-mobile-list"/);
});
test("empty states keep filters and offer a reset action", () => {
  const html = queue("severity=Critical&sla=On+Track");
  assert.match(html, /No findings match this view/);
  assert.match(html, /Show all findings/);
  assert.match(html, /id="queue-severity"/);
  assert.doesNotMatch(html, /<tbody>/);
});
test("queue exposes sample scope, fixed dates and priority order", () => {
  const html = queue();
  assert.match(html, /Eight illustrative records/);
  assert.match(html, /does not change with the reporting period/);
  assert.match(html, /severity, then SLA urgency, then earliest due date/);
  assert.match(html, /not today/);
  assert.match(html, /<caption class="sr-only">/);
  assert.match(html, /scope="col"/);
});
test("shell provides skip navigation, active route and persistent demo disclosure", () => {
  const html = render(
    "src/components/dashboard/product-shell.tsx",
    "ProductShell",
    {
      active: "/findings",
      children: React.createElement("h1", {}, "Test page"),
    },
  );
  assert.match(html, /href="#main-content"/);
  assert.match(html, /id="main-content" tabindex="-1"/);
  assert.match(html, /aria-current="page" href="\/findings"/);
  assert.match(html, /Synthetic demo · Read-only/);
  assert.match(html, /<details class="mobile-product-nav"/);
});
test("dashboard priority links, chart table and reporting buttons retain semantic contracts", () => {
  const html = render(
    "src/components/dashboard/vulnerability-dashboard.tsx",
    "VulnerabilityDashboard",
  );
  assert.match(html, /<h1>Executive overview<\/h1>/);
  assert.match(html, /href="\/findings\?severity=Critical&amp;sla=Overdue"/);
  assert.match(html, /2 overdue criticals/);
  assert.match(html, /aria-pressed="true" type="button">30D/);
  assert.match(html, /Illustrative 30D trend: findings opened and remediated/);
  assert.match(html, /repeat\(4, minmax\(0, 1fr\)\)/);
  assert.match(html, /87 overdue/);
  assert.match(html, /Read the decision context/);
});

test("whitespace-only search can still be reset", () => {
  const html = queue("q=+++ ");
  assert.match(html, /0 active filters/);
  assert.doesNotMatch(html, /disabled=""[^>]*>Reset view/);
});
