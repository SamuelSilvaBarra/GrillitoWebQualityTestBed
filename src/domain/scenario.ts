import type { ImageVariant, LinkVariant, PdfVariant, SpellingVariant, VideoVariant } from "./fixture-variants.js";

export interface DemoScenario {
    readonly spelling: readonly SpellingVariant[];
    readonly links: readonly LinkVariant[];
    readonly images: readonly ImageVariant[];
    readonly videos: readonly VideoVariant[];
    readonly pdf: readonly PdfVariant[]; 
}

export const defaultScenario: DemoScenario = {
    spelling: ["correct", "incorrect"],
    links: ["working", "broken", "redirect"],
    images: ["working", "missing"],
    videos: ["working", "missing"],
    pdf: ["valid", "missing"], 
};