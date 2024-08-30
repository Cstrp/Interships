import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ClientToServer, ServerToClient } from '../types';
import { Logger } from '@nestjs/common';
import { UserService } from '../user/services/user.service';

@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer() server: Server = new Server<
    ServerToClient,
    ClientToServer
  >();

  constructor(private readonly userService: UserService) {}

  afterInit(server: Server): void {
    this.server.on('connection', (socket: Socket) => {
      this.handleConnection(socket);
    });
  }

  handleConnection(client: Socket): void {
    Logger.log(`Client has been connected ${client.id}`);
  }

  handleDisconnect(client: Socket): void {
    Logger.log(`Client has been disconnected ${client.id}`);
  }
}
