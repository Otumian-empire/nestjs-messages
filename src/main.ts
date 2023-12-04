import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";

import { MessagesModule } from "./messages/messages.module";
import { Util } from "./util";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MessagesModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? Util.PORT);
}
bootstrap();
