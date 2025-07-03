import Community from "@/components/HomePage/Community/Community";
import Description from "@/components/HomePage/Description/Description";
import FAQ from "@/components/HomePage/FAQ/FAQ";
import Footer from "@/components/HomePage/Footer/Footer";
import GettingStarted from "@/components/HomePage/GettingStarted/GettingStarted";
import Hero from "@/components/HomePage/Hero/Hero";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import ReadyToShow from "@/components/HomePage/ReadyToShow/ReadyToShow";
import ScrollingArea from "@/components/HomePage/ScrollingArea/ScrollingArea";

export default function Home() {
  return (
    <>
      <main className="w-screen max-w-full flex flex-col gap-6 bg-black px-8 pt-[5.5rem]">
        <Navbar />
        <Hero />
        <Description />
        <Community />
        <ScrollingArea />
        <GettingStarted />
        <FAQ />
        <ReadyToShow />
        <Footer />
      </main>
    </>
  );
}
