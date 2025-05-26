"use client";
import Link from "next/link";
import "./style.css";
import ProfileComponent from "../ProfileComponent/ProfileComponent";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className=" z-[100] w-full flex items-center justify-between py-4 px-20  absolute top-3">
      <h1 className="text-3xl font-light font-Snippet-Regular tracking-[0.2em]">
        invograde
      </h1>
      <div className="flex items-center font-IBMPlexSans-Regular justify-center gap-16 font-medium cursor-pointer z-[100]">
        <h3 className="nav-link relative">Home</h3>
        <h3 className="nav-link relative">Explore</h3>
        <h3 className="nav-link relative">About Us</h3>
        <h3 className="nav-link relative">Contact</h3>
        {user ? (
          <ProfileComponent />
        ) : (
          <Link href="/login">
            <h3 className="nav-link relative">Sign In</h3>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
