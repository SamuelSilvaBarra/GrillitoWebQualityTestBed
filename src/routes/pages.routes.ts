import type { FastifyInstance } from "fastify";

export async function registerPageRoutes(
    app: FastifyInstance,
): Promise<void> {
    app.get("/", async (_request, reply) => {
    return reply
        .type("text/html; charset=utf-8")
        .send(`
        <!doctype html>
        <html lang="es">
            <head>
            <meta charset="UTF-8">
            <title>Web Quality Testbed</title>
            </head>

            <body>
            <main>
                <h1>Web Quality Testbed</h1>

                <p>
                This page has controlled resources to test different testing systems.
                </p>

                <ul>
                <li>
                    <a href="/fixtures/links/working">
                    Functional Link
                    </a>
                </li>

                <li>
                    <a href="/fixtures/links/broken">
                    Broken Link
                    </a>
                </li>
                <li>
                    <a href="/fixtures/links/redirect">
                    Redirect Link 
                    <a/>
                </li>
                </ul>
            </main>
            </body>
        </html>
        `);
    });
}