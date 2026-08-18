import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

import { ScenarioParamsSchema } from "../schemas/scenario-params.schema.js";
import { SCENARIO_PRESETS } from "../domain/scenario.js";


export const registerApiRoutes: FastifyPluginAsyncTypebox = 
    async (app) => {
    
    app.get("/api/scenarios/:name/expected", 
        {
            schema: { 
                params: ScenarioParamsSchema, 
            }, 
        }, 
        async (request) => {
            return {
                scenario: request.params.name,
                expected: SCENARIO_PRESETS[request.params.name]
            };
        },
    );
}