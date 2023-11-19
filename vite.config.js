import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/path/to/your/components", // Ajusta la ruta según tu estructura de carpetas
    },
  },
});
