import { build } from "esbuild";

const buildOptions = {
  entryPoints: ["src/index.ts"],
  bundle: false,
  platform: "node",
  target: "node20",
  format: "esm",
  packages: "external",
  sourcemap: "external",
  tsconfig: "tsconfig.json",
  outdir: "dist",
};

export default buildOptions;

await build(buildOptions);
