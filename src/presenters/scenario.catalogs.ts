import type { LinkVariant, ImageVariant, SpellingVariant } from "../domain/fixture-variants.js"
import type { LinkFixtureView, ImageFixtureView, SpellingFixtureView } from "./scenario.view-models.js"


export const LINK_FIXTURES: Record<LinkVariant, LinkFixtureView> = {
    
    working: {
        variant: "working",
        label: "Working link",
        href: "/fixtures/links/working",
    },

    broken: {
        variant: "broken",
        label: "Broken link",
        href: "/fixtures/links/broken",
    },

    redirect: {
        variant: "redirect",
        label: "Redirected link",
        href: "/fixtures/links/redirected",
    },
}

export const IMAGE_FIXTURES: Record<ImageVariant, ImageFixtureView> = {
    working: {
        variant: "working",
        label: "Valid image",
        src: "/static/images/valid-image.svg",
        alt: "valid fixture",    
    },
    missing: {
        variant: "missing",
        label: "Missing image",
        src: "/static/images/missing-image.svg",
        alt: "invalid fixture"
    }
}

export const SPELLING_FIXTURES: Record<SpellingVariant, SpellingFixtureView> = {
    correct: {
        variant: "correct",
        label: "Without Spelling errors",
        text: "Hello world!"
    },
    incorrect: {
        variant: "incorrect",
        label: "With Spelling errors",
        text: "Helllow orld!"
    }
}