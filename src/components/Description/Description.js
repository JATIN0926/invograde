import React from "react";

const Description = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-12 text-white p-6">
      <div className=" w-screen max-w-full flex items-start justify-between ">
        <div className="flex flex-col items-start justify-center gap-4 w-[40%] h-full">
          <div className="flex flex-col items-start justify-center gap-3">
            <h1 className="text-3xl font-semibold">Who else can Join us?</h1>
            <p>
              Whether you are an experienced educator eager to share your
              knowledge, a lifelong learner hungry for new skills, or someone
              simply looking to explore and engage in the world of learning,
              there is a place for you here
            </p>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-start justify-center gap-2">
                <li>Graphic Designers</li>
                <li>Web Developers</li>
                <li>UI/UX Designers</li>
                <li>Product Designers</li>
                <li>3D Artists</li>
                <li>Motion Graphic Designers</li>
                <li>App Developers</li>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <li>Game Developers</li>
                <li>Industrial Designers</li>
                <li>Multimedia Artists</li>
                <li>Educators</li>
                <li>Freelancers</li>
                <li>Programmers</li>
                <li>Digital Designers</li>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <video width="450px" height="500px" controls></video>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-3 w-[100%] h-full ">
        <h1 className="text-3xl font-bold">
          Earn your real worth & become a Professional
        </h1>
        <div className="flex flex-col items-start justify-center gap-2">
          <li>Choose your domain</li>
          <li>Learn a skill</li>
          <li>Become a Trainer</li>
          <li>EShowcase your Talent</li>
          <li>Earn and start your journey</li>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-3 w-1/2">
        <h1 className="text-3xl font-bold">
          Earn badges and start publishing your virtual certificates
        </h1>
        <div className="flex flex-col items-start justify-center gap-2">
          <li>Publish your Portfolio</li>
          <li>Earn points</li>
          <li>Get yourself a badge</li>
          <li>Start publishing your Courses</li>
        </div>
      </div>
    </div>
  );
};

export default Description;
