// To parse this data:
//
//   import { Convert, ModelMood } from "./file";
//
//   const modelMood = Convert.toModelMood(json);

export interface ModelMood {
  errorCode: number;
  message: string;
  result: ResultModelMood;
}

export interface ResultModelMood {
  id: number;
  userId: number;
  emoticon: string;
  description: string;
  date: Date;
  type: string;
  responseAi: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}

// Converts JSON strings to/from your types
export class ConvertToModelMood {
  public static toModelMood(json: string): ModelMood {
    return JSON.parse(json);
  }

  public static modelMoodToJson(value: ModelMood): string {
    return JSON.stringify(value);
  }
}
