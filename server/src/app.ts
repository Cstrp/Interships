import { PORT } from './config/db';
import * as server from './services';

(async () => {
  try {
    await server.connection.connect();
    server.app.listen(PORT, () => console.log(`Server has been started on http://localhost:${PORT}`));
  } catch (error) {
    console.error(error);
  }
})();

process.on('SIGINT', async () => {
  server.connection.destroy();
  process.exit(0);
});
