import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from "@nestjs/common";
import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessageService } from "./messages.service";

@Controller("messages")
export class MessagesController {
  constructor(public messageService: MessageService) {}

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log({ body });

    return this.messageService.create(body.content);
  }

  @Get("/:id")
  async readMessage(@Param("id") id: string) {
    console.log({ id });
    const message = await this.messageService.findOne(id);

    if (!message) {
      throw new NotFoundException("Message not found");
    }

    return message;
  }
}
