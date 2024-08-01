import path from "node:path";
import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Esto lee las variables de entorno
// import 'dotenv/config'
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // ___dirname = Directorio Actual
      '@shared': path.resolve(__dirname, "./src/apps/shared")
    },
  },
});
