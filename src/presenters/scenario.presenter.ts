import type { ScenarioViewModel } from "./scenario.view-models.js";
import type { DemoScenario } from "../domain/scenario.js";
import { IMAGE_FIXTURES, LINK_FIXTURES, SPELLING_FIXTURES, VIDEO_FIXTURES } from "./scenario.catalogs.js";

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
    };
    
}