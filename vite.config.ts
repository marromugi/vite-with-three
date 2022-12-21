import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src", "pages");

export default defineConfig({
  root,
});
