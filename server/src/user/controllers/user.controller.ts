import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../services';
import { JwtAuthGuard } from '../../authentication/guards/jwt-auth.guard';
import { Request } from 'express';

@Controller('')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async profile(@Req() req: Request) {
    return req.user;
  }
}
