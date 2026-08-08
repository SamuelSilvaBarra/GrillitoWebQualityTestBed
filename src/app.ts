import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import Fastify, {
    type FastifyInstance,
    type FastifyServerOptions,
} from "fastify"

import fastifyStatic from "@fastify/static";

import { registerPageRoutes } from "./routes/pages.routes.js"
import { registerLinkFixtureRoutes } from "./routes/link-fixtures.routes.js"

const currentFilename = fileURLToPath(import.meta.url);
const currentDirectory = dirname(currentFilename);


export function buildApp(
    options: FastifyServerOptions = {},
): FastifyInstance {
    const app = Fastify(options);
    app.register(fastifyStatic, {
        root: join(currentDirectory, "../public"),
        prefix: "/static/",
    })
    app.register(registerPageRoutes);
    app.register(registerLinkFixtureRoutes);
    
    return app;
}
