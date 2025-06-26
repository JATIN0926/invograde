import ContactUs from "@/components/HomePage/ContactUs/ContactUs";
import Description from "@/components/HomePage/Description/Description";
import Footer from "@/components/HomePage/Footer/Footer";
import GettingStarted from "@/components/HomePage/GettingStarted/GettingStarted";
import Hero from "@/components/HomePage/Hero/Hero";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import WhoIsThisFor from "@/components/HomePage/WhoIsThisFor/WhoIsThisFor";

export default function Home() {
  return (
    <>
      <main className="w-screen max-w-full flex flex-col gap-6 bg-black px-8 py-4">
        <Navbar />
        <Hero />
        <Description />
        {/* <WhoIsThisFor /> */}
        <GettingStarted />
        {/* <ContactUs /> */}
        <Footer />
      </main>
    </>
  );
}
