"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";
import { toast } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/firebase.js";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleGoogleLogin = async () => {
    const loading = toast.loading("Logging in with Google...");
    try {
      const result = await signInWithPopup(auth, provider);
      const googleUser = result.user;

      const googleData = {
        name: googleUser.displayName,
        email: googleUser.email,
        photoURL: googleUser.photoURL,
      };

      const res = await axiosInstance.post(
        "/api/auth/google-login",
        googleData
      );

      if (res.data.success) {
        toast.success("Google login successful!", { id: loading });

        if (!user) {
          dispatch(setUser(res.data.user));
        }

        router.push(redirectPath);
      } else {
        toast.error(res.data.message || "Google login failed", { id: loading });
      }
    } catch (error) {
      console.error("Google sign-in error", error);
      toast.error("Google login failed.", { id: loading });
    }
  };

  return (
    // backup ref
    // <div className="bg-login-bg bg-cover bg-center h-screen -z-10 w-screen max-w-full flex items-center justify-center">
    //   <div className=" shadow-[#535353] rounded-l-xl shadow-md flex items-center justify-center h-[89vh] w-[80vw]">
    //     <div className="w-1/2 p-6 text-[#787878] bg-white flex flex-col items-center justify-center gap-6">
    //       <div className=" flex w-full flex-col items-center justify-center gap-2 relative">
    //         <div className="w-[65%] flex flex-col items-start justify-center gap-1.5">
    //           <h1 className="text-[#141520] font-bold">
    //             Email or Phone Number
    //           </h1>
    //           <input
    //             type="email"
    //             value={formData.email}
    //             onChange={(e) =>
    //               setFormData((prev) => ({
    //                 ...prev,
    //                 emailOrPhone: e.target.value,
    //               }))
    //             }
    //             className="w-full p-2.5 bg-white border-[1.5px] border-[#BCBCBC] placeholder:text-[#C3C3C3] rounded-md text-[0.9rem]"
    //           />
    //         </div>
    //       </div>
    //       <div className="w-full flex flex-col items-center justify-center gap-2">
    //         <div className="w-[65%] flex flex-col items-start justify-center gap-1.5 relative">
    //           <h1 className="text-[#141520] font-bold self-start w-[65%]">
    //             Password
    //           </h1>
    //           <input
    //             type={passwordVisible ? "text" : "password"}
    //             value={formData.password}
    //             onChange={(e) =>
    //               setFormData((prev) => ({ ...prev, password: e.target.value }))
    //             }
    //             className="w-full p-2.5 bg-white border-[1.5px] border-[#BCBCBC] rounded-md text-[0.9rem]"
    //           />
    //           <div
    //             className="absolute bottom-[38%] right-[5%] text-[#787878] text-[0.9rem] cursor-pointer"
    //             onClick={() => setPasswordVisible(!passwordVisible)}
    //           >
    //             {passwordVisible ? "Hide" : "Show"}
    //           </div>
    //           <p className="text-[#005DA6] text-[0.9rem] text-start hover:underline cursor-pointer">
    //             Forgot Password?
    //           </p>
    //         </div>
    //         <p>or</p>
    //       </div>

    //       <div className="flex flex-col items-center justify-center gap-3">
    //         <p className=" text-[#787878] text-[0.82rem]">
    //           Login using a social account
    //         </p>
    //         <div
    //           className="flex items-center justify-center w-full cursor-pointer"
    //           onClick={handleGoogleLogin}
    //         >
    //           <Image src="/icons/google.png" alt="img" width={30} height={30} />
    //         </div>
    //         <button
    //           className="bg-[#3A3084] p-2 px-8 text-base rounded-md text-white font-semibold"
    //           type="submit"
    //           onClick={handleSubmit}
    //         >
    //           Login
    //         </button>
    //       </div>

    //       <button
    //         className="p-2.5 px-12 text-base font-normal rounded-full border-[1px] border-black text-[#787878]"
    //         type="submit"
    //       >
    //         Don’t have an account?{" "}
    //         <Link href={`/signup`}>
    //           {" "}
    //           <span className="font-bold hover:underline">Register</span>{" "}
    //         </Link>
    //       </button>
    //     </div>
    //     <div className="w-1/2 relative h-full">
    //       <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full">
    //         <div className="flex flex-col items-center justify-center gap-4 text-white w-full px-6">
    //           <h2 className="text-3xl font-ReemKufiFun-Regular font-light drop-shadow-md drop-shadow-black">
    //             Welcome to
    //           </h2>
    //           <h1 className="text-7xl font-ReemKufiFun-Medium drop-shadow-2xl drop-shadow-black">
    //             Invograde
    //           </h1>

    //           <p className="text-[1.13rem] text-center">
    //             Connect, inspire, and collaborate with fellow creatives and
    //             professionals across various industries.
    //           </p>
    //         </div>
    //       </div>
    //       <Image src="/images/invograde.png" fill alt="invograde" />
    //     </div>
    //   </div>
    // </div>

    <div className="bg-white p-3 h-screen w-screen max-w-full flex items-center justify-center">
      <div className="w-full  h-full flex items-center justify-center gap-2">
        <div className="flex flex-col justify-center items-center w-[65%] h-full relative">
          <h1 className="absolute left-0 top-0 font-Outfit-Regular text-[1.1rem] tracking-[-0.4px] text-[#141520]">
            Invograde
          </h1>
          <div className="w-[55%] mt-7 h-[92%] flex flex-col items-start justify-start gap-3 ">
            <div className="flex flex-col gap-3 items-start justify-center w-full">
              <h1 className=" font-Outfit-Medium text-[2.5rem] text-[#141520] leading-10">
                Keep Your Portfolio Game Strong
              </h1>
              <p className=" font-Outfit-Regular text-[0.9rem] text-[#666666]">
                Sign up and get a personal account for free
              </p>
              <button
                onClick={handleGoogleLogin}
                className="w-full rounded-lg p-2.5 bg-white border border-[#E3E3E3] flex items-center justify-center gap-2"
              >
                <Image
                  src="/icons/google.png"
                  alt="img"
                  width={20}
                  height={20}
                />
                <h3 className="text-[#141520] text-[0.8rem] tracking-[0.24px]">
                  Sign in with Google
                </h3>
              </button>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="w-[47%] bg-[#666666] h-[0.09rem]"></div>
              <p className="text-[#666666] font-Outfit-Regular text-[0.9rem]">
                or
              </p>
              <div className="w-[47%] bg-[#666666] h-[0.09rem]"></div>
            </div>
            <div className="flex flex-col w-full items-center justify-center gap-4 text-[#141520]">
              <div className="flex flex-col gap-2 items-start justify-center w-full">
                <h3 className=" font-Outfit-Regular text-[0.9rem] tracking-[0.2px]">
                  Email <span className="text-red-600">*</span>
                </h3>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-[#E3E3E3] rounded-lg w-full"
                />
              </div>
              <div className="flex flex-col gap-2 items-start justify-center w-full">
                <h3 className=" font-Outfit-Regular text-[0.9rem] tracking-[0.2px]">
                  Password <span className="text-red-600">*</span>
                </h3>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border border-[#E3E3E3] rounded-lg w-full"
                />
                <h3 className=" font-Outfit-Medium text-[0.8rem] tracking-[0.2px]">
                  Forgot Password?
                </h3>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className=" font-Outfit-Medium text-[0.9rem] tracking-[0.2px] text-white bg-[#301D7B] w-full p-2.5 cursor-pointer rounded-lg mt-4"
            >
              Log in to your Account
            </button>
            <h1 className=" font-Outfit-Regular text-[0.9rem] leading-6">
              Don’t have an account?
              <span
                onClick={() => router.push("/signup")}
                className=" font-Outfit-Medium hover:underline cursor-pointer"
              >
                {" "}
                Create Now{" "}
              </span>
            </h1>
          </div>
        </div>
        <div className="w-[35%] h-full relative">
          <Image src="/images/auth_pages_img_.png" fill alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
