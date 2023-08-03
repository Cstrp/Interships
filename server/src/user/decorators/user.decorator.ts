import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { UserDto } from '../dto';
import { Request } from 'express';
import { UserService } from '../services';
import { DbService } from '../../db/services';

export const UserDecorator = createParamDecorator(
  async (data: keyof UserDto, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<Request>();
    const usr = req.user as UserDto;

    if (!usr) {
      throw new UnauthorizedException('User not found. Forbidden.');
    }

    const userService = new UserService(new DbService());
    const user = await userService.findOneById(usr.id);
    delete user.password;
    return user;
  }
);
