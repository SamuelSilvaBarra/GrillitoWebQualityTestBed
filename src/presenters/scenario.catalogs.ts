import type { LinkVariant, ImageVariant, SpellingVariant, VideoVariant, PdfVariant } from "../domain/fixture-variants.js"
import type { LinkFixtureView, ImageFixtureView, SpellingFixtureView, VideoFixtureView, PdfFixtureView } from "./scenario.view-models.js"


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
        src: "/static/images/grillito.svg",
        alt: "valid fixture",    
    },
    missing: {
        variant: "missing",
        label: "Missing image",
        src: "/static/images/missing-image.svg",
        alt: "invalid fixture",
    }
}

export const VIDEO_FIXTURES: Record<VideoVariant, VideoFixtureView> = {
    working:{
        variant: "working",
        label: "Valid video",
        src: "/static/videos/valid-video.mp4",
        type: "video/mp4",
    },
    missing: {
        variant: "missing",
        label: "Missing video",
        src: "/static/videos/missing-video.mp4",
        type: "video/mp4"
    }
}

export const SPELLING_FIXTURES: Record<SpellingVariant, SpellingFixtureView> = {
    correct: {
        variant: "correct",
        label: "Correct spelling",
        text: "Hello world!"
    },
    incorrect: {
        variant: "incorrect",
        label: "Incorrect spelling",
        text: "Helllow orld!"
    }
}

export const PDF_FIXTURES: Record<PdfVariant, PdfFixtureView> = {
    valid: {
        variant: "valid",
        label: "Valid PDF",
        href: "/static/pdf/valid-pdf.pdf"
    },
    missing: {
        variant: "missing",
        label: "Missing PDF",
        href: "/static/pdf/missing-pdf.pdf"
    },
}