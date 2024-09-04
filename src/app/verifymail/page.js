"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import "./style.css";

const Verifymail = () => {
  const imgs = [
    "/icons/google.png",
    "/icons/twitter.png",
    "/icons/facebook.png",
    "/icons/linkedin.png",
  ];
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const [timeLeft, setTimeLeft] = useState(60); // Timer set to 60 seconds
  const [showResend, setShowResend] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      } else {
        setShowResend(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (newOtp[index] !== "") {
        newOtp[index] = "";
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
        newOtp[index - 1] = "";
      }
      setOtp(newOtp);
    }
  };

  const handleResend = () => {
    setTimeLeft(60);
    setShowResend(false);
  };

  return (
    <div className="bg-login-bg bg-cover bg-center h-screen -z-10 w-screen max-w-full flex items-center justify-center">
      <div className="shadow-[#535353] rounded-l-xl shadow-md flex items-center justify-center h-[89vh] w-[80vw]">
        <div className="w-1/2 p-6 text-[#787878] bg-white flex flex-col items-center justify-center gap-6">
          <div className="flex w-full flex-col items-center justify-center gap-2 relative">
            <div className="w-[65%] flex flex-col items-center justify-center gap-2">
              <h1 className="text-[#141520] font-bold">Verify your email id</h1>
              <p className="text-[#457FCC] text-center">
                A verification code has been sent to your email id
              </p>
              <h1 className="text-[#141520] font-bold">shreyas123@gmail.com</h1>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <p className="text-[#787878]">Verification Code</p>
            <div className="flex gap-2">
              {otp.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="otp-input text-center text-lg border-b-[1px] border-[#141520] focus:outline-none"
                  value={otp[index]}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>
            {showResend ? (
              <h2
                className="text-[#457FCC] cursor-pointer hover:underline"
                onClick={handleResend}
              >
                Resend OTP
              </h2>
            ) : (
              <h2 className="text-[#787878]">Resend code in {timeLeft} seconds</h2>
            )}
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-[0.78rem] text-[#787878]">
              Not yours? Change email id
            </p>
            <button
              className="bg-[#3A3084] p-2 px-8 text-base rounded-md text-white font-semibold"
              type="submit"
            >
              Confirm
            </button>
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
            type="submit"
          >
            Already a User? <span className="font-bold">Sign In</span>
          </button>
        </div>
        <div className="w-1/2 relative h-full">
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
          <Image src="/images/invograde.png" fill alt="invograde" />
        </div>
      </div>
    </div>
  );
};

export default Verifymail;
