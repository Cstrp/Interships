import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Response } from 'express';
import { AuthenticationService } from '../services';

@Injectable()
export class JwtTokenInterceptor implements NestInterceptor {
  constructor(private readonly authService: AuthenticationService) {}

  intercept(
    ctx: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map(async u => {
        const res = ctx.switchToHttp().getResponse<Response>();
        const token = await this.authService.signToken(u);

        res.cookie('access_token', token, {
          httpOnly: true,
          signed: true,
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
        });
      })
    );
  }
}
