import type { FastifyInstance } from "fastify";

import { afterEach, beforeEach, describe, expect, it, } from "vitest";

import { buildApp } from "../../src/app.js";

describe("Query HTML Features", () => {
    let app: FastifyInstance;

    beforeEach(() => {
        app = buildApp({
            logger: false,
        });
    });

    afterEach(async () => {
        await app.close();
    });

    it("Empty query returns the default scenario", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/demo",
    });
    
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain("text/html")
    expect(response.body).toContain("Web Quality Testbed")
    expect(response.body).toContain("Hello world!")
    expect(response.body).toContain("Helllow orld!")
    expect(response.body).toContain("Working link")
    expect(response.body).toContain("Broken link")
    expect(response.body).toContain("Valid image")
    expect(response.body).toContain("Missing image")
    expect(response.body).toContain("Valid video")
    expect(response.body).toContain("Missing video")
    expect(response.body).toContain("Valid PDF")
    expect(response.body).toContain("Missing PDF")
    });

    it("Query with broken link", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/demo?links=broken",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toContain("Broken link")
    expect(response.body).not.toContain("Working link")
    expect(response.body).not.toContain("Hello world!")
    expect(response.body).not.toContain("Helllow orld!")
    expect(response.body).not.toContain("Valid image")
    expect(response.body).not.toContain("Missing image")
    expect(response.body).not.toContain("Valid video")
    expect(response.body).not.toContain("Missing video")
    expect(response.body).not.toContain("Valid PDF")
    expect(response.body).not.toContain("Missing PDF")
    });
    
    it("Query with valid image", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/demo?images=working",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toContain("Valid image")
    expect(response.body).not.toContain("Working link")
    expect(response.body).not.toContain("Broken link")
    expect(response.body).not.toContain("Hello world!")
    expect(response.body).not.toContain("Helllow orld!")
    expect(response.body).not.toContain("Missing image")
    expect(response.body).not.toContain("Valid video")
    expect(response.body).not.toContain("Missing video")
    expect(response.body).not.toContain("Valid PDF")
    expect(response.body).not.toContain("Missing PDF")
    });

    it("Query with invalid param", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/demo?images=potato",
    });

    expect(response.statusCode).toBe(400);
    expect(response.headers["content-type"]).toContain("application/json");
    expect(response.body).toContain("must match a schema")
    });
    
});