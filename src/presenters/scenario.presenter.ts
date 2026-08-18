import type { ScenarioPresetView, ScenarioViewModel } from "./scenario.view-models.js";
import { type DemoScenario, SCENARIO_NAMES, SCENARIO_LABELS } from "../domain/scenario.js";
import { IMAGE_FIXTURES, LINK_FIXTURES, PDF_FIXTURES, SPELLING_FIXTURES, VIDEO_FIXTURES } from "./scenario.catalogs.js";

export function presentScenario( scenario: DemoScenario ): ScenarioViewModel{
    return {
        links: scenario.links.map(
            (variant) => LINK_FIXTURES[variant]
            ),
        images: scenario.images.map(
            (variant) => IMAGE_FIXTURES[variant]
            ),
        spelling: scenario.spelling.map(
            (variant) => SPELLING_FIXTURES[variant]
            ),
        videos: scenario.videos.map(
            (variant) => VIDEO_FIXTURES[variant]
            ),
        pdfs: scenario.pdfs.map(
            (variant) => PDF_FIXTURES[variant]
        ),
    };
    
}

export function presentScenarioCatalog(){
    return {
        spelling: Object.values(SPELLING_FIXTURES),
        links: Object.values(LINK_FIXTURES),
        images: Object.values(IMAGE_FIXTURES),
        videos: Object.values(VIDEO_FIXTURES),
        pdfs: Object.values(PDF_FIXTURES),
    }
}

export function presentScenarioPresets(): readonly ScenarioPresetView[]{
    return SCENARIO_NAMES.map((name) => {
        return {
        name,
        label: SCENARIO_LABELS[name],
        href: `/scenarios/${name}`,
        };
    });
}