import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

const basePath = process.env.PUBLIC_BASE_PATH || "";

export default defineConfig({
  base: basePath || "/",
  integrations: [react()],
  output: "server",
  adapter: netlify({
    edgeMiddleware: false,
  }),
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
  // Ensure public files including admin are copied
  publicDir: './public',
});

