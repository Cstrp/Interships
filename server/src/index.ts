import config from "config";
import mongoose from "mongoose";
import { app } from "./services";

const url: string = config.get("url");
const port: number = config.get("port");

(async () => {
  try {
    await mongoose.connect(url);
    app.listen(port, () => console.log(`Server listening on port: ${port}`));
  } catch (error) {
    console.error(error);
  }
})();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit(0);
});
