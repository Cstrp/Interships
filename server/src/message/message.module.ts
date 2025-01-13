import { Module } from '@nestjs/common';
import { MessageService } from './services';
import { MessageController } from './controllers/message.controller';
import { MessageGateway } from './message.gateway';

@Module({
  controllers: [MessageController],
  imports: [],
  providers: [MessageService, MessageGateway],
  exports: [],
})
export class MessageModule {}
