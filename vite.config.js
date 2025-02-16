import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
  },
  server: {
    host: "0.0.0.0", // Aqui está o segredo
    port: 5173, // Render usa a variável PORT
    allowedHosts: ['app-spotify-aljz.onrender.com'],
  },
});
