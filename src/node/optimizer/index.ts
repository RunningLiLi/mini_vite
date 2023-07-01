import { build } from "esbuild";
import scanPlugin from "./scanPlugin";
import { PRE_BUNDLE_DIR } from "../constants";
import preBundlePlugin from "./preBundlePlugin";
export async function optimize(root: string) {
  const depSet = new Set<string>();
  await build({
    entryPoints: [`${root}/src/main.tsx`],
    bundle: true,
    write: false,
    plugins: [scanPlugin(depSet)],
  });
  await build({
    entryPoints: [...depSet],
    bundle: true,
    splitting: true,
    write: true,
    outdir: `${root}/${PRE_BUNDLE_DIR}`,
    format: "esm",
    plugins: [preBundlePlugin(depSet)],
  });
}
