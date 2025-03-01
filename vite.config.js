import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";
import ViteSitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/" : "/",
  plugins: [
    react(),
    ViteSitemap({
      siteUrl: "https://portfolio.davidwebprojects.fr",
      changefreq: "daily",
      priority: 1.0,
      routes: [
        { url: "/", changefreq: "daily", priority: 1.0 },
        { url: "/about", changefreq: "weekly", priority: 0.8 },
        { url: "/project", changefreq: "weekly", priority: 0.8 },
        { url: "/contact", changefreq: "weekly", priority: 0.8 },
        { url: "/mentions-legales", changefreq: "weekly", priority: 0.8 },
      ],
      outDir: "dist",
    }),
  ],
});
