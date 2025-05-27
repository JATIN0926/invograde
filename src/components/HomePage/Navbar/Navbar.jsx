"use client";
import Link from "next/link";
import "./style.css";
import ProfileComponent from "../ProfileComponent/ProfileComponent";
import { useSelector } from "react-redux";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="z-[100] w-full flex items-center justify-between py-4 px-3 md:px-12  lg:px-20 absolute top-3">
      <h1 className="text-3xl font-light font-Snippet-Regular tracking-[0.2em]">
        invograde
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center font-IBMPlexSans-Regular justify-center gap-8 min-[850px]:gap-10 lg:gap-16 font-medium cursor-pointer z-[100]">
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

      {/* Hamburger Icon (Mobile Only) */}
      <div
        className="md:hidden cursor-pointer z-[101]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image
          src="/icons/hamburger-white.png" // Replace with your actual path
          alt="menu"
          width={24}
          height={24}
        />
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-5 w-[30%] bg-black/80 text-white p-6 rounded-lg z-[100] flex flex-col gap-4 items-start font-IBMPlexSans-Regular md:hidden">
          <h3 className="nav-link">Home</h3>
          <h3 className="nav-link">Explore</h3>
          <h3 className="nav-link">About Us</h3>
          <h3 className="nav-link">Contact</h3>
          {user ? (
            <ProfileComponent />
          ) : (
            <Link href="/login">
              <h3 className="nav-link">Sign In</h3>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
