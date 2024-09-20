// To parse this data:
//
//   import { Convert, ModelStoreCurhat } from "./file";
//
//   const modelStoreCurhat = Convert.toModelStoreCurhat(json);

export interface ModelStoreCurhat {
  errorCode: number;
  message: string;
  result: ResultModelStoreCurhat;
}

export interface ResultModelStoreCurhat {
  id: number;
  conversationId: number;
  response: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  isUser: boolean;
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
