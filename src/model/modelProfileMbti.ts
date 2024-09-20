// To parse this data:
//
//   import { Convert, ModelProfileMbti } from "./file";
//
//   const modelProfileMbti = Convert.toModelProfileMbti(json);

export interface ModelProfileMbti {
  errorCode: number;
  message: string;
  result: ResultModelMbti;
}

export interface ResultModelMbti {
  id: number;
  userId: number;
  nama: string;
  gender: string;
  username: string;
  foto: null;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}

// Converts JSON strings to/from your types
export class ConvertToModelMbti {
  public static toModelProfileMbti(json: string): ModelProfileMbti {
    return JSON.parse(json);
  }

  public static modelProfileMbtiToJson(value: ModelProfileMbti): string {
    return JSON.stringify(value);
  }
}
