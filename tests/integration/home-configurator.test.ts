import type { FastifyInstance } from "fastify";

import { afterEach, beforeEach, describe, expect, it, } from "vitest";

import { buildApp } from "../../src/app.js";

describe("Home HTML", () => {
    let app: FastifyInstance;

    beforeEach(() => {
        app = buildApp({
            logger: false,
        });
    });

    afterEach(async () => {
        await app.close();
    });

    it("Returns the correct content type and status code for a working Home HTML", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/",
    });
    
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain("text/html")
    expect(response.body).toContain("Web Quality Testbed")
    expect(response.body).toContain("Spelling")
    expect(response.body).toContain("Links")
    expect(response.body).toContain("Images")
    expect(response.body).toContain("Videos")
    expect(response.body).toContain("PDFs")
    expect(response.body).toContain("/scenarios/healthy")
    expect(response.body).toContain("/scenarios/all-errors")
    expect(response.body).toContain("/scenarios/all-fixtures")
    expect(response.body).toContain("/scenarios/broken-media")
    expect(response.body).toContain('action="/demo"')
    expect(response.body).toContain('method="GET"')
    });
});