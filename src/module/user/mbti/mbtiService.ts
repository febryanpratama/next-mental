import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { fetchProfileData } from "@/src/repository/profile/profileRepository";

const useMbtiService = () => {
  const [jenisKelamin, setJenisKelamin] = useState<string>("");
  const [nama, setNama] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pertanyaan1, setPertanyaan1] = useState<string>("");
  const [pertanyaan2, setPertanyaan2] = useState<string>("");
  const [pertanyaan3, setPertanyaan3] = useState<string>("");
  const [pertanyaan4, setPertanyaan4] = useState<string>("");
  const [pertanyaan5, setPertanyaan5] = useState<string>("");
  const [pertanyaan6, setPertanyaan6] = useState<string>("");
  const [pertanyaan7, setPertanyaan7] = useState<string>("");
  const [p1, setP1] = useState<string>(
    "Ketika Anda merasa lelah, apakah Anda lebih suka:",
  );
  const [p2, setP2] = useState<string>(
    "Ketika mempelajari sesuatu yang baru, apakah Anda lebih nyaman dengan informasi yang:",
  );
  const [p3, setP3] = useState<string>("Apakah Anda lebih fokus pada:");
  const [p4, setP4] = useState<string>(
    "Dalam membuat keputusan, apakah Anda lebih sering mempertimbangkan:",
  );
  const [p5, setP5] = useState<string>("Apakah Anda lebih menghargai:");
  const [p6, setP6] = useState<string>("Apakah Anda lebih nyaman ketika:");
  const [p7, setP7] = useState<string>(
    "Ketika bekerja pada proyek atau tugas, apakah Anda lebih sering:",
  );
  const [responseData, setResponseData] = useState<any | null>(null);
  const [submitHidden, setSubmitHidden] = useState<boolean>(false);
  const [homeHidden, setHomeHidden] = useState<boolean>(true);
  const router = useRouter();
  const fetchDataProfile = async () => {
    const promptAi = `${p1}${pertanyaan1},${p2}${pertanyaan2},${p3}${pertanyaan3},${p4}${pertanyaan4},${p5}${pertanyaan5},${p6}${pertanyaan6},${p7}${pertanyaan7}. berdasarkan data tersebut, tentukan kepribadian mbti saya`;

    console.log(promptAi);

    const reqBody = {
      nama: nama,
      gender: jenisKelamin,
      password: password,
      username: username,
      prompt: promptAi,
      foto: "",
    };

    const resp = await fetchProfileData(reqBody);

    if (resp === null) {
      return null;
    }

    setResponseData(resp.result);
    console.debug("FETCH" + resp.result);
    console.log("Response set:", resp);
    console.log("Response setRepsonse:", responseData);

    setSubmitHidden(true);
    setHomeHidden(false);
  };

  const goToHome = async () => {
    router.push("/home");
  };

  useEffect(() => {}, []);
  //
  // console.log(response);

  return {
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

    goToHome,
    submitHidden,
    homeHidden,
  };
};

export default useMbtiService;
