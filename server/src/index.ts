import config from "config";
import * as mongoose from "mongoose";
import { app } from "./services/server.service";

const port: number = config.get("port");
const db_url: string = config.get("dbUrl");

(async () => {
  try {
    await mongoose.connect(db_url);
    app.start(port);
  } catch (err) {
    console.error(err);
  }
})();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit(0);
});
