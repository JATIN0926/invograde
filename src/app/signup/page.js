"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/firebase.js";

const SignUp = () => {
  const router = useRouter();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = async () => {
    const { username, email, password } = formData;

    if (!username) {
      toast.error("Please enter a username.");
      return;
    }
    if (!email) {
      toast.error("Please enter a email.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!password) {
      toast.error("Please enter a password.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long.");
      return;
    }

    let toastId;

    try {

      toastId = toast.loading("Creating your Account..");

      const res = await axiosInstance.post("/api/auth/register", {
        ...formData,
      });

      console.log("res.data", res.data);

      if (res.data.success) {
        toast.success("Account Created SuccessFully", {
          id: toastId,
        });
        dispatch(setUser(res.data.userData));
        router.push(redirectPath);
      } else {
        toast.error(
          res.data.message || "An error occurred. Please try again.",
          { id: toastId }
        );
        return;
      }
    } catch (err) {
      console.error(err);
      const errorMessage =
        err?.response?.data?.message ||
        err?.response?.data?.errors?.[0]?.msg ||
        "An error occurred. Please try again.";
      toast.error(errorMessage, { id: toastId });
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
    <div className="bg-white p-3 h-screen w-screen max-w-full flex items-center justify-center">
      <div className="w-full  h-full flex items-center justify-center gap-2">
        <div className="flex flex-col justify-center items-center w-[65%] h-full relative">
          <h1 className="absolute left-0 top-0 font-Outfit-Regular text-[1.1rem] tracking-[-0.4px] text-[#141520]">
            Invograde
          </h1>
          <div className="w-[55%] mt-7 h-full flex flex-col items-start justify-center gap-3 ">
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
                  Name <span className="text-red-600">*</span>
                </h3>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="border border-[#E3E3E3] rounded-lg w-full"
                />
              </div>
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
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className=" font-Outfit-Medium text-[0.9rem] tracking-[0.2px] text-white bg-[#301D7B] w-full p-2.5 cursor-pointer rounded-lg mt-4"
            >
              Create Account
            </button>
            <h1 className=" font-Outfit-Regular text-[0.9rem] leading-6">
              Already have an account?{" "}
              <span
                onClick={() => router.push("/login")}
                className=" font-Outfit-Medium hover:underline cursor-pointer"
              >
                {" "}
                Login Here{" "}
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

export default SignUp;
