import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from "@nestjs/common";

import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log({ body });

    return this.messagesService.create(body.content);
  }

  @Get("/:id")
  async readMessage(@Param("id") id: string) {
    console.log({ id });
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException("Message not found");
    }

    return message;
  }

  @Put("/:id")
  async updateMessage(@Param("id") id: string, @Body() body: CreateMessageDto) {
    console.log({ id, body });

    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException("Message not found");
    }

    await this.messagesService.update(id, body.content);

    return await this.messagesService.findOne(id);
  }

  @Delete("/:id")
  async deleteMessage(@Param("id") id: string) {
    console.log({ id });
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException("Message not found");
    }

    await this.messagesService.delete(id);

    return `message with id: ${id} deleted`;
  }
}
