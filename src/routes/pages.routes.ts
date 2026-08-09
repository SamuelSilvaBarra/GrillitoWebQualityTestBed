import type { FastifyInstance } from "fastify";

import { presentScenario } from "../presenters/scenario.presenter.js";
import { defaultScenario } from "../domain/scenario.js"


export async function registerPageRoutes(
    app: FastifyInstance,
): Promise<void> {
    
    app.get("/", async (_request, reply) => {
    
        const scenarioView = presentScenario(defaultScenario);
    
        return reply.viewAsync("index.hbs", {
         title: "Web Quality Testbed",
         scenario: scenarioView,
        });
    });
}