"use client";
import Image from "next/image";
import { useState } from "react";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const imgs = [
    "/icons/google.png",
    "/icons/twitter.png",
    "/icons/facebook.png",
    "/icons/linkedin.png",
  ];

  return (
    <div className="bg-login-bg bg-cover bg-center h-screen -z-10 w-screen max-w-full flex items-center justify-center">
      <div className=" shadow-[#535353] rounded-l-xl shadow-md flex items-center justify-center h-[89vh] w-[80vw]">
        <div className="w-1/2 p-6 text-[#787878] bg-white flex flex-col items-center justify-center gap-6">
          <div className=" flex w-full flex-col items-center justify-center gap-2 relative">
            <div className="w-[65%] flex flex-col items-start justify-center gap-1.5">
              <h1 className="text-[#141520] font-bold">
                Email or Phone Number
              </h1>
              <input
                type="email"
                name=""
                id=""
                className="w-full p-2.5 bg-white border-[1.5px] border-[#BCBCBC] placeholder:text-[#C3C3C3] rounded-md text-[0.9rem]"
              />
            </div>
            <div className="flex items-center justify-center gap-2 absolute left-[20%] top-[50%]">
              <Image src="/icons/india.png" alt="img" width={30} height={30} />
              <Image src="/icons/Arrow.png" alt="img" width={10} height={10} />
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <div className="w-[65%] flex flex-col items-start justify-center gap-1.5 relative">
              <h1 className="text-[#141520] font-bold self-start w-[65%]">
                Password
              </h1>
              <input
                type={passwordVisible ? "text" : "password"}
                name=""
                id=""
                className="w-full p-2.5 bg-white border-[1.5px] border-[#BCBCBC] rounded-md text-[0.9rem]"
              />
              <div
                className="absolute bottom-[38%] right-[5%] text-[#787878] text-[0.9rem] cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? "Hide" : "Show"}
              </div>
              <p className="text-[#005DA6] text-[0.9rem] text-start hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>
            <p>or</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <p className=" text-[#787878] text-[0.82rem]">
              Login using a social account
            </p>
            <div className="flex items-center justify-between w-full cursor-pointer">
              {imgs.map((img, i) => (
                <Image key={i} src={img} alt="img" width={30} height={30} />
              ))}
            </div>
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="h-5 w-5 border-[#CFCFCF] border-[1.5px]"
              />
              <p className="text-[0.78rem] text-[#787878]">Keep me logged in</p>
            </div>
            <button
              className="bg-[#3A3084] p-2 px-8 text-base rounded-md text-white font-semibold"
              type="submit"
            >
              Login
            </button>
          </div>

          <button
            className="p-2.5 px-12 text-base font-normal rounded-full border-[1px] border-black text-[#787878]"
            type="submit"
          >
            Don’t have an account? <span className="font-bold">Register</span>
          </button>
        </div>
        <div className="w-1/2 relative h-full">
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full">
            <div className="flex flex-col items-center justify-center gap-4 text-white w-full px-6">
              <h2 className="text-3xl font-ReemKufiFun-Regular font-light drop-shadow-md drop-shadow-black">
                Welcome to
              </h2>
              <h1 className="text-7xl font-ReemKufiFun-Medium drop-shadow-2xl drop-shadow-black">
                Invograde
              </h1>

              <p className="text-[1.13rem] text-center">
                Connect, inspire, and collaborate with fellow creatives and
                professionals across various industries.
              </p>
            </div>
          </div>
          <Image src="/images/invograde.png" fill alt="invograde" />
        </div>
      </div>
    </div>
  );
};

export default Login;
