import "./style.css";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between p-6 px-10 text-white">
      <div className="">
        <h1 className="text-2xl font-bold font-Righteous-Regular tracking-wider">
          InvoGrade
        </h1>
      </div>
      <div className="flex items-center justify-center gap-16 font-semibold cursor-pointer">
        <h3 className="nav-link relative">Home</h3>
        <h3 className="nav-link relative">About Us</h3>
        <h3 className="nav-link relative">Explore</h3>
        <h3 className="nav-link relative">Contact</h3>
        <h3 className="nav-link relative">Sign In</h3>
      </div>
    </div>
  );
};

export default Navbar;
