"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

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
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const imgs = [
    "/icons/google.png",
    "/icons/twitter.png",
    "/icons/facebook.png",
    "/icons/linkedin.png",
  ];

  const handleNext = () => {
    if (!emailOrPhone || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    setNext(true);
  };

  const handleGetStarted = () => {
    if (!username) {
      toast.error("Please enter a username.");
      return;
    }
    if (!selectedOption) {
      toast.error("Please select your career.");
      return;
    }
    // Redirect to /verifyemail
    router.push("/verifymail");
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
                  type="text"
                  className="w-full p-3 bg-white border-[1.5px] border-[#BCBCBC]"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="w-[65%] flex flex-col items-start justify-center gap-2">
                <h1 className="text-[#141520] font-bold">
                  Choose your career to Get Started!
                </h1>
                <CustomSelect
                  options={["Designer", "Developer"]}
                  selected={selectedOption}
                  onChange={setSelectedOption}
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
                  <h1 className="text-[#141520] font-bold">
                    Email or Phone Number
                  </h1>
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="w-full p-2.5 pl-[4.5rem] bg-white border-[1.5px] border-[#BCBCBC] placeholder:text-[#C3C3C3] rounded-md text-[0.9rem]"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                      <Image
                        src="/icons/india.png"
                        alt="India flag"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/icons/Arrow.png"
                        alt="Arrow"
                        width={10}
                        height={10}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-2">
                <div className="w-[65%] flex flex-col items-start justify-center gap-1.5 relative">
                  <h1 className="text-[#141520] font-bold self-start w-[65%]">
                    Create Password
                  </h1>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="At least 6 characters"
                    className="w-full p-2.5 bg-white border-[1.5px] border-[#BCBCBC] placeholder:text-[#C3C3C3] rounded-md text-[0.9rem]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

          <div className="flex items-center justify-center gap-2">
            <input
              type="checkbox"
              className="h-5 w-5 border-[#CFCFCF] border-[1.5px]"
            />
            <p className="text-[0.78rem] text-[#787878]">
              I want to receive updates on my registered contact number
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-[#787878] text-[0.82rem]">
              Login using a social account
            </p>
            <div className="flex items-center justify-between w-full cursor-pointer">
              {imgs.map((img, i) => (
                <Image key={i} src={img} alt="img" width={30} height={30} />
              ))}
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
