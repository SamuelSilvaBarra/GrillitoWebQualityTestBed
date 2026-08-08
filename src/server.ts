import { buildApp } from "./app.js";

const app = buildApp({
    logger: true,
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