// To parse this data:
//
//   import { Convert, ModelDetailConversation } from "./file";
//
//   const modelDetailConversation = Convert.toModelDetailConversation(json);

export interface ModelDetailConversation {
  errorCode: number;
  message: string;
  result: ResultDetailConversation[];
}

export interface ResultDetailConversation {
  id: number;
  conversationId: number;
  response: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  isUser: boolean;
  conversation: Conversation;
}

export interface Conversation {
  id: number;
  userId: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}

// Converts JSON strings to/from your types
export class ConvertToModelDetailConversation {
  public static toModelDetailConversation(
    json: string,
  ): ModelDetailConversation {
    return JSON.parse(json);
  }

  public static modelDetailConversationToJson(
    value: ModelDetailConversation,
  ): string {
    return JSON.stringify(value);
  }
}
