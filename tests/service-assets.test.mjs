import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../src/app/services/ai-vendor-review/page.tsx", import.meta.url);
const scopePdfUrl = new URL("../public/samples/ai-vendor-review-sprint-one-pager.pdf", import.meta.url);

test("publishes the verified one-page sprint scope from the service page", async () => {
  const [pageSource, scopePdf] = await Promise.all([readFile(pageUrl, "utf8"), readFile(scopePdfUrl)]);

  assert.match(pageSource, /href="\/samples\/ai-vendor-review-sprint-one-pager\.pdf"/);
  assert.match(pageSource, /Open one-page scope/);
  assert.equal(scopePdf.subarray(0, 5).toString("ascii"), "%PDF-");
  assert.ok(scopePdf.byteLength > 5_000, "scope PDF should not be an empty placeholder");
});
