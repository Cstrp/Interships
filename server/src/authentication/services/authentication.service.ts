import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../../user/services';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto as Usr, UserDto as User } from '../../user/dto';
import { Payload } from '../../types';
import { compare, encrypt } from '../../utils';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  public async signIn(user: Usr) {
    const { username, password } = user;
    const foundedUser = await this.userService.findOneByName(username);

    if (!foundedUser) {
      throw new ForbiddenException('Credentials are incorrect.');
    }

    const isMatch = compare(password, foundedUser.password);

    if (!isMatch) {
      throw new ForbiddenException('Credentials are incorrect.');
    }

    return foundedUser;
  }

  public async signUp(user: Usr) {
    const { username, password } = user;
    const existingUser = await this.userService.findOneByName(username);

    if (existingUser) {
      throw new ForbiddenException(`Credentials already in use.`);
    } else {
      const hashPasswd = encrypt(password);

      try {
        return await this.userService.create({
          username,
          password: hashPasswd,
        });
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Credentials already in use.');
          }
        }
      }
    }
  }

  public async signToken(user: User): Promise<string> {
    return await this.jwtService.signAsync({ sub: user.id });
  }

  public async verifyPayload(payload: Payload) {
    let user: Usr;

    try {
      user = await this.userService.findOneById(payload.sub);
    } catch (error) {
      throw new UnauthorizedException(
        `There isn't a user with this id ${payload.sub} `
      );
    }

    delete user.password;

    return user;
  }
}
