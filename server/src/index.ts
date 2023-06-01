import { server, socket as io } from "./services";
import config from "config";
import * as mongoose from "mongoose";
import { connect } from "./controllers";

const port: number = config.get("port");
const db_url: string = config.get("dbUrl");

io.on("connection", (socket) => {
  console.log("New client connected", socket.id);

  connect(io, socket);
});

(async () => {
  try {
    await mongoose.connect(db_url);

    server.listen(port, () =>
      console.log(`Server is listening on http://localhost:${port}`)
    );
  } catch (err) {
    console.log(err);
  }
})();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});
