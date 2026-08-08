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
                    <a href="/fixtures/links/redirected">
                    Redirect Link 
                    <a/>
                </li>
                </ul>
           
                <section>
                    <h2>Image fixtures</h2>
                    <article>
                        <h3>Valid image</h3>
                        <img
                        src="/static/images/valid-image.svg"
                        alt="valid fixture"
                        width="320"
                        height="180"
                        >
                        <img
                        src="/static/images/grillito.svg"
                        alt="Grillo"
                        width="320"
                        height="180"
                        >
                    </article>
                    <article>
                        <h3>Broken image</h3>
                        <img
                        src="/static/images/broken-image.svg"
                        alt="Broken fixture"
                        width="320"
                        height="180"
                        >
                    </article>
                </section> 
            </main>

            </body>
        </html>
        `);
    });
}