import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './config';
import { Logger } from '@nestjs/common';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  appConfig(app);

  await app.listen(3000);

  return app;
};

(async () => {
  try {
    const server = await bootstrap();
    Logger.log(
      'Application has been started successfully',
      await server.getUrl()
    );
  } catch (err) {
    Logger.error('Error on bootstrap', err);
  }
})();
