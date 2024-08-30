import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, JwtFromRequestFunction, Strategy } from 'passport-jwt';
import { Payload } from '../../types';
import { AuthenticationService } from '../services';

const extractFromCookies: JwtFromRequestFunction = req =>
  req.signedCookies['access_token'];

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    config: ConfigService,
    private readonly authService: AuthenticationService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        extractFromCookies,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      secretOrKey: config.get<string>('JWT_ACCESS_TOKEN_SECRET'),
      ignoreExpiration: false,
      passReqToCallback: false,
    });
  }

  public async validate(payload: Payload) {
    return await this.authService.verifyPayload(payload);
  }
}
