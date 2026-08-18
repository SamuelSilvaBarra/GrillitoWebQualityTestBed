import type { LinkVariant, ImageVariant, SpellingVariant, VideoVariant, PdfVariant } from "../domain/fixture-variants.js"
import type { ScenarioName } from "../domain/scenario.js";

export type LinkFixtureView = {
    readonly variant: LinkVariant;
    readonly label: string;
    readonly href: string;
}

export type ImageFixtureView = {
    readonly variant: ImageVariant;
    readonly label: string;
    readonly src: string;
    readonly alt: string;
}

export type SpellingFixtureView = {
    readonly variant: SpellingVariant;
    readonly label: string;
    readonly text: string;
}

export type VideoFixtureView = {
    readonly variant: VideoVariant;
    readonly label: string;
    readonly src: string; 
    readonly type: string;
}

export type PdfFixtureView = {
    readonly variant: PdfVariant;
    readonly label: string;
    readonly href: string;   
}

export type ScenarioPresetView = {
    readonly name: ScenarioName;
    readonly label: string;
    readonly href: string;
}

export type ScenarioViewModel = {
    readonly links: readonly LinkFixtureView[];
    readonly images: readonly ImageFixtureView[];
    readonly spelling: readonly SpellingFixtureView[];
    readonly videos: readonly VideoFixtureView[];
    readonly pdfs: readonly PdfFixtureView[];
}