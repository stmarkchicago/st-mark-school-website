import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

const basePath = process.env.PUBLIC_BASE_PATH || "";

export default defineConfig({
  base: basePath || "/",
  integrations: [react()],
  // Use Cloudflare adapter by default, but can be overridden for Netlify
  // For Netlify deployment, remove the adapter line or use @astrojs/netlify
  output: "server",
  adapter: cloudflare({
    imageService: "compile",
    platformProxy: {
      enabled: true,
    },
  }),
});


