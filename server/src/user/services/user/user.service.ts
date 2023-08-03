import { Injectable } from '@nestjs/common';
import { DbService } from '../../../db/services';
import { UserDto, UserProfileDto } from '../../dto';

@Injectable()
export class UserService {
  constructor(private readonly dbService: DbService) {}

  public async create(data: UserDto) {
    return await this.dbService.user.create({
      data: {
        email: data.email,
        password: data.password,
        profile: {
          create: data.profile,
        },
      },
    });
  }

  public async findOneByEmail(email: string) {
    return await this.dbService.user.findFirst({
      where: { email },
      include: { profile: true },
    });
  }

  public async findOneById(id: string) {
    return await this.dbService.user.findUnique({
      where: { id },
      include: { profile: true },
    });
  }

  public async findOneAndUpdate(id: string, data: UserDto) {
    return this.dbService.user.update({
      where: { id },
      data: { email: data.email, password: data.password },
    });
  }

  public async findOneAndDelete(id: string) {
    return this.dbService.user.delete({
      where: { id },
      include: { profile: true },
    });
  }

  public async updateProfile(id: string, data: UserProfileDto) {
    return await this.dbService.profile.update({ where: { id }, data });
  }

  public async deleteProfile(id: string) {
    return await this.dbService.profile.delete({ where: { id } });
  }
}
