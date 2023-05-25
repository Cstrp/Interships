import { PORT } from './config/db';
import * as server from './services';

(async () => {
  try {
    await server.sql.connect();
    server.app.listen(PORT, () => console.log(`Server has been started on http://localhost:${PORT}`));
  } catch (error) {
    console.error(error);
  }
})();

process.on('SIGINT', async () => {
  server.sql.destroy();
  process.exit(0);
});
