"use client";
import { useEffect, useState } from "react";

import {
  fetchGetCurhat,
  fetchPostCurhat,
  fetchPostDetailConversation,
  fetchPostDetailCurhat,
} from "@/src/repository/curhat/CurhatRepository";
import { ResultModelGetCurhat } from "@/src/model/modelGetCurhat";
import { ResultDetailConversation } from "@/src/model/modelDetailConversation";

const useCurhatService = () => {
  const [isData, setIsData] = useState<string>("");
  const [conversationId, setConversationId] = useState<number>();
  const [uuid, setUuid] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [listConversation, setListConversation] = useState<
    ResultModelGetCurhat[] | null
  >([]);
  const [listDetailConversation, setListDetailConversation] = useState<
    ResultDetailConversation[] | null
  >([]);

  const fetchDataConversation = async () => {
    //
    const resp = await fetchGetCurhat();

    if (resp === null) {
      return null;
    }
    setListConversation(resp.result);
  };

  const fetchDetailDataConversation = async (conversationId: number) => {
    setConversationId(conversationId);
    const resp = await fetchPostDetailConversation(Number(conversationId));

    if (resp === null) {
      return null;
    }

    setListDetailConversation(resp.result);
  };

  const postConversation = async () => {
    // console.log(conversationId);
    const reqBody = {
      conversationId: conversationId,
      prompt,
    };

    const resp = await fetchPostDetailCurhat(reqBody);

    if (resp === null) {
      return null;
    }

    setListDetailConversation(resp.result);
    setPrompt("");
  };

  const createSessionCurhat = async () => {
    const reqBody = {
      prompt: "Halo, hari ini aku mau curhat",
      uuid: "",
    };
    const resp = fetchPostCurhat(reqBody);

    if (resp === null) {
      return null;
    }
    fetchDataConversation();
  };

  useEffect(() => {
    fetchDataConversation();
  }, []);

  return {
    isData,
    setIsData,
    conversationId,
    setConversationId,
    listConversation,
    listDetailConversation,
    fetchDetailDataConversation,
    prompt,
    setPrompt,
    uuid,
    setUuid,
    postConversation,
    createSessionCurhat,
  };
};

export default useCurhatService;
