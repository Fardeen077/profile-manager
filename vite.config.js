import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/profile-manager/", // ✅ repo name with trailing slash
});
