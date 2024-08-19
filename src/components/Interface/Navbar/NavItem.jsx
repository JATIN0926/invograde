import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const NavItem = ({ src, activeSrc, text, isActive, onClick, href = "#" }) => {
  console.log("NavItem href:", href);
  return (
    <Link href={href}>
      <div
        onClick={onClick}
        className={`flex flex-col items-center justify-center cursor-pointer ${
          isActive ? 'text-[#774FCC]' : ''
        }`}
      >
        <div className="w-[1.6rem] aspect-square relative">
          <Image src={isActive ? activeSrc : src} alt="img" fill />
        </div>
        <h1 className={`text-[0.9rem] font-IBMPlexSans-Regular`}>
          {text}
        </h1>
      </div>
    </Link>
  );
};


export default NavItem;
