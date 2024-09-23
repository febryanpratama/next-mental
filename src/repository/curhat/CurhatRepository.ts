import { post, get } from "@/src/core/api/baseApi";
import {
  ConvertToModelStoreCurhat,
  ModelStoreCurhat,
} from "@/src/model/modelStoreCurhat";
import {
  ConvertToModelGetCurhat,
  ModelGetCurhat,
} from "@/src/model/modelGetCurhat";
import {
  ConvertToModelDetailConversation,
  ModelDetailConversation,
} from "@/src/model/modelDetailConversation";

export const fetchPostCurhat = async (
  reqBody: any,
): Promise<ModelStoreCurhat | null> => {
  const resp = await post("/curhat", {
    prompt: reqBody.prompt,
    uuid: reqBody.uuid,
  });

  if (resp === null) {
    return null;
  }

  return ConvertToModelStoreCurhat.toModelStoreCurhat(JSON.stringify(resp));
};

export const fetchGetCurhat = async (): Promise<ModelGetCurhat | null> => {
  //
  const resp = await get("/curhat");

  if (resp === null) {
    return null;
  }

  return ConvertToModelGetCurhat.toModelGetCurhat(JSON.stringify(resp.data));
};

export const fetchPostDetailConversation = async (
  conversationId: number,
): Promise<ModelDetailConversation | null> => {
  const resp = await post("/curhat/detail", {
    conversation_id: conversationId,
  });

  if (resp === null) {
    return null;
  }

  return ConvertToModelDetailConversation.toModelDetailConversation(
    JSON.stringify(resp),
  );
};

export const fetchPostDetailCurhat = async (
  reqBody: any,
): Promise<ModelDetailConversation | null> => {
  const resp = await post("/curhat/store-detail", {
    conversation_id: Number(reqBody.conversationId),
    prompt: reqBody.prompt,
  });

  if (resp === null) {
    return null;
  }

  return ConvertToModelDetailConversation.toModelDetailConversation(
    JSON.stringify(resp),
  );
};

export const fetGetCreateSessionCurhat =
  async (): Promise<ModelStoreCurhat | null> => {
    const resp = await get("/curhat/create-session-chat");

    if (resp === null) {
      return null;
    }

    return ConvertToModelStoreCurhat.toModelStoreCurhat(JSON.stringify(resp));
  };
