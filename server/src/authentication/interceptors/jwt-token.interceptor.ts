import { AuthService } from '../services/auth.service';
import { UserDto } from '../../user/dto';
import { map, Observable } from 'rxjs';
import { Response } from 'express';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

@Injectable()
export class JwtTokenInterceptor implements NestInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<UserDto>
  ): Observable<UserDto> | Promise<Observable<UserDto>> {
    return next.handle().pipe(
      map(usr => {
        const resp = context.switchToHttp().getResponse<Response>();
        const token = this.authService.signToken(usr);

        resp.setHeader('Authorization', `Bearer ${token}`);
        resp.cookie('access_token', token, {
          httpOnly: true,
          signed: true,
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
        });

        return usr;
      })
    );
  }
}
