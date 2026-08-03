import type { FastifyInstance } from "fastify";

import { afterEach, beforeEach, describe, expect, it, } from "vitest";

import { buildApp } from "../../src/app.js";

describe("Link fixtures", () => {
    let app: FastifyInstance;

    beforeEach(() => {
        app = buildApp({
            logger: false,
        });
    });

    afterEach(async () => {
        await app.close();
    });

    it("Returns 200 for a working link", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/fixtures/links/working",
    });
    
    expect(response.statusCode).toBe(200);
    });
});
