import ContactUs from "@/components/ContactUs/ContactUs";
import Description from "@/components/Description/Description";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Working from "@/components/Working/Working";

export default function Home() {
  return (
    <>
      <main className="w-screen max-w-full flex flex-col gap-6 px-6 bg-[#060032]">
        <Hero />
        <Description />
        <Working />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
