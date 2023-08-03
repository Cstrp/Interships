import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../../user/services';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../../user/dto';
import { compare, encrypt, Payload } from '../../utils';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  public async signIn(user: UserDto) {
    const { email, password } = user;
    const foundedUser = await this.usersService.findOneByEmail(email);

    if (!foundedUser) {
      throw new ForbiddenException('Credentials incorrect or user not found');
    }

    const isMatch = compare(password, foundedUser.password);

    if (!isMatch) {
      throw new ForbiddenException('Credentials incorrect.');
    }

    return foundedUser;
  }

  public async signUp(user: UserDto) {
    const { email, password } = user;
    const existingUser = await this.usersService.findOneByEmail(email);

    if (existingUser) {
      throw new ForbiddenException('Credentials already in use.');
    } else {
      const encryptedPassword = encrypt(password);

      try {
        return await this.usersService.create({
          email,
          password: encryptedPassword,
        });
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Credentials already in use.');
          }
        }

        throw error;
      }
    }
  }

  public signToken(user: UserDto): string {
    const payload = {
      sub: user.id,
    };
    return this.jwtService.sign(payload);
  }

  public async verify(payload: Payload): Promise<UserDto> {
    let user: UserDto;

    try {
      user = await this.usersService.findOneById(payload.sub);
    } catch (error) {
      throw new UnauthorizedException(
        `There isn"t a user with this id: ${payload.sub}`
      );
    }

    delete user.password;
    return user;
  }
}
