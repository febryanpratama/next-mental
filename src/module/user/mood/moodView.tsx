"use client";
import { Tabs, Tab, Card, CardBody, Button, Input } from "@nextui-org/react";
import Image from "next/image";

import useMoodService from "@/src/module/user/mood/moodService";

export default function MoodView() {
  const {
    emoticon,
    setEmoticon,
    description,
    setDescription,
    setType,
    fetchData,
    responseData,
    postDataCurhat,
  } = useMoodService();

  const getEmoticonLabel = (emoticon: string) => {
    switch (emoticon) {
      case "sad":
        return "Sedih";
      case "happy":
        return "Senang";
      case "confused":
        return "Bingung";
      case "indifferent":
        return "Acuh tak acuh";
      case "angry":
        return "Marah";
      default:
        return "Tidak diketahui";
    }
  };

  return (
    <div className="flex w-full flex-col bg-secondary justify-center items-center">
      <div className={`container py-10`}>
        <div className={`flex flex-col justify-center items-center`}>
          <Button className={`my-5`} color={`primary`} variant={`ghost`}>
            Pilih Bulan
          </Button>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-4`}>
          <div className={`col-span-3`}>
            <Tabs
              aria-label="Options"
              onSelectionChange={(key) => {
                setType(key.toString());
              }}
            >
              <Tab key="love" title="Cinta">
                <Card className={`px-8 py-4`}>
                  <CardBody className={`w-full`}>
                    <div className={`grid grid-cols-1 md:grid-cols-5 gap-4`}>
                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "indifferent" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/indifferent.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("indifferent");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Biasa Aja
                        </div>
                      </div>

                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "happy" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/happy.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("happy");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Senang Banget
                        </div>
                      </div>

                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "confused" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/confused.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("confused");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Bingung
                        </div>
                      </div>
                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "sad" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/sad.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("sad");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Sedih
                        </div>
                      </div>
                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "angry" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/angry.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("angry");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Marah
                        </div>
                      </div>
                    </div>
                    <div
                      className={`mx-8 my-5 flex flex-col justify-center items-center`}
                    >
                      <Input
                        label={"description"}
                        type={`text`}
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                      <Button
                        className={`mt-10`}
                        color={`primary`}
                        variant={`ghost`}
                        onClick={() => {
                          fetchData();
                        }}
                      >
                        Submit Data
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="friends" title="Teman">
                <Card className={`w-full`}>
                  <CardBody className={`w-full`}>
                    <div className={`grid grid-cols-1 md:grid-cols-5 gap-4`}>
                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "indifferent" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/indifferent.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("indifferent");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Biasa Aja
                        </div>
                      </div>

                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "happy" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/happy.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("happy");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Senang Banget
                        </div>
                      </div>

                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "confused" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/confused.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("confused");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Bingung
                        </div>
                      </div>
                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "sad" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/sad.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("sad");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Sedih
                        </div>
                      </div>
                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "angry" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/angry.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("angry");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Marah
                        </div>
                      </div>
                    </div>
                    <div
                      className={`mx-8 my-5 flex flex-col justify-center items-center`}
                    >
                      <Input
                        label={"description"}
                        type={`text`}
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                      <Button
                        className={`mt-10`}
                        color={`primary`}
                        variant={`ghost`}
                        onClick={() => {
                          fetchData();
                        }}
                      >
                        Submit Data
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="family" title="Keluarga">
                <Card className={`w-full`}>
                  <CardBody className={`w-full`}>
                    <div className={`grid grid-cols-1 md:grid-cols-5 gap-4`}>
                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "indifferent" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/indifferent.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("indifferent");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Biasa Aja
                        </div>
                      </div>

                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "happy" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/happy.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("happy");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Senang Banget
                        </div>
                      </div>

                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "confused" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/confused.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("confused");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Bingung
                        </div>
                      </div>
                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "sad" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/sad.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("sad");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Sedih
                        </div>
                      </div>
                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "angry" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/angry.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("angry");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Marah
                        </div>
                      </div>
                    </div>
                    <div
                      className={`mx-8 my-5 flex flex-col justify-center items-center`}
                    >
                      <Input
                        label={"description"}
                        type={`text`}
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                      <Button
                        className={`mt-10`}
                        color={`primary`}
                        variant={`ghost`}
                        onClick={() => {
                          fetchData();
                        }}
                      >
                        Submit Data
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="career" title="Karir">
                <Card className={`w-full`}>
                  <CardBody className={`w-full`}>
                    <div className={`grid grid-cols-1 md:grid-cols-5 gap-4`}>
                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "indifferent" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/indifferent.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("indifferent");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Biasa Aja
                        </div>
                      </div>

                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "happy" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/happy.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("happy");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Senang Banget
                        </div>
                      </div>

                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "confused" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/confused.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("confused");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Bingung
                        </div>
                      </div>
                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "sad" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/sad.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("sad");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Sedih
                        </div>
                      </div>
                      <div
                        className={`flex flex-col justify-center items-center`}
                      >
                        <Image
                          alt={`Biasa Icon`}
                          className={`${emoticon === "angry" ? "bg-red-700 rounded-2xl" : ""}`}
                          height={100}
                          src={`/icons/angry.png`}
                          width={150}
                          onClick={() => {
                            setEmoticon("angry");
                          }}
                        />
                        <div className={`text-xl font-bold text-black`}>
                          Marah
                        </div>
                      </div>
                    </div>
                    <div
                      className={`mx-8 my-5 flex flex-col justify-center items-center`}
                    >
                      <Input
                        label={"description"}
                        type={`text`}
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                      <Button
                        className={`mt-10`}
                        color={`primary`}
                        variant={`ghost`}
                        onClick={() => {
                          fetchData();
                        }}
                      >
                        Submit Data
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
          <div
            className={`col-span-1 mt-14 w-full rounded-2xl bg-white px-4 py-5`}
          >
            <div className={`flex flex-col justify-center items-center`}>
              <div className={`text-2xl font-bold text-black`}>
                Hasil Emoji Perasaan Anda Adalah
              </div>
              <div className={`flex flex-col justify-center items-center`}>
                {responseData && responseData.emoticon ? (
                  <div>
                    <Image
                      alt="Logo"
                      height={100}
                      src={`/icons/${responseData.emoticon}.png`}
                      width={150}
                    />
                    <div className="text-xl text-center font-bold text-black">
                      {getEmoticonLabel(responseData.emoticon)}
                    </div>
                  </div>
                ) : (
                  <div>Belum ada data</div>
                )}
              </div>
              <div className={`text-md my-5`}>
                {responseData && responseData.responseAi ? (
                  <div>
                    <div>{responseData.responseAi}</div>
                    <Button
                      className={`mt-4`}
                      color={`primary`}
                      variant={`ghost`}
                      onClick={() => {
                        //
                        postDataCurhat(responseData.responseAi);
                      }}
                    >
                      Curhat Dengan Ai Sekarang
                    </Button>
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
