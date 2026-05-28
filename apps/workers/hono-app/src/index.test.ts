import { describe, expect, test } from "vitest";
import app from ".";

// Creates a suite of tests, allowing for grouping and hierarchical organization of tests
describe("hono-app worker", () => {
  // Defines a test case with a given name and test function
  test("should return 200 on GET /", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hello Hono!");
  });
});
