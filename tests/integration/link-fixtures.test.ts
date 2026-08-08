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
    
    it("Returns 404 for at unexpected controlled path", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/fixtures/links/broken",
    });
    expect(response.statusCode).toBe(404)
    expect(response.body).toEqual("<h1>Controlled 404 fixture</h1>")
    });

    it("Returns 302 for a redirection link", async () => {
        const response = await app.inject({
            method: "GET",
            url: "/fixtures/links/redirected"
        });
    expect(response.statusCode).toBe(302)
    expect(response.headers.location).toEqual("/fixtures/links/working")
    });
});

