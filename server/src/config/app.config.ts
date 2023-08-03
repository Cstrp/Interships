import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { LoggerErrorInterceptor } from 'nestjs-pino';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

export const appConfig = (app: INestApplication) => {
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS.split(/\s*,\s*/) ?? '*',
    credentials: true,
    exposedHeaders: ['Authorization'],
  });
  app.enableShutdownHooks();
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    })
  );
  app.use(cookieParser(process.env.APP_SECRET));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());

  const config = new DocumentBuilder()
    .setTitle('Jwt Authentication API (example)')
    .setDescription('')
    .setVersion('1.0')
    .build();
  const doc = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, doc);
};
