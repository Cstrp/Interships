// server.ts
import mongoose from "mongoose";
import config from "config";
import { app } from "./services";

const url: string = config.get("url");
const port: number = config.get("port");

(async () => {
  try {
    await mongoose.connect(url);
    app.listen(port, () =>
      console.log(`Server has been started: http://localhost:${port}`)
    );
  } catch (error) {
    console.error(error);
  }
})();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit(0);
});
