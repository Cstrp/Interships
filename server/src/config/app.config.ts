import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { LoggerErrorInterceptor } from 'nestjs-pino';

export const appConfig = (app: INestApplication) => {
  app.enableShutdownHooks();
  app.use(cookieParser(process.env.APP_SECRET));
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS.split(/\s*,\s*/) ?? '*',
    credentials: true,
    exposedHeaders: ['Authorization'],
  });

  app.setGlobalPrefix('api/v1');

  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    })
  );
};
