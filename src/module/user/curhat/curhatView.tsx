"use client";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";

import useCurhatService from "@/src/module/user/curhat/curhatService";

export default function CurhatView() {
  const {
    listConversation,
    fetchDetailDataConversation,
    listDetailConversation,
    postConversation,
    prompt,
    setPrompt,
    createSessionCurhat,
    isSubmit,
    conversationId,
    isSesi,
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

  const base64: string =
    "data:audio/mp3;base64,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4xjE6xAB0uZZRRACVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVX/4xjE5hXq+oYRjVAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVX/4xjExAAAA0gBwAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVX/4xjExAAAA0gAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVX/4xjExAAAA0gAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVX/4xjExAAAA0gAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVX/4xjExAAAA0gAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVX/4xjExAAAA0gAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVX/4xjExAAAA0gAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVX/4xjExAAAA0gAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4xjExAAAA0gAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4xjExAAAA0gAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/4xjExAAAA0gAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";

  return (
    <div
      className={`flex w-full bg-secondary flex-col justify-center items-center`}
    >
      <div className={`container`}>
        {/*  */}
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-5 justify-center mx-auto`}
        >
          <div
            className={`md:col-span-1 bg-whitesmoke border-1 border-gray-500 rounded-2xl px-6 py-4 w-full sm:max-w-md`}
          >
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio controls>
              <source src={base64} type="audio/mp3" />
              <track kind="metadata" srcLang="en" />
              Not Supported
            </audio>
            <div className={`flex justify-between items-center`}>
              <div className={`text-xl font-bold text-black`}>Sesi Curhat</div>
              <Button
                color={`primary`}
                isDisabled={isSesi}
                isLoading={isSesi}
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
            className={`md:col-span-3 bg-whitesmoke border-1 border-gray-500 rounded-2xl`}
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
                  <div>
                    <Image
                      alt={`List Icons`}
                      height={40}
                      src={`/icons/list-icons.svg`}
                      width={40}
                    />
                  </div>
                  <div>
                    <Image
                      alt={`List Icons`}
                      height={40}
                      src={`/icons/close-icons.svg`}
                      width={40}
                    />
                  </div>
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
            <div className={`px-8 mb-4 ${conversationId ? "" : "hidden"}`}>
              <Input
                endContent={
                  <Button
                    isDisabled={isSubmit}
                    isLoading={isSubmit}
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
