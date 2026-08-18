import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

import { presentScenario, presentScenarioCatalog, presentScenarioPresets } from "../presenters/scenario.presenter.js";
import { ScenarioQuerySchema } from "../schemas/scenario-query.schema.js";
import { buildScenario } from "../services/scenario.builder.js";
import { ScenarioParamsSchema } from "../schemas/scenario-params.schema.js";
import { SCENARIO_PRESETS } from "../domain/scenario.js";


export const registerPageRoutes: FastifyPluginAsyncTypebox = 
    async (app) => {
    
    app.get("/", async (_request, reply) => {
    
            const options = presentScenarioCatalog();
            const presets = presentScenarioPresets();
        
            return reply.viewAsync("index.hbs", {
            title: "Web Quality Testbed",
            options,
            presets,
            });
        },
    );
        
    app.get("/demo", 
        {
            schema: { 
                querystring: ScenarioQuerySchema, 
            }, 
        }, 
        async (request, reply) => {
            const scenario = buildScenario(request.query);

            const scenarioView = presentScenario(scenario);
            return reply.viewAsync("demo.hbs", {
                title: "Web Quality Testbed",
                scenario: scenarioView
            });
        },
    );

    app.get("/scenarios/:name", 
        {
            schema: { 
                params: ScenarioParamsSchema, 
            }, 
        }, 
        async (request, reply) => {
            const scenario = SCENARIO_PRESETS[request.params.name];

            const scenarioView = presentScenario(scenario);
            
            return reply.viewAsync("demo.hbs", {
                title: "Web Quality Testbed",
                scenario: scenarioView
            });
        },
    );
}