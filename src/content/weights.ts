import type { FeatureId, RoleId } from "./types";

// The "Why me, explained" waterfall. These are a self-assessment, not model output,
// and the page says so. Base value: an average junior candidate for the role.
export const BASE_VALUE = 50;

export const weights: Record<RoleId, Record<FeatureId, number>> = {
  "applied-ai": { xai: 9, python: 8, backend: 7, llm: 6, business: 3, teaching: 3, audit: 2, experience: -6 },
  ml: { python: 9, xai: 8, backend: 5, llm: 4, teaching: 2, business: 1, audit: 2, experience: -7 },
  finance: { xai: 10, business: 9, audit: 7, backend: 7, python: 6, llm: 3, teaching: 1, experience: -5 },
  solutions: { teaching: 9, business: 8, backend: 6, xai: 6, python: 5, llm: 5, audit: 2, experience: -5 },
};
