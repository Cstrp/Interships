import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto, UserProfileDto } from '../dto';
import { JwtGuard } from '../../authentication/guards';
import { UserService } from '../services';
import { Request } from 'express';

@ApiTags('User')
@Controller('profile')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtGuard)
  public async profile(@Req() req: Request) {
    const user = req.user as UserDto;
    return await this.userService.findOneById(user.id);
  }

  @Put('update')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtGuard)
  public async update(@Param() id: string, profile: UserProfileDto) {}

  @Delete('delete/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtGuard)
  public async delete(@Param('id') id: string) {
    return await this.userService.deleteProfile(id);
  }
}
