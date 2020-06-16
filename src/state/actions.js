import { NEW_MESSAGE } from "./types";
import { uuid } from "uuidv4";

export const newMessage = (text) => ({
  type: NEW_MESSAGE,
  item: { id: uuid(), text, timestamp: Date.now() },
});
