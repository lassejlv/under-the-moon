import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// eslint complains about __dirname not being defined
const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
