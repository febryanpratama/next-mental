"use client";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";

import useCurhatService from "@/src/module/user/curhat/curhatService";

export default function CurhatView() {
  const {
    isData,
    setIsData,
    listConversation,
    fetchDetailDataConversation,
    setConversationId,
    listDetailConversation,
    postConversation,
    prompt,
    setPrompt,
    uuid,
    setUuid,
    createSessionCurhat,
  } = useCurhatService();

  function formatDate(dateString: string) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  }

  const listData = [
    {
      id: 1,
      conversationId: 1,
      response: "Hallo, aku mau curhat dong",
      createdAt: "2024-09-20T05:34:12.893Z",
      updatedAt: "2024-09-20T05:34:12.893Z",
      deletedAt: null,
      isUser: true,
      conversation: {
        id: 1,
        userId: 2,
        uuid: "6f75ea30-41f9-446e-8283-f341c23fe6e1",
        createdAt: "2024-09-20T05:34:12.888Z",
        updatedAt: "2024-09-20T05:34:12.888Z",
        deletedAt: null,
      },
    },
    {
      id: 2,
      conversationId: 1,
      response:
        "Halo! Tentu saja, saya di sini untuk mendengarkan. Ceritakan apa yang ingin kamu curhatkan.",
      createdAt: "2024-09-20T05:34:14.947Z",
      updatedAt: "2024-09-20T05:34:14.947Z",
      deletedAt: null,
      isUser: false,
      conversation: {
        id: 1,
        userId: 2,
        uuid: "6f75ea30-41f9-446e-8283-f341c23fe6e1",
        createdAt: "2024-09-20T05:34:12.888Z",
        updatedAt: "2024-09-20T05:34:12.888Z",
        deletedAt: null,
      },
    },
    {
      id: 3,
      conversationId: 1,
      response: "Saat Ini Aku Lagi Sedih",
      createdAt: "2024-09-20T05:36:03.362Z",
      updatedAt: "2024-09-20T05:36:03.362Z",
      deletedAt: null,
      isUser: true,
      conversation: {
        id: 1,
        userId: 2,
        uuid: "6f75ea30-41f9-446e-8283-f341c23fe6e1",
        createdAt: "2024-09-20T05:34:12.888Z",
        updatedAt: "2024-09-20T05:34:12.888Z",
        deletedAt: null,
      },
    },
    {
      id: 4,
      conversationId: 1,
      response:
        "Aku minta maaf kalau kamu sedang merasa sedih. Terkadang, emosi seperti kesedihan bisa terasa begitu kuat dan menantang untuk dihadapi. Apapun yang tengah kamu alami, ingatlah bahwa adalah normal untuk merasa sedih dan bahwa kamu tidak sendiri dalam perasaan ini. Jika kamu merasa nyaman, ceritakanlah apa yang membuatmu sedih. Berbicara tentang perasaanmu bisa membantu merasa sedikit lebih baik. Saya di sini untuk mendengarkan dan memberikan dukungan sebaik yang saya bisa.",
      createdAt: "2024-09-20T05:36:08.627Z",
      updatedAt: "2024-09-20T05:36:08.627Z",
      deletedAt: null,
      isUser: false,
      conversation: {
        id: 1,
        userId: 2,
        uuid: "6f75ea30-41f9-446e-8283-f341c23fe6e1",
        createdAt: "2024-09-20T05:34:12.888Z",
        updatedAt: "2024-09-20T05:34:12.888Z",
        deletedAt: null,
      },
    },
  ];

  return (
    <div
      className={`flex w-full bg-secondary flex-col justify-center items-center`}
    >
      <div className={`container`}>
        {/*  */}
        <div className={`grid grid-cols-4 gap-5`}>
          <div
            className={`col-span-1 bg-whitesmoke border-1 border-gray-500 rounded-2xl px-6 py-4`}
          >
            <div className={`flex justify-between items-center`}>
              <div className={`text-xl font-bold text-black`}>Sesi Curhat</div>
              <Button
                color={`primary`}
                variant={`ghost`}
                onClick={() => {
                  createSessionCurhat();
                }}
              >
                + Sesi
              </Button>
            </div>
            <hr className={`border-gray-800 w-1/2 my-3`} />
            {/*Each Data Curhat*/}
            {listConversation?.map((item: any, index: number) => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
              <div
                key={index}
                className={`bg-gray-300 rounded-2xl px-4 my-2 py-2 flex flex-col justify-center items-center duration-200 hover:cursor-pointer hover:bg-gray-400`}
                onClick={() => {
                  fetchDetailDataConversation(Number(item.id));
                }}
              >
                <div className={`self-end text-right`}>
                  {formatDate(item.createdAt)}
                </div>
                <div className={`text-md text-center font-bold`}>
                  {item.uuid}
                </div>
              </div>
            ))}
            {/* End Each Data Curhat */}
          </div>
          <div
            className={`col-span-3 bg-whitesmoke border-1 border-gray-500 rounded-2xl`}
          >
            <div className={`relative`}>
              <div
                className={`absolute flex justify-between top-0 w-full bg-primary opacity-60 rounded-t-2xl  px-8 py-4`}
              >
                <div className={`flex justify-center items-center`}>
                  <Image
                    alt={`Robot`}
                    className={`bg-gray-400 rounded-full p-2 mx-2`}
                    height={50}
                    src={`/icons/robot-icons.png`}
                    width={50}
                  />
                  <div className={`text-2xl font-bold text-whitesmoke mx-2`}>
                    AI Friendly
                  </div>
                </div>
                <div className={`flex justify-center items-center`}>
                  <div>icons 1</div>
                  <div>icons 2</div>
                </div>
              </div>
            </div>
            <div className={`mt-24 px-8`}>
              {listDetailConversation?.map((item: any, index: number) => {
                return (
                  <div key={index}>
                    {item.isUser ? (
                      <div className="flex justify-end items-center my-4">
                        <div className="px-4 py-2 border-1 border-gray-600 rounded-2xl">
                          {item.response}
                        </div>
                        <Image
                          alt="logo"
                          className="bg-gray-400 rounded-full p-1 mx-2"
                          height={50}
                          src="/icons/robot-icons.png"
                          width={50}
                        />
                      </div>
                    ) : (
                      <div className="flex justify-start items-center my-4">
                        <Image
                          alt="logo"
                          className="bg-gray-400 rounded-full p-1 mx-2"
                          height={50}
                          src="/icons/robot-icons.png"
                          width={50}
                        />
                        <div className="px-4 py-2 border-1 border-gray-600 rounded-2xl">
                          {item.response}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className={`px-8 mb-4`}>
              <Input
                endContent={
                  <Button
                    onClick={() => {
                      //
                      postConversation();
                    }}
                  >
                    Submit
                  </Button>
                }
                label={`Tulisan Keterangan Kamu`}
                type={`text`}
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
