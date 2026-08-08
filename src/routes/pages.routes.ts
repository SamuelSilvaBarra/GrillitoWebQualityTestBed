import type { FastifyInstance } from "fastify";

export async function registerPageRoutes(
    app: FastifyInstance,
): Promise<void> {
    app.get("/", async (_request, reply) => {
    return reply.viewAsync("index.hbs", {
         title: "Web Quality Testbed"
        });
    });
}