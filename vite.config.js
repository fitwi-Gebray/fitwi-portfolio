import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allows using 'describe', 'expect', 'test' without importing
    environment: "jsdom", // Simulates a browser environment
    setupFiles: "./src/setupTests.js", // Global setup for Matchers
    css: true, // Natively handle CSS imports in tests
  },
});
