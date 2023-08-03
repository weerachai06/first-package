import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["./src/index.ts"],
  minify: true,
  splitting: false,
  treeshake: true,
  target: ["es2015", "es2017", "es2020", "esnext"],
  format: ["cjs", "esm"],
  dts: true,
})
