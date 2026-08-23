import assert from "node:assert/strict";
import test from "node:test";
import {
  buildFitCheckMailto,
  calculateWorkflowBaseline,
  DEFAULT_WORKFLOW_INPUTS,
} from "../src/app/services/ai-vendor-review/workflow-baseline-model.ts";

test("calculates the illustrative workflow baseline", () => {
  const baseline = calculateWorkflowBaseline(DEFAULT_WORKFLOW_INPUTS);

  assert.equal(baseline.annualReviews, 240);
  assert.equal(baseline.baseReviewHours, 720);
  assert.equal(baseline.reworkHours, 90);
  assert.equal(baseline.annualActiveHours, 810);
  assert.equal(baseline.annualLaborCost, 68_850);
  assert.equal(baseline.annualReworkCost, 7_650);
  assert.ok(Math.abs(baseline.feeEquivalentHours - 58.8235294118) < 0.000001);
  assert.ok(Math.abs(baseline.sprintFeeSharePercent - 7.2621641249) < 0.000001);
});

test("does not invent a fee comparison when the denominator is zero", () => {
  const baseline = calculateWorkflowBaseline({
    monthlyReviews: 10,
    reviewMinutes: 60,
    reworkPercent: 0,
    reworkMinutes: 120,
    hourlyRate: 0,
  });

  assert.equal(baseline.annualActiveHours, 120);
  assert.equal(baseline.reworkHours, 0);
  assert.equal(baseline.annualLaborCost, 0);
  assert.equal(baseline.feeEquivalentHours, null);
  assert.equal(baseline.sprintFeeSharePercent, null);
});

test("normalizes invalid and out-of-range values before calculating", () => {
  const baseline = calculateWorkflowBaseline({
    monthlyReviews: -12,
    reviewMinutes: Number.POSITIVE_INFINITY,
    reworkPercent: 140,
    reworkMinutes: -30,
    hourlyRate: 12_000,
  });

  assert.deepEqual(baseline.inputs, {
    monthlyReviews: 0,
    reviewMinutes: 0,
    reworkPercent: 100,
    reworkMinutes: 0,
    hourlyRate: 10_000,
  });
  assert.equal(baseline.annualLaborCost, 0);
});

test("creates a transparent, prefilled fit-check draft", () => {
  const baseline = calculateWorkflowBaseline(DEFAULT_WORKFLOW_INPUTS);
  const mailto = buildFitCheckMailto(baseline);
  const decoded = decodeURIComponent(mailto);

  assert.match(mailto, /^mailto:hello@fischerproductlab\.com\?/);
  assert.match(decoded, /Reviews per month: 20/);
  assert.match(decoded, /Modeled annual active hours: 810/);
  assert.match(decoded, /Modeled annual labor baseline: \$68,850/);
  assert.match(decoded, /not a savings forecast/);
  assert.doesNotMatch(decoded, /NaN|Infinity/);
});
