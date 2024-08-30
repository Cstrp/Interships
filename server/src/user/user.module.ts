import { UserController } from './controllers';
import { UserService } from './services';
import { Module } from '@nestjs/common';
import { UserGateway } from './user.gateway';

@Module({
  controllers: [UserController],
  providers: [UserService, UserGateway],
  exports: [UserService],
})
export class UserModule {}
