// src/node/cli.ts
import cac from "cac";
import { startDevServer } from "./server/index";
const cli = cac();

// [] 中的内容为可选参数，也就是说仅输入 `vite` 命令下会执行下面的逻辑
cli
  .command("[root]", "Run the development server")
  .alias("serve")
  .alias("dev")
  .action(async () => {
    startDevServer();
  });

cli.help();
cli.parse();
