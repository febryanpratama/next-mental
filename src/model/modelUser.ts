// To parse this data:
//
//   import { Convert, ModelUser } from "./file";
//
//   const modelUser = Convert.toModelUser(json);

export interface ModelUser {
  errorCode: number;
  message: string;
  result: Result;
}

export interface Result {
  token: string;
  user: User;
}

export interface User {
  active: boolean;
  name: string;
  address: string;
  email: string;
  avatar: string;
  phone: string;
  username: string;
  is_password: boolean;
}

// Converts JSON strings to/from your types
export class ConvertToModelUser {
  public static toModelUser(json: string): ModelUser {
    return JSON.parse(json);
  }

  public static modelUserToJson(value: ModelUser): string {
    return JSON.stringify(value);
  }
}
