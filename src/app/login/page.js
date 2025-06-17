"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";
import { toast } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ emailOrPhone: "", password: "" });
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";

  const imgs = [
    "/icons/google.png",
    "/icons/twitter.png",
    "/icons/facebook.png",
    "/icons/linkedin.png",
  ];

  const handleSubmit = async () => {
    const loading = toast.loading("Logging in...");
    try {
      console.log(formData);
      const response = await axiosInstance.post("/api/auth/login", formData);

      if (response.data.success) {
        toast.success("Login successful!", { id: loading });

        console.log("response", response.data.user);
        if (!user) {
          dispatch(setUser(response.data.user));
        }

        router.push(redirectPath);
      } else {
        toast.error(response.data.message || "Login failed", { id: loading });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error.response?.data?.message || "Something went wrong during login",
        { id: loading }
      );
    }
  };

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
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    emailOrPhone: e.target.value,
                  }))
                }
                className="w-full p-2.5 bg-white border-[1.5px] border-[#BCBCBC] placeholder:text-[#C3C3C3] rounded-md text-[0.9rem]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <div className="w-[65%] flex flex-col items-start justify-center gap-1.5 relative">
              <h1 className="text-[#141520] font-bold self-start w-[65%]">
                Password
              </h1>
              <input
                type={passwordVisible ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
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
            <button
              className="bg-[#3A3084] p-2 px-8 text-base rounded-md text-white font-semibold"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>

          <button
            className="p-2.5 px-12 text-base font-normal rounded-full border-[1px] border-black text-[#787878]"
            type="submit"
          >
            Don’t have an account?{" "}
            <Link href={`/signup`}>
              {" "}
              <span className="font-bold hover:underline">Register</span>{" "}
            </Link>
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
