"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FAQItem from "./FAQItem";

const testimonials = [
  {
    name: "Aanya Kumari",
    role: "UI/UX Designer, Bangalore",
    avatar: "/images/faq_avatar.png",
    quote: `Invograde has completely changed how I present my work. Instead of sending PDFs or portfolio links lost in noise, I now share a single profile that showcases my skills clearly. The ability to get real engagement from other designers and recruiters is a game-changer. It’s clean, powerful, and made exactly for creatives like us.`,
  },
  {
    name: "Rishi Mehta",
    role: "Frontend Developer, Pune",
    avatar: "/images/faq_avatar.png",
    quote: `Thanks to Invograde, I landed 2 internship calls in a week. It’s not just a platform, it's a personal portfolio with social proof. Super clean UI and extremely intuitive.`,
  },
  {
    name: "Nikita Sharma",
    role: "Product Designer, Delhi",
    avatar: "/images/faq_avatar.png",
    quote: `I’ve used Behance and Dribbble before, but nothing felt as tailored to students as Invograde. My resume, projects, and visibility — all in one place.`,
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: { duration: 0.5 },
  }),
};

const faqData = [
  {
    question: "What is Invograde?",
    answer:
      "Invograde is a platform to showcase your projects and proof-of-work in a single, shareable profile — built for students, freelancers, and creative professionals.",
  },
  {
    question: "Who can use Invograde?",
    answer:
      "Anyone with a passion for building — whether you're a student, freelancer, job seeker, or creative professional. If you have projects or proof-of-work to share, Invograde is for you.",
  },
  {
    question: "How is Invograde different from LinkedIn or Behance?",
    answer:
      "Unlike LinkedIn or Behance, Invograde focuses purely on your work and skills, with minimal noise and clean design tailored for creators.",
  },
  {
    question: "Is Invograde free to use?",
    answer:
      "Yes, Invograde is completely free to use with optional premium features coming soon.",
  },
  {
    question: "What kind of projects can I upload?",
    answer:
      "You can upload design, development, product, writing, or any creative projects that showcase your skills and thinking.",
  },
];

const FAQ = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex([
      (index + newDirection + testimonials.length) % testimonials.length,
      newDirection,
    ]);
  };

  const testimonial = testimonials[index];

  return (
    <div className="relative overflow-hidden w-full bg-[linear-gradient(to_bottom,rgba(25,13,66,0)_0%,#190D42_10%,#4F34C7_25%,#BAB9F8_100%)] rounded-3xl py-10 px-10 flex flex-col items-center justify-center gap-24">
      <div className="absolute -top-[10%] -left-[7%]">
        <div className="relative aspect-square w-[15rem]">
          <Image
            src="/images/hero2.png"
            alt="arrow_right"
            fill
            className="object-cover rotate-180"
          />
        </div>
      </div>
      <div className="absolute bottom-1/2 -right-[2%]">
        <div className="relative aspect-square w-[12rem]">
          <Image
            src="/images/hero2.png"
            alt="arrow_right"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 w-1/2">
        <h1 className="font-Outfit-Regular text-4xl tracking-[-0.7px] text-center text-white">
          Voices Of Trust
        </h1>

        <div className="rounded-3xl bg-white w-full p-2 py-2 flex flex-col items-center justify-center gap-6 overflow-hidden min-h-[24rem] relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full h-full flex flex-col items-start justify-center gap-4 bg-[#EBECED] p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image
                    src={testimonial.avatar}
                    alt="faq_avatar"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-Geist-Medium text-[0.9rem] tracking-[-0.3px] text-black">
                    {testimonial.name}
                  </h2>
                  <p className="text-[#707070] font-Geist-Regular text-[0.8rem] tracking-[-0.1px]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="font-Geist-Regular text-[0.9rem] tracking-[-0.1px] text-black">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center justify-center gap-2 mt-10">
                {[...Array(5)].map((_, idx) => (
                  <div className="relative w-4 h-4" key={idx}>
                    <Image
                      src="/icons/star.svg"
                      alt="star"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            <div
              className="bg-black w-9 h-9 rounded-full flex items-center justify-center p-3 cursor-pointer"
              onClick={() => paginate(-1)}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/icons/arrow_left.svg"
                  alt="arrow_left"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className="bg-black w-9 h-9 rounded-full flex items-center justify-center p-3 cursor-pointer"
              onClick={() => paginate(1)}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/icons/arrow_left.svg"
                  alt="arrow_right"
                  fill
                  className="object-cover rotate-180"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[65%] flex items-start justify-center gap-16">
        <h1 className="font-Outfit-Regular text-5xl bg-[linear-gradient(to_right,_#ffffff_0%,_#ffffffcc_50%,_#ffffffb3_75%,_#ffffff99_100%)] bg-clip-text text-transparent">
          Frequently Asked
        </h1>
        <div className="w-full flex flex-col divide-y divide-white/20">
          {faqData.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
