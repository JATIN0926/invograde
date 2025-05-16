"use client";
import Image from "next/image";
import { useState } from "react";

const ContactUs = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="w-full px-8 flex items-center justify-center gap-2 mb-7">
      <div className="flex flex-col items-start justify-center basis-1/2 gap-y-7">
        <div className="flex flex-col items-start justify-center font-IBMPlexSans-SemiBold">
          <h1 className="text-4xl tracking-tight">Get In Touch</h1>
          <p className="text-[#774FCC] text-[1.2rem]">
            Our friendly team would love to hear from you.
          </p>
        </div>
        <div className="w-full flex">
          <form className="flex flex-col items-start justify-center gap-4 text-[#141520] font-IBMPlexSans-Regular">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-start justify-center gap-2 w-[47%]">
                <label htmlFor="firstName" className="font-semibold">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  className="rounded-md focus:border-black border-[1px] w-full border-[#CFCFCF] placeholder:text-[#CFCFCF] placeholder:font-IBMPlexSans-Medium"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-2 w-[47%]">
                <label htmlFor="lastName" className="font-semibold">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  className="rounded-md focus:border-black border-[1px] w-full border-[#CFCFCF] placeholder:text-[#CFCFCF] placeholder:font-IBMPlexSans-Medium"
                />
              </div>
            </div>
            <div className="flex flex-col items-start w-full justify-center gap-2">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="myteam@gmail.com"
                className="rounded-md focus:border-black border-[1px] w-full border-[#CFCFCF] placeholder:text-[#CFCFCF] placeholder:font-IBMPlexSans-Medium"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-2 w-full">
              <label htmlFor="phone" className="font-semibold">
                Phone number
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="+91 704-854-2600"
                className="rounded-md focus:border-black border-[1px] w-full border-[#CFCFCF] placeholder:text-[#CFCFCF] placeholder:font-IBMPlexSans-Medium"
              />
            </div>

            <div className="w-full flex items-center justify-around">
              <div
                className={`transition-all cursor-pointer relative border-2 border-[#774FCC] aspect-video w-[42%] rounded-xl bg-white p-5 flex flex-col items-center justify-between h-full ${
                  selectedCard === 'card1' ? "shadow-[#774FCC]" : "shadow-none"
                } shadow-lg`}
                onClick={() => handleCardSelect('card1')}
              >
                <div
                  className={`transition-all ${
                    selectedCard === 'card1' ? "bg-[#774FCC]" : "bg-white"
                  } cursor-pointer absolute h-[1.1rem] w-[1.1rem] rounded-full ${
                    selectedCard === 'card1' ? "border-none" : "border-black"
                  } border-2 right-[5%] top-[5%]`}
                  onClick={() => handleCardSelect('card1')}
                ></div>
                <div className="w-[65%] flex items-center justify-between relative">
                  <div className="aspect-square w-[40%] relative">
                    <Image src="/icons/creator1.svg" alt="img" fill />
                  </div>
                  <div className="aspect-square w-[40%] absolute left-[30%] z-20">
                    <Image
                      src="/icons/creator2.svg"
                      alt="img"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="aspect-square w-[40%] relative">
                    <Image src="/icons/creator3.svg" alt="img" fill />
                  </div>
                </div>
                <h1 className="font-IBMPlexSans-SemiBold text-lg">I’m a creator</h1>
                <p className="text-[#CFCFCF] font-IBMPlexSans-Regular text-[0.9rem] leading-4 text-center font-medium">
                  I’m letting you know about myself.
                </p>
              </div>
              <div
                className={`cursor-pointer relative border-2 ${
                  selectedCard === 'card2' ? "border-[#774FCC] shadow-[#774FCC]" : "border-[#CFCFCF] shadow-none"
                } shadow-lg aspect-video w-[42%] rounded-xl bg-white p-5 py-8 flex flex-col items-center justify-between h-full overflow-hidden`}
                onClick={() => handleCardSelect('card2')}
              >
                <div
                  className={`transition-all ${
                    selectedCard === 'card2' ? "bg-white" : "bg-transparent"
                  } cursor-pointer absolute h-[1.1rem] w-[1.1rem] rounded-full ${
                    selectedCard === 'card2' ? "border-none" : "border-white"
                  } border-2 right-[5%] top-[5%] z-20`}
                  onClick={() => handleCardSelect('card2')}
                ></div>
                <div
                  className={`w-[75rem] absolute ${selectedCard === 'card2' ? "bg-[#774FCC]" : "bg-[#5446BC]"} h-[15rem] top-[-45%] z-10`}
                  style={{
                    clipPath: "inset(0 0 51% 0)",
                    // rotate: "90deg",
                  }}
                ></div>
                <h1 className="text-white font-IBMPlexSans-SemiBold font-semibold z-20 text-lg -translate-y-3">
                  I’m part of a team
                </h1>
                <p className="text-[#CFCFCF] font-IBMPlexSans-Regular text-center text-[1.05rem] w-[85%]">
                  I need multi-user business automations.
                </p>
              </div>
            </div>
          </form>
        </div>
        <button className="mx-auto font-IBMPlexSans-SemiBold bg-gradient-to-l from-[#2F1367] to-[#774FCC] rounded-xl text-white p-2.5 px-16">
          Get in touch
        </button>
      </div>
      <div className="basis-1/2 relative aspect-square">
        <Image src="/images/contactUs.png" alt="img" fill />
      </div>
    </div>
  );
};

export default ContactUs;
