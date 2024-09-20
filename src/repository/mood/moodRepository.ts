import { post } from "@/src/core/api/baseApi";
import { ConvertToModelMood, ModelMood } from "@/src/model/modelMood";

export const fetchPostMood = async (body: any): Promise<ModelMood | null> => {
  const resp = await post("/mood", {
    emoticon: body.emoticon,
    description: body.description,
    type: body.type,
  });

  console.log("Response Fetch Post Mood Repository", resp);
  if (resp === null) {
    return null;
  }

  return ConvertToModelMood.toModelMood(JSON.stringify(resp));
};
