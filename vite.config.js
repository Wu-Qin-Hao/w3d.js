import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/w3d.js",
      name: "w3d",
      fileName: "w3d",
    },
  },
});
