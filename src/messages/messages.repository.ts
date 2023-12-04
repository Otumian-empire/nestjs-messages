// messages.repository.ts;
import { Injectable } from "@nestjs/common";
import { randomBytes } from "crypto";
import { readFile, writeFile } from "fs/promises";

function generateId(): string {
  return randomBytes(5).toString("hex");
}

const FILE_NAME = "messages.json";
const ENCODING = "utf8";

@Injectable()
export class MessageRepository {
  async findOne(id: string) {
    const content = await readFile(FILE_NAME, ENCODING);
    const messages = JSON.parse(content);

    return messages[id];
  }

  async findAll() {
    const content = await readFile(FILE_NAME, ENCODING);
    const messages = JSON.parse(content);

    return messages;
  }

  async create(message: string) {
    const content = await readFile(FILE_NAME, ENCODING);
    const messages = JSON.parse(content);

    const id = generateId();

    messages[id] = { id, message };

    await writeFile(FILE_NAME, JSON.stringify(messages));
  }
}
