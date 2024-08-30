import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthenticationModule } from './authentication';
import { AppController } from './app.controller';
import { LoggerModule } from 'nestjs-pino';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { loggerConfig } from './config';
import { UserModule } from './user';
import { ChatModule } from './chat';
import { DatabaseModule } from './database';
import { MessageModule } from './message';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: [
        path.resolve(__dirname, '..', '..', '.env.db'),
        path.resolve(__dirname, '..', '..', '.env.development'),
      ],
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'uploads'),
    }),
    LoggerModule.forRoot(loggerConfig),
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_ACCESS_TOKEN_SECRET'),
        signOptions: {
          expiresIn: config.get<string>('JWT_ACCESS_TOKEN_EXPIRATION_TIME'),
        },
      }),
    }),
    UserModule,
    ChatModule,
    AuthenticationModule,
    DatabaseModule,
    MessageModule,
  ],
  providers: [],
  controllers: [AppController],
})
export class AppModule {}
