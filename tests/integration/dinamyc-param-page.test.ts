import type { FastifyInstance } from "fastify";

import { afterEach, beforeEach, describe, expect, it, } from "vitest";

import { buildApp } from "../../src/app.js";

describe("Param HTML Features", () => {
    let app: FastifyInstance;

    beforeEach(() => {
        app = buildApp({
            logger: false,
        });
    });

    afterEach(async () => {
        await app.close();
    });

    it("Empty param returns error", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/scenarios/",
    });
    /*
    healthy"
    | "all-errors"
    | "all-fixtures"
    | "broken-media 
    */
    expect(response.statusCode).toBe(400);
    expect(response.headers["content-type"]).toContain("application/json")
    expect(response.body).toContain("params/name must be equal to constant")
    });

    it("Query with broken link", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/scenarios/healthy",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toContain("Hello world!")
    expect(response.body).toContain("Working link")
    expect(response.body).toContain("Redirected link")
    expect(response.body).toContain("Valid image")
    expect(response.body).toContain("Valid video")
    expect(response.body).toContain("Valid PDF")
    expect(response.body).not.toContain("Broken link")
    expect(response.body).not.toContain("Helllow orld!")
    expect(response.body).not.toContain("Missing image")
    expect(response.body).not.toContain("Missing video")
    expect(response.body).not.toContain("Missing PDF")
    });
    
    it("Query with valid image", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/scenarios/all-errors",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toContain("Broken link")
    expect(response.body).toContain("Helllow orld!")
    expect(response.body).toContain("Missing image")
    expect(response.body).toContain("Missing video")
    expect(response.body).toContain("Missing PDF")
    expect(response.body).not.toContain("Working link")
    expect(response.body).not.toContain("Hello world!")
    expect(response.body).not.toContain("Valid video")
    expect(response.body).not.toContain("Valid PDF")
    expect(response.body).not.toContain("Valid image")
    });
    
});