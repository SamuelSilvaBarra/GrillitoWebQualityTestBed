import { describe, expect, it } from "vitest";

import { buildScenario } from "../../src/services/scenario.builder.js"
import { defaultScenario } from "../../src/domain/scenario.presets.js"


describe("buildScenario", () => {
    it("Test an empty scenario", () => {
        const result = buildScenario({});

        expect(result).toEqual(defaultScenario)
    });
    
    it("Test one scenario", () => {
        const result = buildScenario({
            links: ["broken"],
        });

        expect(result.links).toEqual(["broken"])
        expect(result.images).toEqual([])
        expect(result.videos).toEqual([])
        expect(result.pdfs).toEqual([])
        expect(result.spelling).toEqual([])
    });

    it("Test two scenarios", () => {
        const result = buildScenario({
            images: ["working"],
            videos: ["missing"]
        });

        expect(result.links).toEqual([])
        expect(result.images).toEqual(["working"])
        expect(result.videos).toEqual(["missing"])
        expect(result.pdfs).toEqual([])
        expect(result.spelling).toEqual([])
    });
    
});