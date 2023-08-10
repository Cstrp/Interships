import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './config';
import { Logger } from '@nestjs/common';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  appConfig(app);

  await app.listen(process.env.PORT || 3000);

  return app.getUrl();
};

(async () => {
  try {
    const url = await bootstrap();
    Logger.log(url);
  } catch (error) {
    Logger.error(error);
  }
})();
