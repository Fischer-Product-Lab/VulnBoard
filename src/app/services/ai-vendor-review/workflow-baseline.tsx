"use client";

import { useState, type ChangeEvent } from "react";
import {
  buildFitCheckMailto,
  calculateWorkflowBaseline,
  DEFAULT_WORKFLOW_INPUTS,
  SPRINT_FEE,
  type WorkflowBaselineInputs,
} from "./workflow-baseline-model";
import styles from "./workflow-baseline.module.css";

type WorkflowInputKey = keyof WorkflowBaselineInputs;
type WorkflowInputState = Record<WorkflowInputKey, string>;
type WorkflowInputDefinition = {
  key: WorkflowInputKey;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
};

const inputDefinitions: Array<WorkflowInputDefinition> = [
  {
    key: "monthlyReviews",
    label: "Vendor reviews",
    unit: "per month",
    min: 0,
    max: 5_000,
    step: 1,
  },
  {
    key: "reviewMinutes",
    label: "Active review effort",
    unit: "minutes per case",
    min: 0,
    max: 10_080,
    step: 5,
  },
  {
    key: "reworkPercent",
    label: "Cases needing rework",
    unit: "% of cases",
    min: 0,
    max: 100,
    step: 1,
  },
  {
    key: "reworkMinutes",
    label: "Rework effort",
    unit: "minutes per reworked case",
    min: 0,
    max: 10_080,
    step: 5,
  },
  {
    key: "hourlyRate",
    label: "Loaded reviewer cost",
    unit: "$ per hour",
    min: 0,
    max: 10_000,
    step: 1,
  },
];

const numberFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });
const integerFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function toInputState(inputs: WorkflowBaselineInputs): WorkflowInputState {
  return {
    monthlyReviews: String(inputs.monthlyReviews),
    reviewMinutes: String(inputs.reviewMinutes),
    reworkPercent: String(inputs.reworkPercent),
    reworkMinutes: String(inputs.reworkMinutes),
    hourlyRate: String(inputs.hourlyRate),
  };
}

function toNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

export default function WorkflowBaselineCalculator() {
  const [formValues, setFormValues] = useState<WorkflowInputState>(() => toInputState(DEFAULT_WORKFLOW_INPUTS));

  const baseline = calculateWorkflowBaseline({
    monthlyReviews: toNumber(formValues.monthlyReviews),
    reviewMinutes: toNumber(formValues.reviewMinutes),
    reworkPercent: toNumber(formValues.reworkPercent),
    reworkMinutes: toNumber(formValues.reworkMinutes),
    hourlyRate: toNumber(formValues.hourlyRate),
  });
  const fitCheckHref = buildFitCheckMailto(baseline);

  function updateValue(field: WorkflowInputDefinition) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const rawValue = event.target.value;
      const parsedValue = Number(rawValue);
      const nextValue =
        rawValue === "" || !Number.isFinite(parsedValue)
          ? rawValue
          : String(Math.min(field.max, Math.max(field.min, parsedValue)));

      setFormValues((current) => ({ ...current, [field.key]: nextValue }));
    };
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.inputPanel}>
        <div className={styles.panelHeading}>
          <div>
            <p className={styles.panelLabel}>Your current workflow</p>
            <h3>Replace the illustrative values with your own.</h3>
          </div>
          <button
            className={styles.resetButton}
            onClick={() => setFormValues(toInputState(DEFAULT_WORKFLOW_INPUTS))}
            type="button"
          >
            Reset example
          </button>
        </div>

        <div className={styles.fields}>
          {inputDefinitions.map((field) => (
            <label className={styles.field} htmlFor={`workflow-${field.key}`} key={field.key}>
              <span className={styles.fieldLabel}>{field.label}</span>
              <input
                id={`workflow-${field.key}`}
                inputMode="decimal"
                max={field.max}
                min={field.min}
                onChange={updateValue(field)}
                step={field.step}
                type="number"
                value={formValues[field.key]}
              />
              <span className={styles.fieldUnit}>{field.unit}</span>
            </label>
          ))}
        </div>

        <p className={styles.privateNote}>
          <span aria-hidden="true">●</span>
          Inputs stay in this browser tab. There is no submission endpoint; values enter an email draft only if you
          choose the button.
        </p>
      </div>

      <div className={styles.resultsPanel}>
        <p className={styles.resultsLabel}>Current-state model</p>
        <div className={styles.primaryResult}>
          <span>Modeled annual labor baseline</span>
          <output aria-live="polite">{currencyFormatter.format(baseline.annualLaborCost)}</output>
          <small>Current effort only · no assumed savings</small>
        </div>

        <dl className={styles.resultGrid}>
          <div>
            <dt>Reviews / year</dt>
            <dd>{integerFormatter.format(baseline.annualReviews)}</dd>
          </div>
          <div>
            <dt>Active hours / year</dt>
            <dd>{numberFormatter.format(baseline.annualActiveHours)}</dd>
          </div>
          <div>
            <dt>Rework hours / year</dt>
            <dd>{numberFormatter.format(baseline.reworkHours)}</dd>
          </div>
          <div>
            <dt>Rework labor / year</dt>
            <dd>{currencyFormatter.format(baseline.annualReworkCost)}</dd>
          </div>
        </dl>

        <div className={styles.comparison}>
          <p>
            <span>{currencyFormatter.format(SPRINT_FEE)} sprint fee</span>
            {baseline.sprintFeeSharePercent === null
              ? "Add a non-zero labor baseline to compare the fee."
              : `${numberFormatter.format(baseline.sprintFeeSharePercent)}% of the modeled annual labor baseline.`}
          </p>
          <p>
            <span>Fee-equivalent workload</span>
            {baseline.feeEquivalentHours === null
              ? "Add a non-zero hourly cost to calculate this threshold."
              : `${numberFormatter.format(baseline.feeEquivalentHours)} reviewer hours at the entered rate.`}
          </p>
        </div>

        <a className={styles.emailAction} href={fitCheckHref}>
          Carry this baseline into a fit-check email <span aria-hidden="true">→</span>
        </a>
        <p className={styles.emailNote}>Opens a draft in your email app. Nothing is sent automatically.</p>
      </div>
    </div>
  );
}
