import type { FastifyInstance } from "fastify";

import { afterEach, beforeEach, describe, expect, it, } from "vitest";

import { buildApp } from "../../src/app.js";

describe("Image fixtures", () => {
    let app: FastifyInstance;

    beforeEach(() => {
        app = buildApp({
            logger: false,
        });
    });

    afterEach(async () => {
        await app.close();
    });

    it("Returns 200 for a working Image", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/static/images/valid-image.svg",
    });
    
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain("image/svg+xml")
    });
    
    it("Returns 404 for at unexpected controlled image", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/static/images/broken-image.svg",
    });
    expect(response.statusCode).toBe(404)
    expect(response.body).toContain("Not Found")
    });

});

