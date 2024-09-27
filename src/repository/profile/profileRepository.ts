import { ConvertToModelGetUser, ModelGetUser } from "@/src/model/modelGetUser";
import { getOnly, post, putOnly } from "@/src/core/api/baseApi";
import {
  ConvertToModelRefreshToken,
  ModelRefreshToken,
} from "@/src/model/modelRefreshToken";
import {
  ConvertToModelMbti,
  ModelProfileMbti,
} from "@/src/model/modelProfileMbti";

export const fetchProfileData = async (
  body: any,
): Promise<ModelProfileMbti | null> => {
  const resp = await post("/profile/mbti", {
    nama: body.nama,
    gender: body.gender,
    username: body.username,
    password: body.password,
    foto: "",
    prompt: body.prompt,
    bahasa: body.bahasa,
    gaya_komunikasi: body.gaya_komunikasi,
    durasi_komunikasi: body.durasi_komunikasi,
  });

  console.log("Response Profile Repository", resp);

  if (resp === null) {
    return null;
  }

  return ConvertToModelMbti.toModelProfileMbti(JSON.stringify(resp));
};
export const getProfileData = async (): Promise<ModelGetUser | null> => {
  const resp = await getOnly("/users/me", {});

  if (resp === null) {
    return null;
  }

  return ConvertToModelGetUser.toModelGetUser(JSON.stringify(resp.data));
};

export const putRefreshNewToken = async (
  tokenAntrian: string,
  tokenWork: string,
): Promise<ModelRefreshToken | null> => {
  const resp = await putOnly("/users/updateRefreshToken", {
    tokenAntrian,
    tokenWork,
  });

  if (resp === null) {
    return null;
  }

  return ConvertToModelRefreshToken.toModelRefreshToken(
    JSON.stringify(resp.data),
  );
};
