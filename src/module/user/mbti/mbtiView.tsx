"use client";
import Image from "next/image";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { Radio, RadioGroup } from "@nextui-org/radio";
import React from "react";

import useMbtiService from "@/src/module/user/mbti/mbtiService";

export default function MbtiView() {
  const {
    jenisKelamin,
    setJenisKelamin,
    nama,
    setNama,
    username,
    setUsername,
    password,
    setPassword,
    responseData,
    fetchDataProfile,
    goToHome,
    submitHidden,
    homeHidden,
    isLoadingSubmit,

    pertanyaan1,
    setPertanyaan1,
    pertanyaan2,
    setPertanyaan2,
    pertanyaan3,
    setPertanyaan3,
    pertanyaan4,
    setPertanyaan4,
    pertanyaan5,
    setPertanyaan5,
    pertanyaan6,
    setPertanyaan6,
    pertanyaan7,
    setPertanyaan7,
  } = useMbtiService();
  const gender = [
    { key: "laki", label: "Laki-Laki" },
    { key: "perempuan", label: "Perempuan" },
  ];

  // const responseData = {
  //   id: 6,
  //   userId: 2,
  //   nama: "febryan",
  //   gender: "laki",
  //   username: "febryanp",
  //   foto: null,
  //   description:
  //     'Berdasarkan jawaban yang Anda sediakan, kita dapat membuat kesimpulan mengenai tipe kepribadian MBTI Anda sejauh berikut:\n\n1. Anda lebih suka menghabiskan waktu dengan orang lain untuk mendapatkan energi. Ini menunjukkan ciri-ciri Ekstrovert (E).\n   \n2. Anda lebih nyaman dengan informasi yang nyata, praktis, dan dapat diterapkan langsung. Ini menunjukkan ciri-ciri Sensing (S).\n   \n3. Anda memiliki fokus pada pola, makna tersembunyi, atau kemungkinan masa depan. Ini menunjukkan ciri-ciri iNtuition (N), yang bertentangan dengan jawaban kedua. Namun, karena jawaban ini menyimpang dan Anda memberi jawaban S untuk pertanyaan kedua, kami mungkin memerlukan informasi lebih lanjut untuk menentukan secara akurat aspek ini.\n\n4. Dalam membuat keputusan, Anda lebih menekankan pada logika, analisis, dan keadilan, yang menunjukkan ciri-ciri Thinking (T).\n\n5. Anda lebih menghargai objektivitas dan kebenaran, yang mendukung indikasi tipe Thinking (T).\n\n6. Anda lebih nyaman ketika tetap fleksibel dan terbuka terhadap kemungkinan perubahan, menunjukkan ciri-ciri Perceiving (P).\n\n7. Anda cenderung menyelesaikan pekerjaan mendekati batas waktu karena lebih suka fleksibilitas, yang kembali mendukung Perceiving (P).\n\nBerdasarkan informasi ini, jawaban yang tampak paling cocok untuk Anda adalah ESTP atau ENTP, tergantung pada bagaimana kita mencermati poin ke-3. Namun, karena dominasi jawaban Anda mengarah pada Sensing, jawaban Anda sebagian besar konsisten dengan tipe kepribadian ESTP, yang dikenal dengan fitur Ekstrovert, Sensing, Thinking, dan Perceiving. Namun, ada konflik kecil mengenai pilihan Sensing (S) atau iNtuition (N) yang mungkin memerlukan klarifikasi lebih lanjut.\n\nTipe ESTP dikenal sebagai "Pengusaha"; mereka enerjik, taktis, dan sangat adaptif, menyukai kebebasan, dan sering mencari kegembiraan dalam situasi sosial. Mereka ahli dalam memecahkan masalah praktis secara spontan. \n\nPerlu diingat bahwa MBTI adalah salah satu cara untuk menjelajahi kepribadian dan kerumitannya dan tidak sepenuhnya menggambarkan seluruh spektrum karakteristik individu.',
  //   createdAt: "2024-09-19T15:14:46.499Z",
  //   updatedAt: "2024-09-19T15:14:46.499Z",
  //   deletedAt: null,
  // };

  return (
    <div>
      <div
        className={`flex w-full bg-secondary flex-col justify-center items-center`}
      >
        <div
          className={`container flex justify-center items-center h-auto md:h-56`}
        >
          <div className={`w-full relative`}>
            {/* Bagian Judul */}
            <div
              className={`relative py-8 md:absolute md:inset-x-0 md:-bottom-20`}
            >
              <div
                className={`text-3xl md:text-5xl font-bold text-primary text-center mb-10 md:mb-20`}
              >
                Lengkapi Data Anda
              </div>
            </div>

            {/* Bagian Card */}
            <div className={`relative py-8 md:absolute md:inset-x-0 md:top-14`}>
              <div
                className={`flex flex-col md:flex-row justify-center md:justify-evenly gap-y-4 md:gap-x-10`}
              >
                <div
                  className={`w-full md:w-1/5 h-32 flex flex-col bg-purple rounded-3xl px-5 py-3`}
                >
                  <div
                    className={`rounded-xl flex justify-center items-center bg-white w-10`}
                  >
                    <Image
                      alt={`Icon`}
                      height={24}
                      src={"/images/humble-icons.png"}
                      width={24}
                    />
                  </div>
                  <div className={`flex justify-center items-center mt-2`}>
                    <div
                      className={`text-xl md:text-2xl text-center text-white font-semibold`}
                    >
                      Jawablah pertanyaan secara jujur
                    </div>
                  </div>
                </div>

                <div
                  className={`w-full md:w-1/5 h-32 flex flex-col bg-purple rounded-3xl px-5 py-3`}
                >
                  <div
                    className={`rounded-xl flex justify-center items-center bg-white w-10`}
                  >
                    <Image
                      alt={`Icon`}
                      height={24}
                      src={"/images/person-icons.png"}
                      width={24}
                    />
                  </div>
                  <div className={`flex justify-center items-center mt-2`}>
                    <div
                      className={`text-xl md:text-2xl text-center text-white font-semibold`}
                    >
                      Pelajari tipe kepribadian anda
                    </div>
                  </div>
                </div>

                <div
                  className={`w-full md:w-1/5 h-32 flex flex-col bg-purple rounded-3xl px-5 py-3`}
                >
                  <div
                    className={`rounded-xl flex justify-center items-center bg-white w-10`}
                  >
                    <Image
                      alt={`Icon`}
                      height={24}
                      src={"/images/player-icons.png"}
                      width={24}
                    />
                  </div>
                  <div className={`flex justify-center items-center mt-2`}>
                    <div
                      className={`text-xl md:text-2xl text-center text-white font-semibold`}
                    >
                      Menjadi pribadi yang anda inginkan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex flex-col justify-center items-center mt-32`}>
        <div className={`container grid grid-cols-1 md:grid-cols-4 gap-4`}>
          <div className={`col-span-3 bg-whitesmoke flex flex-col px-10 py-8`}>
            <div>
              <div className={`text-start text-2xl`}>Data Profil</div>
              <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 mt-4`}>
                <Select
                  className="max-w-xs bg-white"
                  label="Pilih Jenis Kelamin"
                  size="sm"
                  value={jenisKelamin} // Bind value to the selected state
                  onChange={(e) => setJenisKelamin(e.target.value)} // Handle selection
                >
                  {gender.map((item: any) => (
                    <SelectItem key={item.key} value={item.key}>
                      {item.label}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  label={`Nama`}
                  size={`sm`}
                  type={`text`}
                  value={nama}
                  onChange={(e) => {
                    setNama(e.target.value);
                  }}
                />
                <Input
                  label={`Username`}
                  size={`sm`}
                  type={`text`}
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <Input
                  label={`password`}
                  size={`sm`}
                  type={`password`}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Input size={`lg`} type={`file`} />
              </div>
              <hr className={`border-gray-500 mt-10`} />
            </div>
            <div className={`text-2xl mt-10`}>
              <div className={`text-start text-2xl font-bold`}>
                Test Kepribadian
              </div>

              {/* Soal */}
              {/*1*/}
              <div className={`mt-4`}>
                <div className={`text-2xl text-primary font-bold`}>
                  Ekstroversi (E) vs. Introversi (I)
                </div>
                <div className={`text-xl text-black`}>
                  <RadioGroup
                    className={`mt-2 ml-2`}
                    isRequired={true}
                    label="1. Ketika Anda merasa lelah, apakah Anda lebih suka:"
                    value={pertanyaan1}
                    onChange={(e) => {
                      setPertanyaan1(e.target.value);
                    }}
                  >
                    <Radio
                      className={`ml-5`}
                      value="Menghabiskan waktu dengan orang lain untuk mendapatkan energi?"
                    >
                      Menghabiskan waktu dengan orang lain untuk mendapatkan
                      energi?
                    </Radio>
                    <Radio
                      className={`ml-5`}
                      value="Menghabiskan waktu sendiri atau dalam kelompok kecil untuk mengisi ulang energi"
                    >
                      Menghabiskan waktu sendiri atau dalam kelompok kecil untuk
                      mengisi ulang energi
                    </Radio>
                  </RadioGroup>
                </div>
              </div>
              {/*2*/}
              <div className={`mt-4`}>
                <div className={`text-2xl text-primary font-bold`}>
                  Sensing (S) vs. Intuition (N)
                </div>
                <div className={`text-xl text-black`}>
                  <RadioGroup
                    className={`mt-2 ml-2`}
                    isRequired={true}
                    label="1. Ketika mempelajari sesuatu yang baru, apakah Anda lebih nyaman dengan informasi yang:"
                    value={pertanyaan2}
                    onChange={(e) => {
                      setPertanyaan2(e.target.value);
                    }}
                  >
                    <Radio
                      className={`ml-5`}
                      value="Nyata, praktis, dan dapat diterapkan langsung"
                    >
                      Nyata, praktis, dan dapat diterapkan langsung
                    </Radio>
                    <Radio
                      className={`ml-5`}
                      value="Berbasis pada ide abstrak, kemungkinan, dan gambaran besar"
                    >
                      Berbasis pada ide abstrak, kemungkinan, dan gambaran besar
                    </Radio>
                  </RadioGroup>
                  <RadioGroup
                    className={`mt-2 ml-2`}
                    isRequired={true}
                    label="2. Apakah Anda lebih fokus pada:"
                    value={pertanyaan3}
                    onChange={(e) => {
                      setPertanyaan3(e.target.value);
                    }}
                  >
                    <Radio
                      className={`ml-5`}
                      value="Fakta-fakta konkret dan detail dari suatu hal"
                    >
                      Fakta-fakta konkret dan detail dari suatu hal
                    </Radio>
                    <Radio
                      className={`ml-5`}
                      value="Pola, makna tersembunyi, atau kemungkinan masa depan"
                    >
                      Pola, makna tersembunyi, atau kemungkinan masa depan
                    </Radio>
                  </RadioGroup>
                </div>
              </div>
              {/*3*/}
              <div className={`mt-4`}>
                <div className={`text-2xl text-primary font-bold`}>
                  Thinking (T) vs. Feeling (F)
                </div>
                <div className={`text-xl text-black`}>
                  <RadioGroup
                    className={`mt-2 ml-2`}
                    isRequired={true}
                    label="1. Dalam membuat keputusan, apakah Anda lebih sering mempertimbangkan:"
                    value={pertanyaan4}
                    onChange={(e) => {
                      setPertanyaan4(e.target.value);
                    }}
                  >
                    <Radio
                      className={`ml-5`}
                      value="Logika, analisis, dan keadilan"
                    >
                      Logika, analisis, dan keadilan
                    </Radio>
                    <Radio
                      className={`ml-5`}
                      value="Nilai-nilai pribadi, dampak emosional, dan perasaan orang lain"
                    >
                      Nilai-nilai pribadi, dampak emosional, dan perasaan orang
                      lain
                    </Radio>
                  </RadioGroup>
                  <RadioGroup
                    className={`mt-2 ml-2`}
                    isRequired={true}
                    label="2. Apakah Anda lebih menghargai:"
                    value={pertanyaan5}
                    onChange={(e) => {
                      setPertanyaan5(e.target.value);
                    }}
                  >
                    <Radio
                      className={`ml-5`}
                      value="Objektivitas dan kebenaran"
                    >
                      Objektivitas dan kebenaran
                    </Radio>
                    <Radio
                      className={`ml-5`}
                      value="Harmoni dan menjaga hubungan baik dengan orang lain"
                    >
                      Harmoni dan menjaga hubungan baik dengan orang lain
                    </Radio>
                  </RadioGroup>
                </div>
              </div>
              {/*4*/}
              <div className={`mt-4`}>
                <div className={`text-2xl text-primary font-bold`}>
                  Judging (J) vs. Perceiving (P)
                </div>
                <div className={`text-xl text-black`}>
                  <RadioGroup
                    className={`mt-2 ml-2`}
                    isRequired={true}
                    label="1. Apakah Anda lebih nyaman ketika:"
                    value={pertanyaan6}
                    onChange={(e) => {
                      setPertanyaan6(e.target.value);
                    }}
                  >
                    <Radio
                      className={`ml-5`}
                      value="Anda memiliki rencana yang jelas dan terstruktur untuk masa depan"
                    >
                      Anda memiliki rencana yang jelas dan terstruktur untuk
                      masa depan
                    </Radio>
                    <Radio
                      className={`ml-5`}
                      value="Anda tetap fleksibel dan terbuka terhadap kemungkinan perubahan"
                    >
                      Anda tetap fleksibel dan terbuka terhadap kemungkinan
                      perubahan
                    </Radio>
                  </RadioGroup>
                  <RadioGroup
                    className={`mt-2 ml-2`}
                    isRequired={true}
                    label="2. Ketika bekerja pada proyek atau tugas, apakah Anda lebih sering:"
                    value={pertanyaan7}
                    onChange={(e) => {
                      setPertanyaan7(e.target.value);
                    }}
                  >
                    <Radio
                      className={`ml-5`}
                      value="Menyelesaikan pekerjaan lebih awal dengan teratur"
                    >
                      Menyelesaikan pekerjaan lebih awal dengan teratur
                    </Radio>
                    <Radio
                      className={`ml-5`}
                      value="Menyelesaikan pekerjaan mendekati batas waktu karena lebih suka fleksibilitas"
                    >
                      Menyelesaikan pekerjaan mendekati batas waktu karena lebih
                      suka fleksibilitas
                    </Radio>
                  </RadioGroup>
                </div>
              </div>
            </div>
            <div
              className={`mt-5 flex justify-end ${submitHidden ? "hidden" : ""}`}
            >
              <Button
                color={`primary`}
                isDisabled={isLoadingSubmit}
                isLoading={isLoadingSubmit}
                type={`button`}
                variant={`ghost`}
                onClick={() => {
                  fetchDataProfile();
                }}
              >
                Submit Data
              </Button>
            </div>
            <div
              className={`mt-5 flex justify-end ${homeHidden ? "hidden" : ""}`}
            >
              <Button
                color={`primary`}
                type={`button`}
                variant={`ghost`}
                onClick={() => {
                  goToHome();
                }}
              >
                Pergi ke Home
              </Button>
            </div>
          </div>
          <div className={`col-span-1 bg-white flex flex-col px-10 py-8`}>
            <div
              className={`flex flex-col justify-center items-center px-5 h-auto bg-whitesmoke`}
            >
              <div className={`text-2xl text-primary mt-8`}>
                Hasil Test Anda adalah :
              </div>
              <div className={`text-md mt-4 text-justify`}>
                {responseData && responseData.description ? (
                  responseData.description
                    .split("\n\n")
                    .map((paragraph: string, index: number) => (
                      <p key={index}>
                        {paragraph.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    ))
                ) : (
                  <div>Data Belum Tersedia</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
