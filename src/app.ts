import Fastify, {
    type FastifyInstance,
    type FastifyServerOptions,
} from "fastify"

import { registerPageRoutes } from "./routes/pages.routes.js"
import { registerLinkFixtureRoutes } from "./routes/link-fixtures.routes.js"

export function buildApp(
    options: FastifyServerOptions = {},
): FastifyInstance {
    const app = Fastify(options);
    
    app.register(registerPageRoutes);
    app.register(registerLinkFixtureRoutes);
    
    return app;
}
