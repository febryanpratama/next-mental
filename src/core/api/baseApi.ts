import Cookies from "js-cookie";

import {
  deleteFetchData,
  getFetchData,
  getFetchDataOnly,
  patchFetchData,
  postFetchData,
  postFetchLogin,
  postFetchPassword,
  putFetchData,
  putFetchDataOnly,
} from "@/src/core/api/api";
import {
  callToastDone,
  callToastError,
  callToastLoading,
  callToastSuccess,
} from "@/src/components/toast/callToast";

export const post = async (path: string, body: Record<string, any>) => {
  const date = new Date();

  // callToastLoading(date.getTime().toString());
  const resp = await postFetchData(path, body);

  console.log("Response BaseApi", resp);

  // callToastDone(resp.message);

  if (resp.data === null) {
    callToastError(resp.message);

    return null;
  }
  callToastSuccess(resp.message);

  return resp.data;
};
export const postLogin = async (path: string, body: Record<string, any>) => {
  const date = new Date();

  // callToastLoading(date.getTime().toString());
  const resp = await postFetchLogin(path, body);

  callToastDone(resp.message);

  if (resp.data === null) {
    callToastError(resp.message);

    return null;
  }
  callToastSuccess(resp.message);

  return resp.data;
};
export const postPassword = async (path: string, body: Record<string, any>) => {
  const date = new Date();

  // callToastLoading(date.getTime().toString());
  const resp = await postFetchPassword(path, body);

  console.log("Reponse Login", resp.data);
  console.log("Reponse Login", resp.data.result);
  console.log("Reponse Login", resp.data.result.token);
  if (resp.data.result.token !== "") {
    console.log("True");
    console.log("resp.data.result.token");
    Cookies.set("token", resp.data.result.token, {
      expires: 1, // Cookie berfungsi selama 1 hari
      secure: process.env.NODE_ENV === "production", // Hanya untuk HTTPS di produksi
      sameSite: "Strict", // Perlindungan CSRF
    });
  }

  callToastDone(resp.message);

  if (resp.data === null) {
    callToastError(resp.message);

    return null;
  }
  callToastSuccess(resp.message);

  return resp.data;
};

export const get = async (path: string) => {
  const date = new Date();

  // callToastLoading(date.getTime().toString());
  const resp = await getFetchData(path, {});

  // console.log("response", resp);
  if (resp.data === null) {
    callToastError(resp.message);

    return null;
  }
  // callToastSuccess(resp.data.message);

  return resp;
};

export const patch = async (path: string, body: Record<string, any>) => {
  const date = new Date();

  callToastLoading(date.getTime().toString());
  const resp = await patchFetchData(path, body);

  callToastDone(date.getTime().toString());

  if (resp.data === null) {
    callToastError(resp.message);

    return null;
  }
  callToastSuccess(resp.message);

  return resp.data;
};

export const put = async (path: string, body: Record<string, any>) => {
  const date = new Date();

  callToastLoading(date.getTime().toString());
  const resp = await putFetchData(path, body);

  callToastDone(date.getTime().toString());

  if (resp.data === null) {
    callToastError(resp.message);

    return null;
  }
  callToastSuccess(resp.message);

  return resp.data;
};

export const deleted = async (path: string, body: Record<string, any>) => {
  const date = new Date();

  callToastLoading(date.getTime().toString());
  const resp = await deleteFetchData(path, body);

  callToastDone(date.getTime().toString());

  if (resp.data === null) {
    callToastError(resp.message);

    return null;
  }
  callToastSuccess(resp.message);

  return resp.data;
};

export const getOnly = async (path: string, body: Record<string, any>) => {
  //
  const resp = await getFetchDataOnly(path, body);

  if (resp.data === null) {
    callToastError("Network Error");

    return null;
  }

  return resp.data;
};

export const putOnly = async (path: string, body: Record<string, any>) => {
  const resp = await putFetchDataOnly(path, body);

  if (resp.data === null) {
    callToastError("Error Put Data");

    return null;
  }

  callToastSuccess("Sukses Get New Token");

  return resp.data;
};
