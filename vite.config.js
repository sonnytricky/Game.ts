import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    server: {
        host: "0.0.0.0",
        port: 5173,
        open: "http://192.168.0.102:5173/",
        allowedHosts: ["code-server.home.lab"],
    },
});
