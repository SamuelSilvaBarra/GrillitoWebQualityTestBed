import { describe, expect, it } from "vitest";

import type { DemoScenario } from "../../src/domain/scenario.js"
import { presentScenario } from "../../src/presenters/scenario.presenter.js"

describe("pressetScenario", () => {
    it("Maps a link variant to its view model", () => {
        const scenario: DemoScenario = {
            spelling: [],
            links: ["broken"],
            images: [],
            videos: [],
        };
        
        const result = presentScenario(scenario);

        expect(result.links).toHaveLength(1);
        expect(result.links[0]?.variant).toBe("broken");
        expect(result.links[0]?.label).toBe("Broken link");
        expect(result.links[0]?.href).toBe("/fixtures/links/broken");

    });

    it("Maps a spelling variant to its view model", () => {
        const scenario: DemoScenario = {
            spelling: ["incorrect"],
            links: [],
            images: [],
            videos: [],
        };
        const result = presentScenario(scenario)

        expect(result.spelling).toHaveLength(1);
        expect(result.spelling[0]?.variant).toBe("incorrect")
        expect(result.spelling[0]?.label).toBe("Incorrect spelling")
        expect(result.spelling[0]?.text).toBe("Helllow orld!")
    });

    it("Maps a image variant to its view model", () => {
        const scenario: DemoScenario = {
            spelling: [],
            links: [],
            images: ["missing"],
            videos: [],
        }
        const result = presentScenario(scenario)

        expect(result.images).toHaveLength(1);
        expect(result.images[0]?.variant).toBe("missing")
        expect(result.images[0]?.label).toBe("Missing image")
        expect(result.images[0]?.src).toBe("/static/images/missing-image.svg")
        expect(result.images[0]?.alt).toBe("invalid fixture")
    });

    it("Maps a video variant to its view model", () => {
        const scenario: DemoScenario = {
            spelling: [],
            links: [],
            images: [],
            videos: ["missing"],
        };
        const result = presentScenario(scenario)
        expect(result.videos).toHaveLength(1);
        expect(result.videos[0]?.variant).toBe("missing")
        expect(result.videos[0]?.src).toBe("/static/videos/missing-video.mp4")
        expect(result.videos[0]?.type).toBe("video/mp4")
        expect(result.videos[0]?.label).toBe("Missing video")
    });

});