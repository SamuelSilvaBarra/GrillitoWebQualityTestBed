import Fastify from "fastify";

const app = Fastify({
    logger: true,
})

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
              Esta página contiene recursos controlados para probar
              un web scraper.
            </p>

            <ul>
              <li>
                <a href="/fixtures/links/working">
                  Link funcional
                </a>
              </li>

              <li>
                <a href="/fixtures/links/broken">
                  Link roto
                </a>
              </li>
            </ul>
          </main>
        </body>
      </html>
    `);
});

app.get("/fixtures/links/working", async (_request, reply) => {
    return reply
        .type("text/html; charset=utf-8")
        .send("<h1>Functional fixture</h1>")
});

app.get("/fixtures/links/broken", async (_request, reply) => {
    return reply
        .code(404)
        .type("text/html; charset=utf-8")
        .send("<h1> Controlled 404 fixture</h1>")
});

async function startServer(): Promise<void> {
    try {
        await app.listen({
            host: "127.0.0.1",
            port: 3000,
        });
    } catch (error: unknown) {
        app.log.error(error);
        process.exit(1);
    }
}

void startServer();