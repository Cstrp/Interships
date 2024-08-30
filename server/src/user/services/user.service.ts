import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/services';
import { CreateUserDto } from '../dto';

@Injectable()
export class UserService {
  constructor(private readonly dbService: DatabaseService) {}

  public async create(data: CreateUserDto): Promise<CreateUserDto> {
    return this.dbService.user.create({ data });
  }

  public async update(id: string, data: CreateUserDto): Promise<CreateUserDto> {
    return await this.dbService.user.update({ where: { id }, data });
  }

  public async delete(id: string): Promise<CreateUserDto> {
    return await this.dbService.user.delete({ where: { id } });
  }

  public async findUserByQuery(query: string): Promise<CreateUserDto[]> {
    return await this.dbService.user.findMany({
      where: {
        OR: [{ username: { search: query } }],
      },
    });
  }

  public async findAll(): Promise<CreateUserDto[]> {
    return await this.dbService.user.findMany();
  }

  public async findOneById(id: string): Promise<CreateUserDto> {
    return await this.dbService.user.findFirst({ where: { id } });
  }

  public async findOneByName(username: string): Promise<CreateUserDto> {
    return await this.dbService.user.findFirst({ where: { username } });
  }
}
