import type { FastifyInstance } from "fastify";
import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

import { presentScenario } from "../presenters/scenario.presenter.js";
import { defaultScenario } from "../domain/scenario.js"
import { ScenarioQuerySchema } from "../schemas/scenario.query.schema.js";
import { buildScenario } from "../services/scenario.builder.js";


export const registerPageRoutes: FastifyPluginAsyncTypebox = 
    async (app) => {
    
    app.get("/", async (_request, reply) => {
    
            const scenarioView = presentScenario(defaultScenario);
        
            return reply.viewAsync("index.hbs", {
            title: "Web Quality Testbed",
            scenario: scenarioView,
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
            return reply.viewAsync("index.hbs", {
                title: "Web Quality Testbed",
                scenario: scenarioView
            });
        },
    );
}