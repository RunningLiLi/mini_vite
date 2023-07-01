import { Plugin } from "esbuild";
import { BARE_IMPORT_RE, EXTERNAL_TYPES } from "../constants";
import { red } from "picocolors";
export default function scanPlugin(depSet: Set<String>): Plugin {
  return {
    name: "esbuild:scan-deps",
    setup(build) {
      build.onResolve(
        { filter: new RegExp(`\\.(${EXTERNAL_TYPES.join("|")})$`) },
        (resolveInfo) => {
          return {
            path: resolveInfo.path,
            external: true,
          };
        }
      );
      build.onResolve({ filter: BARE_IMPORT_RE }, (resolveInfo) => {
        depSet.add(resolveInfo.path);
        return {
          path: resolveInfo.path,
          external: true,
        };
      });
      build.onEnd(() => {
        console.log(red("预构建依赖"), depSet);
      });
    },
  };
}
