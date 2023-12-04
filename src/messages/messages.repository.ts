import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

import { Util } from "src/util";

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const content = await readFile(Util.FILE_NAME, "utf8");
    const messages = JSON.parse(content);

    return messages[id];
  }

  async findAll() {
    const content = await readFile(Util.FILE_NAME, "utf8");
    const messages = JSON.parse(content);

    return messages;
  }

  async create(message: string) {
    const content = await readFile(Util.FILE_NAME, "utf8");
    const messages = JSON.parse(content);

    const id = Util.generateId();

    messages[id] = { id, message };

    await writeFile(Util.FILE_NAME, JSON.stringify(messages));
  }

  async update(id: string, message: string) {
    const content = await readFile(Util.FILE_NAME, "utf8");
    const messages = JSON.parse(content);

    messages[id] = { id, message };

    await writeFile(Util.FILE_NAME, JSON.stringify(messages));
  }

  async delete(id: string) {
    const content = await readFile(Util.FILE_NAME, "utf8");
    const messages = JSON.parse(content);

    messages[id] = undefined;

    await writeFile(Util.FILE_NAME, JSON.stringify(messages));
  }
}
