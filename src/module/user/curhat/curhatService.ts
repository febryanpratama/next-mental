"use client";
import { useEffect, useState } from "react";

import {
  fetchGetCurhat,
  fetchPostDetailConversation,
  fetchPostDetailCurhat,
  fetGetCreateSessionCurhat,
} from "@/src/repository/curhat/CurhatRepository";
import { ResultModelGetCurhat } from "@/src/model/modelGetCurhat";
import { ResultDetailConversation } from "@/src/model/modelDetailConversation";

interface interfaceListChat {
  response: any;
  roleAi: any;
  isUser: any;
  createdAt?: any;
  updatedAt?: any;
}
const useCurhatService = () => {
  const [isData, setIsData] = useState<string>("");
  const [conversationId, setConversationId] = useState<number>();
  const [uuid, setUuid] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isSesi, setIsSesi] = useState<boolean>(false);

  const [listConversation, setListConversation] = useState<
    ResultModelGetCurhat[] | null
  >([]);
  const [listDetailConversation, setListDetailConversation] = useState<
    ResultDetailConversation[] | null
  >([]);

  const [listChat, setListChat] = useState<interfaceListChat[] | null>([]);

  const fetchDataConversation = async () => {
    //
    const resp = await fetchGetCurhat();

    if (resp === null) {
      return null;
    }
    console.log("Respon", resp.result);
    setListConversation(resp.result);
  };

  const fetchDetailDataConversation = async (conversationId: number) => {
    setConversationId(conversationId);
    const resp = await fetchPostDetailConversation(Number(conversationId));

    if (resp === null) {
      return null;
    }

    if (Array.isArray(resp.result)) {
      const formattedData: interfaceListChat[] = resp.result.map(
        (item: any) => ({
          response: item.response,
          roleAi: item.roleAi, // sesuaikan dengan field di JSON
          isUser: item.isUser,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        }),
      );

      setListChat(formattedData);
    } else {
      console.error("Result is not an array");
    }
  };

  const postConversation = async () => {
    // console.log(conversationId);
    setIsSubmit(true);
    const reqBody = {
      conversationId: conversationId,
      prompt,
    };

    setListChat((prevChat) => [
      ...(prevChat || []),
      {
        response: prompt, // Menggunakan prompt sebagai response
        roleAi: "user", // Misalnya, ini adalah role dari pengguna
        isUser: true, // Flag bahwa ini adalah pesan dari pengguna
        createdAt: new Date().toISOString(), // Tanggal dibuat
        updatedAt: new Date().toISOString(), // Tanggal diperbarui
      },
    ]);

    const resp = await fetchPostDetailCurhat(reqBody);

    if (resp === null) {
      return null;
    }

    // setListDetailConversation(resp.result);
    setListChat((prevChat) => [
      ...(prevChat || []),
      {
        response: resp.result.response, // Menggunakan response dari AI
        roleAi: "assistant", // Role AI
        isUser: false, // Flag bahwa ini adalah pesan dari AI
        createdAt: new Date().toISOString(), // Tanggal dibuat
        updatedAt: new Date().toISOString(), // Tanggal diperbarui
      },
    ]);
    setPrompt("");
    setIsSubmit(false);
  };

  const createSessionCurhat = async () => {
    setIsSesi(true);
    const resp = await fetGetCreateSessionCurhat();

    if (resp === null) {
      setIsSesi(false);

      return null;
    }
    fetchDataConversation();
    setIsSesi(false);
  };

  // console.log(listChat);
  useEffect(() => {
    fetchDataConversation();
  }, []);

  return {
    listChat,
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
    isSubmit,
    setIsSubmit,
    isSesi,
    setIsSesi,
  };
};

export default useCurhatService;
