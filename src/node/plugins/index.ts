import { Plugin } from "../plugin";
import { resolvePlugin } from "./resolve";
import { esbuildTransformPlugin } from "./esbuild";
import { importAnalysisPlugin } from "./importAnalysis";
import { cssPlugin } from "./css";
import { assetPlugin } from "./asset";
import { clientInjectPlugin } from "./clientInject";
export function resolvePlugins(): Plugin[] {
  // 下一部分会逐个补充插件逻辑
  return [
    clientInjectPlugin(),
    resolvePlugin(),
    esbuildTransformPlugin(),
    importAnalysisPlugin(),
    cssPlugin(),
    assetPlugin(),
  ];
}
