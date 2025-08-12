import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true,
      filename: "bundle-stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
