// To parse this data:
//
//   import { Convert, ModelGetCurhat } from "./file";
//
//   const modelGetCurhat = Convert.toModelGetCurhat(json);

export interface ModelGetCurhat {
  errorCode: number;
  message: string;
  result: ResultModelGetCurhat[];
}

export interface ResultModelGetCurhat {
  id: number;
  userId: number;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  DetailConversation: DetailConversation[];
}

export interface DetailConversation {
  id: number;
  conversationId: number;
  response: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  isUser: boolean;
}

// Converts JSON strings to/from your types
export class ConvertToModelGetCurhat {
  public static toModelGetCurhat(json: string): ModelGetCurhat {
    return JSON.parse(json);
  }

  public static modelGetCurhatToJson(value: ModelGetCurhat): string {
    return JSON.stringify(value);
  }
}
