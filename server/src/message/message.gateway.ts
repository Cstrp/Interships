import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageService } from './services';
import { CreateMessageDto } from './dto';

@WebSocketGateway()
export class MessageGateway {
  @WebSocketServer() server: Server;

  constructor(private readonly messageService: MessageService) {}

  @SubscribeMessage('send-message')
  public async handleMessage(client: Socket, message: CreateMessageDto) {
    const msg = await this.messageService.createMessage(message);
    this.server.to(message.chatId).emit('new-message', msg);
  }
}
