import type { FeatureId, RoleId } from "./types";

// The "Why me, explained" waterfall. These are a self-assessment, not model output,
// and the page says so. Base value: an average junior candidate for the role.
export const BASE_VALUE = 50;

export const weights: Record<RoleId, Record<FeatureId, number>> = {
  "applied-ai": { xai: 9, python: 8, fullstack: 8, backend: 6, llm: 6, business: 3, teaching: 3, experience: -6 },
  ml: { python: 9, xai: 8, fullstack: 5, backend: 4, llm: 4, teaching: 2, business: 1, experience: -7 },
  product: { fullstack: 10, business: 8, xai: 7, backend: 6, llm: 6, python: 5, teaching: 4, experience: -5 },
  solutions: { teaching: 9, business: 8, fullstack: 7, backend: 6, xai: 6, python: 5, llm: 5, experience: -5 },
};
