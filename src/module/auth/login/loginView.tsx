import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import useLoginService from "@/src/module/auth/login/loginService";

export const LoginView = () => {
  const {
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
  } = useLoginService();

  return (
    <div
      className={`relative w-full h-auto`}
      style={{
        backgroundImage: `url('images/bg-image.png')`,
        backgroundSize: "cover", // Makes the image cover the entire div
        // backgroundPosition: "center", // Centers the image
        // backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        {/* Your login form or content */}
        <div className={`relative h-screen`}>
          <div
            className="absolute top-0 right-0 h-full w-full bg-gradient-to-r from-white/0 to-white"
            style={{ pointerEvents: "none" }}
          />
        </div>
        <div
          className={` h-screen flex flex-col justify-center items-center bg-white`}
        >
          <div>
            <Image
              alt={"Logo Sahabat"}
              height={100}
              src={`/images/logo-mental.png`}
              width={250}
            />
          </div>
          <div className={`w-2/4`}>
            <Input
              className={`my-4`}
              endContent={
                <Button
                  color={`primary`}
                  variant={`ghost`}
                  onClick={() => {
                    fetchDataEmail();
                  }}
                >
                  Check
                </Button>
              }
              label={`Email`}
              type={`text`}
              value={email}
              variant={`bordered`}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              className={`my-4 ${!hiddenPassword ? "" : "hidden"}`}
              label={`Kata Sandi`}
              type={`password`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Input
              className={`my-4 ${!hiddenOtp ? "" : "hidden"}`}
              label={`Otp Code`}
              type={`number`}
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
            <div className={`my-5 text-gray-500 font-bold`}>
              Belum Memiliki akun ? Silahkan{" "}
              <span className={`text-blueprimary`}>buat akun</span>
            </div>
            <Button
              className={`w-full ${!isHiddenButton ? "" : "hidden"}`}
              color={`primary`}
              variant={`solid`}
              onClick={() => {
                fetchDataPassword();
              }}
            >
              Masuk
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
