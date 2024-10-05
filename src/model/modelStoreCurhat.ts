// To parse this data:
//
//   import { Convert, ModelGetUser } from "./file";
//
//   const modelGetUser = Convert.toModelGetUser(json);

export interface ModelStoreCurhat {
  errorCode: number;
  message: string;
  result: Result[];
}

export interface Result {
  id: number;
  conversationId: number;
  response: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  roleAi: string;
  isUser: boolean;
  readeble: boolean;
  conversation: Conversation;
}

export interface Conversation {
  id: number;
  userId: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  isEndConversation: boolean;
  type: string;
}

// Converts JSON strings to/from your types
export class ConvertToModelStoreCurhat {
  public static toModelStoreCurhat(json: string): ModelStoreCurhat {
    return JSON.parse(json);
  }

  public static modelStoreCurhatToJson(value: ModelStoreCurhat): string {
    return JSON.stringify(value);
  }
}
