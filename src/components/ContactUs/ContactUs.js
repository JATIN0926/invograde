import Image from "next/image";
import "./style.css";

const ContactUs = () => {
  return (
    <div className="h-[85vh] w-screen max-w-full flex items-start justify-center">
      <div className="bg-[#F9F9F9] flex items-center justify-center w-[80%] h-[90%] relative">
        <div className="absolute bg-[#3A3084] h-[55%] w-[30%] -left-16 p-8 flex flex-col items-start justify-between text-white">
          <h1 className="text-xl font-bold">Contact Us</h1>
          <div className="flex items-center justify-center gap-3">
            <Image src="/icons/location.png" width={15} height={15} alt="img" />
            <p>Ahmedabad, India</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Image src="/icons/mail.png" width={15} height={15} alt="img" />
            <p>invocontact@gmail.com</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Image src="/icons/phone.png" width={15} height={15} alt="img" />
            <p>+917048 542600</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <h1 className="text-[#3A3084] text-xl font-bold">Get in Touch</h1>
          <p className="text-[#958FBF] text-lg">
            Feel free to drop us a line below!
          </p>
          <form className="flex flex-col items-start justify-center gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#D5CFFF] p-3 px-10 rounded-md"
            />
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#D5CFFF] p-3 px-10 rounded-md"
            />
            <input
              type="text"
              placeholder="send us your message"
              className="bg-[#D5CFFF] p-7 px-10 rounded-md"
            />
          </form>
          <div className="w-full flex justify-center">
            <button className="bg-[#3A3084] p-2.5 px-12 rounded-lg font-semibold text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
