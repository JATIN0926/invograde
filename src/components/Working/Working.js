import React from "react";

const Working = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen w-screen max-w-full text-white">
      <div className="self-start flex flex-col items-start justify-center gap-2">
        <h1 className="text-3xl font-bold">How does it work ?</h1>
        <p>Create and transform yourself with the global community.</p>
      </div>
      <div className="flex items-center justify-center gap-24 w-full h-[50%]">
        <div className="bg-[#3A3084] h-[60%] w-[25%] flex flex-col items-center justify-center gap-4 p-6">
          <h1 className="text-2xl font-semibold">Learner</h1>
          <p className=" leading-8 text-center text-lg">
            Consume great learnings, showcase their portfolios and collaborate
            with peers and trainers.
          </p>
        </div>
        <div className="bg-[#1D1558] h-[60%] w-[25%] flex flex-col items-center justify-center gap-4 p-6">
          <h1 className="text-2xl font-semibold">Trainer</h1>
          <p className=" leading-8 text-center text-lg">
            Monetize their skills, get paid, build reputation, manage reach out
            & collaborate for work and popularity.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className=" bg-[#1D1558] p-3 h-[9rem] w-[24%] rounded-xl flex flex-col items-center justify-start gap-3">
          <h1 className="text-2xl font-semibold">Signup</h1>
          <p className="leading-7 text-center text-lg">
            Join and sign in with verifying some details
          </p>
        </div>
        <div className=" bg-[#1D1558] p-3 h-[9rem] w-[24%] rounded-xl flex flex-col items-center justify-start gap-3">
          <h1 className="text-2xl font-semibold">Choose your Domain</h1>
          <p className="leading-7 text-center text-lg">
            Enroll yourself as a Designer or a Developer
          </p>
        </div>
        <div className=" bg-[#1D1558] p-3 h-[9rem] w-[24%] rounded-xl flex flex-col items-center justify-start gap-3">
          <h1 className="text-2xl font-semibold">Explore your interests</h1>
          <p className="leading-7 text-center text-lg">
            Take your time to explore and learn
          </p>
        </div>
        <div className=" bg-[#1D1558] p-3 h-[9rem] w-[24%] rounded-xl flex flex-col items-center justify-start gap-3">
          <h1 className="text-2xl font-semibold">Get free certificates</h1>
          <p className="leading-7 text-center text-lg">
            You can enroll for free certifications and get endorsed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Working;
