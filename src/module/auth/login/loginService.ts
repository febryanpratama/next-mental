"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation for app directory

import { fetchPassword, login } from "@/src/repository/auth/authRepository";

const useLoginService = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState<any>("");
  const [isHiddenButton, setIsHiddenButton] = useState<boolean>(true);
  const [hiddenOtp, setHiddenOtp] = useState<boolean>(true);
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter(); // Initialize useRouter

  const fetchDataEmail = async () => {
    const resp = await login(email);

    if (resp === null) {
      return null;
    }

    if (!resp.result.user.is_password) {
      setHiddenOtp(false);
      setHiddenPassword(true);
      setIsHiddenButton(false);
    } else {
      setHiddenPassword(false);
      setHiddenOtp(true);
      setIsHiddenButton(false);
    }
  };
  const fetchDataPassword = async () => {
    setIsLoading(true);
    // console.log(email, password, otp);
    const resp = await fetchPassword(email, password, Number(otp));

    if (!resp?.result.user.is_profile) {
      router.push("/mbti");
    } else {
      router.push("/home");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    fetchDataPassword,
    isLoading,
    setIsLoading,
    otp,
    setOtp,
    isHiddenButton,
    setIsHiddenButton,
    fetchDataEmail,
    hiddenOtp,
    hiddenPassword,
  };
};

export default useLoginService;
