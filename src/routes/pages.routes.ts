import type { FastifyInstance } from "fastify";

import { defaultScenario } from "../domain/scenario.js"

export async function registerPageRoutes(
    app: FastifyInstance,
): Promise<void> {
    app.get("/", async (_request, reply) => {
    return reply.viewAsync("index.hbs", {
         title: "Web Quality Testbed",
         scenario: defaultScenario,
        });
    });
}