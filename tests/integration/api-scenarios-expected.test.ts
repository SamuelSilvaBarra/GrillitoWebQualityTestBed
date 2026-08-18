import type { FastifyInstance } from "fastify";

import { afterEach, beforeEach, describe, expect, it, } from "vitest";

import { buildApp } from "../../src/app.js";

describe("API Report", () => {
    let app: FastifyInstance;

    beforeEach(() => {
        app = buildApp({
            logger: false,
        });
    });

    afterEach(async () => {
        await app.close();
    });

    it("Returns the correct content type and status code for a working report", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/api/scenarios/healthy/expected",
    });
    
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain("application/json")
    
    });

    it("Healthy scenario returns the correct values", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/api/scenarios/healthy/expected",
    });
    
    expect(response.body).toContain("working")
    expect(response.body).toContain("valid")
    expect(response.body).toContain("redirect")
    expect(response.body).not.toContain("missing")
    expect(response.body).not.toContain("broken")
    });

    it("all errors scenario returns the correct values", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/api/scenarios/all-errors/expected",
    });
    
    
    expect(response.body).toContain("missing")
    expect(response.body).toContain("broken")
    expect(response.body).not.toContain("working")
    expect(response.body).not.toContain("valid")
    expect(response.body).not.toContain("redirect")
    });

    it("Query with invalid param", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/api/scenarios/potato/expected",
    });

    expect(response.statusCode).toBe(400);
    expect(response.headers["content-type"]).toContain("application/json");
    expect(response.body).toContain("must match a schema")
    });
});