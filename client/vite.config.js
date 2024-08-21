import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            external: (id) => id.startsWith("zod"), // Excluye 'zod' solo si no es necesario en el frontend
        },
    },
});
