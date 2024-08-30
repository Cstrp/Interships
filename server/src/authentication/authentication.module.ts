import { Module } from '@nestjs/common';
import { AuthenticationController } from './controllers';
import { UserModule } from '../user';
import { PassportModule } from '@nestjs/passport';
import { AuthenticationService } from './services';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ session: false, defaultStrategy: 'jwt' }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
  exports: [],
})
export class AuthenticationModule {}
