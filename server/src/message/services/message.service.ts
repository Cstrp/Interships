import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../../database/services';
import { CreateMessageDto } from '../dto';

@Injectable()
export class MessageService {
  constructor(private readonly dbService: DatabaseService) {}

  public async getMessages() {
    return await this.dbService.message.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        createdAt: true,
      },
    });
  }

  public async createMessage(message: CreateMessageDto) {
    const { text, senderId, chatId } = message;

    return await this.dbService.message.create({
      data: {
        text,
        sender: { connect: { id: senderId } },
        chat: { connect: { id: chatId } },
      },
    });
  }

  public async updateMessage(id: string, message: CreateMessageDto) {
    const foundedMsg = await this.dbService.message.findUnique({
      where: { id },
    });

    if (!foundedMsg) {
      throw new NotFoundException('Message not found');
    }

    return await this.dbService.message.update({
      where: { id },
      data: { text: message.text },
    });
  }

  public async deleteMessage(id: string) {
    return await this.dbService.message.delete({
      where: { id },
    });
  }
}
