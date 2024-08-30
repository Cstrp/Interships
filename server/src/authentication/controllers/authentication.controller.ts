import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AuthenticationService } from '../services';
import { JwtTokenInterceptor } from '../interceptors/jwt-token.interceptor';
import { CreateUserDto as User } from '../../user/dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('sign-up')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(JwtTokenInterceptor)
  public async signIn(@Body() user: User) {
    return await this.authService.signUp(user);
  }

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(JwtTokenInterceptor)
  public async signUp(@Body() user: User) {
    return await this.authService.signIn(user);
  }
}
