import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { UserDto } from '../../user/dto';
import { JwtTokenInterceptor } from '../interceptors/jwt-token.interceptor';

@ApiTags('Authentication')
@Controller('authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(JwtTokenInterceptor)
  public async signIn(@Body() user: UserDto) {
    return this.authService.signIn(user);
  }

  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(JwtTokenInterceptor)
  public async signUp(@Body() user: UserDto) {
    return await this.authService.signUp(user);
  }

  @Post('sign-out')
  @HttpCode(HttpStatus.OK)
  public async signOut() {}
}
