import ContactUs from "@/components/HomePage/ContactUs/ContactUs";
import Description from "@/components/HomePage/Description/Description";
import GettingStarted from "@/components/HomePage/GettingStarted/GettingStarted";
import Hero from "@/components/HomePage/Hero/Hero";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import WhoIsThisFor from "@/components/HomePage/WhoIsThisFor/WhoIsThisFor";
import Working from "@/components/HomePage/Working/Working";
import { useSelector } from "react-redux";

export default function Home() {
  return (
    <>
      <main className="w-screen max-w-full flex flex-col gap-6">
        <Navbar />
        <Hero />
        <Working />
        <Description />
        <WhoIsThisFor />
        <GettingStarted />
        <ContactUs />
      </main>
    </>
  );
}
