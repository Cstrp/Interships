import { app, connection } from './services';
import { PORT } from './config/db';

(async () => {
  try {
    await connection.connect();
    app.listen(PORT, () => console.log(`Server has been started on http://localhost:${PORT}`));
  } catch (error) {
    console.error(error);
  }
})();

process.on('SIGINT', async () => {
  connection.destroy();
  process.exit(0);
});
