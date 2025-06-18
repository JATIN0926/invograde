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

const CustomSelect = ({ options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="p-3 bg-white border-[1.5px] border-[#BCBCBC] font-semibold cursor-pointer text-[#787878]"
        onClick={() => setIsOpen(!isOpen)}
      >
        I am a{" "}
        <span className="text-[#094480] font-bold">{selected || ""}</span>
      </div>
      {isOpen && (
        <div className="absolute w-full bg-white border-[1.5px] border-[#BCBCBC] mt-1 z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-3 group hover:bg-blue-900 font-bold cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              <span className="text-[#787878] group-hover:text-white">
                {option}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SignUp = () => {
  const router = useRouter();
  const [next, setNext] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";
  const imgs = [""];
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    username: "",
    career: "",
  });

  const handleNext = () => {
    if (!formData.emailOrPhone || !formData.password) {
      toast.error("Please fill in all fields.");
      return;
    }
    setNext(true);
  };

  const handleGetStarted = async () => {
    const { username, career, emailOrPhone, password } = formData;

    if (!username) {
      toast.error("Please enter a username.");
      return;
    }
    if (!career) {
      toast.error("Please select your career.");
      return;
    }

    let toastId; // to reference and update the loading toast

    try {
      console.log("formdata", formData);

      // Show loading toast and store the ID
      toastId = toast.loading("Processing your request..");

      const res = await axiosInstance.post("/api/auth/register", {
        ...formData,
      });

      console.log("res.data", res.data);

      toast.success("Verification email sent!", {
        id: toastId,
      });

      dispatch(setUser(res.data.userData));
      router.push("/verifymail");
    } catch (err) {
      console.error(err);

      // Update loading toast to error
      toast.error("An error occurred. Please try again.", {
        id: toastId,
      });
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
    <div className="bg-login-bg bg-cover bg-center h-screen -z-10 w-screen max-w-full flex items-center justify-center">
      <div className="shadow-[#535353] rounded-l-xl shadow-md flex items-center justify-center h-[89vh] w-[80vw]">
        <div className="w-1/2 p-6 text-[#787878] bg-white flex flex-col items-center justify-center gap-6">
          {next ? (
            <>
              <div className="w-[65%] flex flex-col items-start justify-center gap-2 relative">
                <h1 className="text-[#141520] font-bold">Create a username</h1>
                <input
                  name="username"
                  type="text"
                  className="w-full p-3 bg-white border-[1.5px] border-[#BCBCBC]"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="w-[65%] flex flex-col items-start justify-center gap-2">
                <h1 className="text-[#141520] font-bold">
                  Choose your career to Get Started!
                </h1>
                <CustomSelect
                  options={["Designer", "Developer"]}
                  selected={formData.career}
                  onChange={(option) =>
                    setFormData((prev) => ({ ...prev, career: option }))
                  }
                />
              </div>
              <p className="w-[60%] text-center font-IBMPlexSans-Regular text-[0.81rem]">
                By Registering you confirm that you accept the{" "}
                <span className="text-[#457FCC]">Terms of Service</span> and the{" "}
                <span className="text-[#457FCC]">Privacy Policy</span>
              </p>
              <button
                className="bg-[#457FCC] p-2 px-8 text-base rounded-md text-white font-semibold"
                type="submit"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </>
          ) : (
            <>
              <div className="flex w-full flex-col items-center justify-center gap-2 relative">
                <div className="w-[65%] flex flex-col items-start justify-center gap-1.5">
                  <h1 className="text-[#141520] font-bold">Email</h1>
                  <div className="relative w-full">
                    <input
                      name="emailOrPhone"
                      type="text"
                      className="w-full p-2.5 bg-white border-[1.5px] border-[#BCBCBC] placeholder:text-[#C3C3C3] rounded-md text-[0.9rem]"
                      value={formData.emailOrPhone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-2">
                <div className="w-[65%] flex flex-col items-start justify-center gap-1.5 relative">
                  <h1 className="text-[#141520] font-bold self-start w-[65%]">
                    Create Password
                  </h1>
                  <input
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="At least 6 characters"
                    className="w-full p-2.5 bg-white border-[1.5px] border-[#BCBCBC] placeholder:text-[#C3C3C3] rounded-md text-[0.9rem]"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div
                    className="absolute bottom-[15%] right-[5%] text-[#787878] text-[0.9rem] cursor-pointer"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? "Hide" : "Show"}
                  </div>
                </div>
                <p className="w-[60%] text-center font-IBMPlexSans-Regular text-[0.81rem]">
                  By Registering you confirm that you accept the{" "}
                  <span className="text-[#457FCC]">Terms of Service</span> and
                  the <span className="text-[#457FCC]">Privacy Policy</span>
                </p>
                <button
                  className="bg-[#3A3084] p-2 px-8 text-base rounded-md text-white font-semibold"
                  type="submit"
                  onClick={handleNext}
                >
                  Confirm
                </button>
              </div>
            </>
          )}

          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-[#787878] text-[0.82rem]">
              Login using a social account
            </p>
            <div
              className="flex items-center justify-center w-full cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <Image src="/icons/google.png" alt="img" width={30} height={30} />
            </div>
          </div>
          <button
            className="p-2.5 px-12 text-base font-normal rounded-full border-[1px] border-black text-[#787878]"
            type="button"
            onClick={() => router.push("/login")}
          >
            Already a User?{" "}
            <span className="font-bold hover:underline cursor-pointer">
              Sign In
            </span>
          </button>
        </div>
        <div className="w-1/2 relative h-full">
          <Image src="/images/invograde.png" alt="img" fill />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full">
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;
