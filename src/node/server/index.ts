import connect from "connect";
import { green, blue } from "picocolors";
import optimize from "../optimzier";
export function startDevServer() {
  const app = connect();

  const startTime = Date.now();
  app.use((req, res, next) => {
    res.end("hello world");
  });
  app.listen(3000, async () => {
    await optimize();
    console.log(green(`服务器启动成功🚀,耗时:${Date.now() - startTime}ms`));
    console.log(blue(`本地访问地址:http://localhost:3000`));
  });
}
