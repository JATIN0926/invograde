import ContactUs from "@/components/ContactUs/ContactUs";
import Description from "@/components/Description/Description";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import WhoIsThisFor from "@/components/WhoIsThisFor/WhoIsThisFor";
import Working from "@/components/Working/Working";

export default function Home() {
  return (
    <>
      <main className="w-screen max-w-full flex flex-col gap-6">
        <Navbar />
        <Hero />
        <Working />
        <Description />
        <WhoIsThisFor />
        <ContactUs />
      </main>
      {/* <Footer /> */}
    </>
  );
}
