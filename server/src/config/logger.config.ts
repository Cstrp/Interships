import { Params } from 'nestjs-pino';
import type { Request } from 'express';
import { ReqId } from 'pino-http';

const passUrl = new Set(['/health', '/metrics']);

export const loggerConfig: Params = {
  pinoHttp: {
    quietReqLogger: true,
    genReqId: (req): ReqId => {
      const requestId = (<Request>req).header('X-Request-Id');
      return requestId ?? '';
    },
    transport: {
      dedupe: true,
      target: 'pino-pretty',
      options: {
        sync: true,
        colorize: true,
        singleLine: true,
        prettyPrint: true,
        levelFirst: true,
        messageKey: 'message',
        messageFormat:
          '{time} - {levelLabel} - {pid} - url:{req.url} - {req.method} - status:{res.statusCode}',
      },
    },
    level: process.env.NODE_ENV === 'production' ? 'debug' : 'info',
    autoLogging: {
      ignore: req => passUrl.has((<Request>req).originalUrl),
    },
  },
};
