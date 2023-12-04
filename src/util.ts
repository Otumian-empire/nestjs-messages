import { randomBytes } from "crypto";

export class Util {
  static PORT = 3000;
  static FILE_NAME = "messages.json";
  static generateId(): string {
    return randomBytes(5).toString("hex");
  }
}
