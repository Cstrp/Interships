// server.ts
import mongoose from "mongoose";
import { app } from "./services";
import { DB_PASSWORD, DB_USERNAME, PORT } from "./config";

const url: string = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.rlhd2j8.mongodb.net/`;

(async () => {
  try {
    mongoose
      .connect(url)
      .then(() => {
        console.log("Connect successful!");
      })
      .catch(err => {
        console.log("Error connecting to MongoDB", err);
      });
    app.listen(PORT, () =>
      console.log(`Server has been started: http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error(error);
  }
})();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit(0);
});
