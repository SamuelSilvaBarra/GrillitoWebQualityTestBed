import type { ImageVariant, LinkVariant, PdfVariant, SpellingVariant, VideoVariant } from "./fixture-variants.js";
import { healthy, allErrors, allFixtures, brokenMedia } from "./scenario.presets.js";

export type ScenarioName = 
    | "healthy"
    | "all-errors"
    | "all-fixtures"
    | "broken-media";

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
