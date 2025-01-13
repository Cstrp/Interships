import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UserService } from './services';

@WebSocketGateway()
export class UserGateway {
  @WebSocketServer() server: Server;

  constructor(private readonly userService: UserService) {}

  @SubscribeMessage('search')
  public async handleSearch(client: Socket, query: string): Promise<void> {
    const res = await this.userService.findUserByQuery(query);
    this.server.to(client.id).emit('search', res);
  }
}
