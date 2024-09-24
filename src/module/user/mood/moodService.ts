import { useState } from "react";
import { useRouter } from "next/navigation";

import { fetchPostMood } from "@/src/repository/mood/moodRepository";
import { ResultModelMood } from "@/src/model/modelMood";
import { fetchPostCurhat } from "@/src/repository/curhat/CurhatRepository";

enum EmoticonEnum {
  Indifferent = "indifferent",
  Confused = "confused",
  Happy = "happy",
  Sad = "sad",
  Angry = "angry",
}

interface EmoticonType {
  emote: EmoticonEnum;
}

enum TypeEnum {
  career = "career",
  love = "love",
  family = "family",
  friends = "friends",
}

interface TypeInterface {
  type: TypeEnum;
}
const useMoodService = () => {
  //
  const [emoticon, setEmoticon] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isGenerate, setIsGenerate] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<ResultModelMood | null>(
    null,
  );

  const router = useRouter();

  const fetchData = async () => {
    //
    setIsSubmit(true);
    const reqBody = {
      emoticon,
      description,
      type,
    };

    // console.log(reqBody);
    const resp = await fetchPostMood(reqBody);

    if (resp === null) {
      setIsSubmit(false);

      return null;
    }

    setResponseData(resp.result);
    setIsSubmit(false);
  };

  const postDataCurhat = async (prompt: any) => {
    setIsGenerate(true);
    const reqBody = {
      prompt: prompt,
      uuid: "",
    };

    const resp = await fetchPostCurhat(reqBody);

    if (resp === null) {
      setIsGenerate(false);

      return null;
    }

    router.push("/curhat");
    setIsGenerate(false);
  };

  return {
    emoticon,
    setEmoticon,
    description,
    setDescription,
    type,
    setType,
    fetchData,
    responseData,
    postDataCurhat,
    isSubmit,
    setIsSubmit,
    isGenerate,
    setIsGenerate,
  };
};

export default useMoodService;
