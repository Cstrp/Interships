import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { MessageService } from '../services';
import { JwtAuthGuard } from '../../authentication/guards/jwt-auth.guard';
import { MessageDto } from '../dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async getMessages() {
    return await this.messageService.getMessages();
  }

  @Post('send')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(JwtAuthGuard)
  async sendMessage(@Body() message: MessageDto) {
    return await this.messageService.createMessage(message);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async updateMessage(@Param('id') id: string, @Body() message: MessageDto) {
    return await this.messageService.updateMessage(id, message);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async deleteMessage(@Param('id') id: string) {
    return await this.messageService.deleteMessage(id);
  }
}
