import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Corregido el alias para resolver rutas relativas
      "@components": "/src/components", // Ajusta la ruta según tu estructura de carpetas
    },
  },
});
