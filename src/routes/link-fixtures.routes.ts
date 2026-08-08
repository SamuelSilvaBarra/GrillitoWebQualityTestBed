import type { FastifyInstance } from "fastify";

export async function registerLinkFixtureRoutes(
    app: FastifyInstance,
): Promise<void> {
    app.get("/fixtures/links/working", async (_request, reply) => {
        return reply
            .type("text/html; charset=utf-8")
            .send("<h1>Functional fixture</h1>")
    });

    app.get("/fixtures/links/redirected", async (_request, reply) => {
        return reply
        .redirect("/fixtures/links/working")
    });

    app.get("/fixtures/links/broken", async (_request, reply) => {
        return reply
            .code(404)
            .type("text/html; charset=utf-8")
            .send("<h1>Controlled 404 fixture</h1>")
    });
}