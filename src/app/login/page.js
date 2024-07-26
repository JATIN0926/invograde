// "use client";
// import Image from "next/image";
// import { useState } from "react";

// const Login = () => {
//   const [next, setnext] = useState(false);
//   const imgs = [
//     "/icons/google.png",
//     "/icons/twitter.png",
//     "/icons/facebook.png",
//     "/icons/linkedin.png",
//   ];
//   return (
//     <div className="bg-login-bg bg-cover bg-center h-screen -z-10 w-screen max-w-full flex items-center justify-center ">
//       <div className="flex items-center justify-center h-[89vh] w-[80vw]">
//         <div className="w-1/2 p-6 text-[#787878] bg-white flex flex-col items-center justify-center gap-6">
//           {next ? (
//             <>
//               <div className="flex w-full flex-col items-center justify-center gap-2 relative">
//                 <h1>Create a username</h1>
//                 <input
//                   type="email"
//                   name=""
//                   id=""
//                   className="w-[65%]  p-3 bg-white border-2 border-[#787878]"
//                 />
//                 <div className="flex items-center justify-center gap-2 absolute left-[20%] top-[50%]">
//                   <Image
//                     src="/icons/india.png"
//                     alt="img"
//                     width={30}
//                     height={30}
//                   />
//                   <Image
//                     src="/icons/Arrow.png"
//                     alt="img"
//                     width={10}
//                     height={10}
//                   />
//                 </div>
//               </div>
//               <div className="w-full flex flex-col items-center justify-center gap-2">
//                 <h1>Choose your career to Get Started !</h1>
//                 <select
//                   name="cars"
//                   id="cars"
//                   className="w-[65%]  p-3 bg-white border-2 border-[#787878]"
//                 >
//                   <option
//                     value="volvo"
//                     className="w-[65%]  p-3 bg-white border-2 hover:bg-[#094480] cursor-pointer border-[#787878]"
//                   >
//                     Designer
//                   </option>
//                   <option
//                     value="saab"
//                     className="w-[65%]  p-3 bg-white border-2 border-[#787878]"
//                   >
//                     Developer
//                   </option>
//                 </select>
//                 {/* <input
//                   type="text"
//                   name=""
//                   id=""
//                   className="w-[65%]  p-3 bg-white border-2 border-[#787878]"
//                 /> */}
//                 <p className="w-[65%] text-center text-sm">
//                   By Registering you confirm that you accept the{" "}
//                   <span className="text-[#3C7EA4]"> Terms of Service </span>
//                   and the <span className="text-[#3C7EA4]">Privacy Policy</span>
//                 </p>
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="flex w-full flex-col items-center justify-center gap-2 relative">
//                 <h1>Email or Phone Number</h1>
//                 <input
//                   type="email"
//                   name=""
//                   id=""
//                   className="w-[65%]  p-3 bg-white border-2 border-[#787878]"
//                 />
//                 <div className="flex items-center justify-center gap-2 absolute left-[20%] top-[50%]">
//                   <Image
//                     src="/icons/india.png"
//                     alt="img"
//                     width={30}
//                     height={30}
//                   />
//                   <Image
//                     src="/icons/Arrow.png"
//                     alt="img"
//                     width={10}
//                     height={10}
//                   />
//                 </div>
//               </div>
//               <div className="w-full flex flex-col items-center justify-center gap-2">
//                 <h1>Create Password</h1>
//                 <input
//                   type="text"
//                   name=""
//                   id=""
//                   className="w-[65%]  p-3 bg-white border-2 border-[#787878]"
//                 />
//                 <p className="w-[65%] text-center text-sm">
//                   By Registering you confirm that you accept the{" "}
//                   <span className="text-[#3C7EA4]"> Terms of Service </span>
//                   and the <span className="text-[#3C7EA4]">Privacy Policy</span>
//                 </p>
//               </div>
//             </>
//           )}

//           <div className="flex items-center justify-center gap-2">
//             <input type="checkbox" name="" id="" className="h-6 w-6" />
//             <p className="text-[0.9rem]">
//               I want to receive updates on my registered contact number
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center gap-3">
//             <button
//               className="bg-[#06264F] p-3 px-14 text-lg rounded-md text-white font-semibold"
//               type="submit"
//               onClick={() => {
//                 setnext(true);
//               }}
//             >
//               {next ? "Get Started" : "Confirm"}
//             </button>
//             <p>Login using a social account</p>
//             <div className="flex items-center justify-between w-full cursor-pointer">
//               {imgs.map((img, i) => (
//                 <Image key={i} src={img} alt="img" width={30} height={30} />
//               ))}
//             </div>
//           </div>
//           <button
//             className="p-3 px-16 text-base font-normal rounded-full border-[1px] border-black"
//             type="submit"
//           >
//             Already a User ? <span className="font-bold">Sign In</span>
//           </button>
//         </div>
//         <div className="w-1/2 relative h-full">
//           <Image src="/images/invograde.png" fill alt="invograde" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

"use client";
import Image from "next/image";
import { useState } from "react";

const CustomSelect = ({ options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[65%]">
      <div
        className="p-3 bg-white border-2 border-[#787878] cursor-pointer text-[#787878]"
        onClick={() => setIsOpen(!isOpen)}
      >
        I am a{" "}
        <span className="text-[#094480] font-semibold">
          {selected || "..."}
        </span>
      </div>
      {isOpen && (
        <div className="absolute w-full bg-white border-2 border-[#787878] mt-1 z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-3 hover:bg-[#094480] cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              <span className="text-[#094480] group-hover:text-white">
                {option}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Login = () => {
  const [next, setNext] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const imgs = [
    "/icons/google.png",
    "/icons/twitter.png",
    "/icons/facebook.png",
    "/icons/linkedin.png",
  ];

  return (
    <div className="bg-login-bg bg-cover bg-center h-screen -z-10 w-screen max-w-full flex items-center justify-center">
      <div className="flex items-center justify-center h-[89vh] w-[80vw]">
        <div className="w-1/2 p-6 text-[#787878] bg-white flex flex-col items-center justify-center gap-6">
          {next ? (
            <>
              <div className="flex w-full flex-col items-center justify-center gap-2 relative">
                <h1>Create a username</h1>
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-[65%] p-3 bg-white border-2 border-[#787878]"
                />
                <div className="flex items-center justify-center gap-2 absolute left-[20%] top-[50%]">
                  <Image
                    src="/icons/india.png"
                    alt="img"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/icons/Arrow.png"
                    alt="img"
                    width={10}
                    height={10}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-2">
                <h1>Choose your career to Get Started !</h1>
                <CustomSelect
                  options={["Designer", "Developer"]}
                  selected={selectedOption}
                  onChange={setSelectedOption}
                />
                <p className="w-[65%] text-center text-sm">
                  By Registering you confirm that you accept the{" "}
                  <span className="text-[#3C7EA4]">Terms of Service</span> and
                  the <span className="text-[#3C7EA4]">Privacy Policy</span>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex w-full flex-col items-center justify-center gap-2 relative">
                <h1>Email or Phone Number</h1>
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-[65%] p-3 bg-white border-2 border-[#787878]"
                />
                <div className="flex items-center justify-center gap-2 absolute left-[20%] top-[50%]">
                  <Image
                    src="/icons/india.png"
                    alt="img"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/icons/Arrow.png"
                    alt="img"
                    width={10}
                    height={10}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-2">
                <h1>Create Password</h1>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[65%] p-3 bg-white border-2 border-[#787878]"
                />
                <p className="w-[65%] text-center text-sm">
                  By Registering you confirm that you accept the{" "}
                  <span className="text-[#3C7EA4]">Terms of Service</span> and
                  the <span className="text-[#3C7EA4]">Privacy Policy</span>
                </p>
              </div>
            </>
          )}

          <div className="flex items-center justify-center gap-2">
            <input type="checkbox" name="" id="" className="h-6 w-6" />
            <p className="text-[0.9rem]">
              I want to receive updates on my registered contact number
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <button
              className="bg-[#06264F] p-3 px-14 text-lg rounded-md text-white font-semibold"
              type="submit"
              onClick={() => {
                setNext(true);
              }}
            >
              {next ? "Get Started" : "Confirm"}
            </button>
            <p>Login using a social account</p>
            <div className="flex items-center justify-between w-full cursor-pointer">
              {imgs.map((img, i) => (
                <Image key={i} src={img} alt="img" width={30} height={30} />
              ))}
            </div>
          </div>
          <button
            className="p-3 px-16 text-base font-normal rounded-full border-[1px] border-black"
            type="submit"
          >
            Already a User? <span className="font-bold">Sign In</span>
          </button>
        </div>
        <div className="w-1/2 relative h-full">
          <Image src="/images/invograde.png" fill alt="invograde" />
        </div>
      </div>
    </div>
  );
};

export default Login;
