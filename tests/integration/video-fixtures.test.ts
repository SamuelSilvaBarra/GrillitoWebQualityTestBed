import type { FastifyInstance } from "fastify";

import { afterEach, beforeEach, describe, expect, it, } from "vitest";

import { buildApp } from "../../src/app.js";

describe("Video fixtures", () => {
    let app: FastifyInstance;

    beforeEach(() => {
        app = buildApp({
            logger: false,
        });
    });

    afterEach(async () => {
        await app.close();
    });

    it("Returns 200 for a working Video", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/static/videos/valid-video.mp4",
    });
    
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain("video/mp4")
    });
    
    it("Returns 404 for missing Video", async () => {
        const response = await app.inject({
        method: "GET",
        url: "/static/videos/missing-video.mp4",
    });
    expect(response.statusCode).toBe(404)
    expect(response.body).toContain("Not Found")
    });

});

