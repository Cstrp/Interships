import { UserService } from './services';
import { UserController } from './controllers';
import { Module } from '@nestjs/common';

@Module({
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
