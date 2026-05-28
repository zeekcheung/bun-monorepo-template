import { describe, expect, test } from "vitest";
import { exports } from "cloudflare:workers";
import app from "../src";

// Creates a suite of tests, allowing for grouping and hierarchical organization of tests
describe("hono-app worker", () => {
  // Defines a test case with a given name and test function
  test("should return 200 on GET /api/hi", async () => {
    const res = await app.request("/api/hi");
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hi Hono!");
  });

  test("responds with not found and proper status for /404", async () => {
    const res = await exports.default.fetch("http://localhost:8788/404");
    expect(res.status).toBe(404);
    expect(await res.text()).toBe("404 Not Found");
  });
});
