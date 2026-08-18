import type { ImageVariant, LinkVariant, PdfVariant, SpellingVariant, VideoVariant } from "./fixture-variants.js";
import { healthy, allErrors, allFixtures, brokenMedia } from "./scenario.presets.js";

export type ScenarioName = 
    | "healthy"
    | "all-errors"
    | "all-fixtures"
    | "broken-media";

export const SCENARIO_NAMES: readonly ScenarioName[] = [
    "healthy",
    "all-errors",
    "all-fixtures",
    "broken-media",
];
export interface DemoScenario {
    readonly spelling: readonly SpellingVariant[];
    readonly links: readonly LinkVariant[];
    readonly images: readonly ImageVariant[];
    readonly videos: readonly VideoVariant[];
    readonly pdfs: readonly PdfVariant[]; 
}

export const SCENARIO_PRESETS:
    Record<ScenarioName, DemoScenario> = {
        "healthy": healthy,
        "all-errors": allErrors,
        "all-fixtures": allFixtures,
        "broken-media": brokenMedia,
    }

export const SCENARIO_LABELS: Record<ScenarioName, string> = {
    healthy: "Healthy",
    "all-errors": "All Errors",
    "all-fixtures": "All fixtures",
    "broken-media": "Broken Media"
}