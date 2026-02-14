import { execSync } from "child_process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content"],
  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
  },
  appConfig: {
    commitHash: execSync("git rev-parse HEAD").toString().trim() || "unknown",
  },
  routeRules: {
    "/tools/**": { appLayout: "tools" },
  },
});
