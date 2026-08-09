import type { LinkVariant, ImageVariant, SpellingVariant, VideoVariant } from "../domain/fixture-variants.js"

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

export type ScenarioViewModel = {
    readonly links: readonly LinkFixtureView[];
    readonly images: readonly ImageFixtureView[];
    readonly spelling: readonly SpellingFixtureView[];
    readonly videos: readonly VideoFixtureView[];
}