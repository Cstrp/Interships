import { app, sequelize } from "./services";
import { PORT } from "./config";

(async () => {
  try {
    await sequelize.authenticate();
    app.listen(PORT, () =>
      console.log(`Server has been started on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Unable to connect to the DB | Server", err);
  }
})();

process.on("SIGINT", async () => {
  await sequelize.close();
  process.exit();
});
