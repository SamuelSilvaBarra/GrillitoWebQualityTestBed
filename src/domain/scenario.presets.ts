import type { DemoScenario } from "./scenario.js";

export const defaultScenario: DemoScenario = {
    spelling: ["correct", "incorrect"],
    links: ["working", "broken", "redirect"],
    images: ["working", "missing"],
    videos: ["working", "missing"],
    pdfs: ["valid", "missing"], 
};

export const healthy: DemoScenario = {
    spelling: ["correct"],
    links: ["working", "redirect"],
    images: ["working"],
    videos: ["working"],
    pdfs: ["valid"],
}

export const allErrors: DemoScenario = {
    spelling: ["incorrect"],
    links: ["broken"],
    images: ["missing"],
    videos: ["missing"],
    pdfs: ["missing"],
}

export const allFixtures: DemoScenario = {
    spelling: ["correct", "incorrect"],
    links: ["broken", "redirect", "working"],
    images: ["missing", "working"],
    videos: ["missing", "working"],
    pdfs: ["missing", "valid"],
}

export const brokenMedia: DemoScenario = {
    spelling: [],
    links: ["broken"],
    images: ["missing"],
    videos: ["missing"],
    pdfs: ["missing"],
}