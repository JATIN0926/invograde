import React from "react";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="h-screen w-screen max-w-full bg-homePage-bg bg-center bg-cover">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-8 text-white p-8">
        <p className="text-lg font-light font-Quicksand-Light">
          Start monetizing your skills
        </p>
        <h1 className="text-5xl font-bold">
          “Discover the Talent & Shape the Future with Us”
        </h1>
        <button className="bg-[#0F0733] p-3 px-12 rounded-lg">
          Get Started
        </button>
      </div>
      <div className="w-screen max-w-full flex items-center justify-between text-white p-6 ">
        <div className="flex flex-col items-start justify-center gap-5 w-[35%]">
          <h1 className="text-3xl font-semibold">Explore Yourself with us!</h1>
          <p>
            Provides the perfect environment for exploration and development.
            Join us today and embark on the path to unleashing your full
            potential. You can engage with like-minded individuals, receive
            valuable feedback, and chart your path towards personal and
            professional growth. Seize the opportunity to unlock new horizons
            and unleash your true potential
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-5 w-[45%]">
          <h1 className="text-3xl font-semibold">Letting You Know</h1>
          <p>
            Connect, inspire, and collaborate with fellow creatives and
            professionals across various industries. Through showcasing your
            creative projects and achievements, you aim to seek opportunities
            for growth and meaningful connections. Whether you are exploring
            portfolios, sharing insights, or initiating collaborations, you are
            here to engage in a journey of creativity, innovation, and mutual
            success. Let us link, inspire, and create together!rtunity to unlock
            new horizons and unleash your true potential
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
