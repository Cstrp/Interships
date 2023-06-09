// server.ts
import mongoose from "mongoose";
import { app } from "./services";
import { DB_PASSWORD, DB_USERNAME } from "../config";

const url: string = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.rlhd2j8.mongodb.net/`;

(async () => {
  try {
    await mongoose.connect(url);
    app.listen(8080, () =>
      console.log(`Server has been started: http://localhost:${8080}`)
    );
  } catch (error) {
    console.error(error);
  }
})();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit(0);
});
