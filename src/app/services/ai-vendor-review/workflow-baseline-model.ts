export const SPRINT_FEE = 5_000;

export type WorkflowBaselineInputs = {
  monthlyReviews: number;
  reviewMinutes: number;
  reworkPercent: number;
  reworkMinutes: number;
  hourlyRate: number;
};

export type WorkflowBaseline = {
  inputs: WorkflowBaselineInputs;
  annualReviews: number;
  baseReviewHours: number;
  reworkHours: number;
  annualActiveHours: number;
  annualLaborCost: number;
  annualReworkCost: number;
  feeEquivalentHours: number | null;
  sprintFeeSharePercent: number | null;
};

export const DEFAULT_WORKFLOW_INPUTS: WorkflowBaselineInputs = {
  monthlyReviews: 20,
  reviewMinutes: 180,
  reworkPercent: 25,
  reworkMinutes: 90,
  hourlyRate: 85,
};

const INPUT_LIMITS: Record<keyof WorkflowBaselineInputs, { min: number; max: number }> = {
  monthlyReviews: { min: 0, max: 5_000 },
  reviewMinutes: { min: 0, max: 10_080 },
  reworkPercent: { min: 0, max: 100 },
  reworkMinutes: { min: 0, max: 10_080 },
  hourlyRate: { min: 0, max: 10_000 },
};

function clampFinite(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) {
    return min;
  }

  return Math.min(max, Math.max(min, value));
}

export function normalizeWorkflowInputs(inputs: WorkflowBaselineInputs): WorkflowBaselineInputs {
  return {
    monthlyReviews: clampFinite(
      inputs.monthlyReviews,
      INPUT_LIMITS.monthlyReviews.min,
      INPUT_LIMITS.monthlyReviews.max,
    ),
    reviewMinutes: clampFinite(
      inputs.reviewMinutes,
      INPUT_LIMITS.reviewMinutes.min,
      INPUT_LIMITS.reviewMinutes.max,
    ),
    reworkPercent: clampFinite(
      inputs.reworkPercent,
      INPUT_LIMITS.reworkPercent.min,
      INPUT_LIMITS.reworkPercent.max,
    ),
    reworkMinutes: clampFinite(
      inputs.reworkMinutes,
      INPUT_LIMITS.reworkMinutes.min,
      INPUT_LIMITS.reworkMinutes.max,
    ),
    hourlyRate: clampFinite(inputs.hourlyRate, INPUT_LIMITS.hourlyRate.min, INPUT_LIMITS.hourlyRate.max),
  };
}

export function calculateWorkflowBaseline(rawInputs: WorkflowBaselineInputs): WorkflowBaseline {
  const inputs = normalizeWorkflowInputs(rawInputs);
  const annualReviews = inputs.monthlyReviews * 12;
  const baseReviewHours = (annualReviews * inputs.reviewMinutes) / 60;
  const reworkHours = (annualReviews * (inputs.reworkPercent / 100) * inputs.reworkMinutes) / 60;
  const annualActiveHours = baseReviewHours + reworkHours;
  const annualLaborCost = annualActiveHours * inputs.hourlyRate;
  const annualReworkCost = reworkHours * inputs.hourlyRate;

  return {
    inputs,
    annualReviews,
    baseReviewHours,
    reworkHours,
    annualActiveHours,
    annualLaborCost,
    annualReworkCost,
    feeEquivalentHours: inputs.hourlyRate > 0 ? SPRINT_FEE / inputs.hourlyRate : null,
    sprintFeeSharePercent: annualLaborCost > 0 ? (SPRINT_FEE / annualLaborCost) * 100 : null,
  };
}

const numberFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function buildFitCheckMailto(baseline: WorkflowBaseline) {
  const { inputs } = baseline;
  const subject = "Vendor Review Workflow Sprint fit check";
  const body = [
    "Hi Trevor,",
    "",
    "I'd like to check whether the sprint fits our workflow.",
    "",
    "Organization:",
    "My role:",
    "Workflow to review:",
    "",
    "Self-entered current-state baseline:",
    `- Reviews per month: ${numberFormatter.format(inputs.monthlyReviews)}`,
    `- Active minutes per initial review: ${numberFormatter.format(inputs.reviewMinutes)}`,
    `- Reviews needing rework: ${numberFormatter.format(inputs.reworkPercent)}%`,
    `- Active minutes per reworked review: ${numberFormatter.format(inputs.reworkMinutes)}`,
    `- Loaded reviewer cost: ${currencyFormatter.format(inputs.hourlyRate)} per hour`,
    `- Modeled annual active hours: ${numberFormatter.format(baseline.annualActiveHours)}`,
    `- Modeled annual labor baseline: ${currencyFormatter.format(baseline.annualLaborCost)}`,
    "",
    "Biggest delay or source of rework:",
    "Desired decision timing:",
    "",
    "These figures are a self-entered current-state estimate, not a savings forecast.",
  ].join("\n");

  return `mailto:hello@fischerproductlab.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
