// To parse this data:
//
//   import { Convert, ModelUserPassword } from "./file";
//
//   const modelUserPassword = Convert.toModelUserPassword(json);

export interface ModelUserPassword {
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
  is_profile: boolean;
}

// Converts JSON strings to/from your types
export class ConvertToModelUserPassword {
  public static toModelUserPassword(json: string): ModelUserPassword {
    return JSON.parse(json);
  }

  public static modelUserPasswordToJson(value: ModelUserPassword): string {
    return JSON.stringify(value);
  }
}
