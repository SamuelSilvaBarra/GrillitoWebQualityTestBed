import type { DemoScenario } from "../domain/scenario.js";
import { defaultScenario } from "../domain/scenario.presets.js"
import type { ScenarioQuery } from "../schemas/scenario-query.schema.js"

export function buildScenario( query: ScenarioQuery,): DemoScenario {
    
    if(Object.keys(query).length === 0){
        return defaultScenario
    }
    return {
        spelling: query.spelling ?? [],
        links: query.links ?? [],
        images: query.images ?? [],
        videos: query.videos ?? [],
        pdfs: query.pdfs ?? [],
    }
}