import Fastify, {
    type FastifyInstance,
} from "fastify"

import { registerPageRoutes } from "./routes/pages.routes.js"
import { registerLinkFixtureRoutes } from "./routes/link-fixtures.routes.js"

export function buildApp(): FastifyInstance {
    const app = Fastify({
        logger: true,
    });
    
    app.register(registerPageRoutes)
    app.register(registerLinkFixtureRoutes)
    
    return app;
}
