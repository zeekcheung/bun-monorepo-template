import { Hono } from "hono";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/api/hi", (c) => {
  return c.text("Hi Hono!");
});

export default app;
