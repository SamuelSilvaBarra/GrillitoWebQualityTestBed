import type { FastifyInstance } from "fastify";

import { afterEach, beforeEach, describe, expect, it, } from "vitest";

import { buildApp } from "../../src/app.js";

describe("PDF fixtures", () => {
    let app: FastifyInstance;

    beforeEach(() => {
        app = buildApp({
            logger: false,
        });
    });

    afterEach(async () => {
        await app.close();
    });

    it("Returns 200 and correct type for a working PDF", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/static/pdf/valid-pdf.pdf",
    });
    
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toBe("application/pdf")
    });
    
    it("Returns 404 for missing pdf", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/static/pdf/missing-pdf.pdf",
    });
    expect(response.statusCode).toBe(404)
    });

});

