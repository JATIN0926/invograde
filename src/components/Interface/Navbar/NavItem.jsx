import Image from 'next/image'
import React from 'react'

const NavItem = ({src,text}) => {
  return (
    <div className="flex flex-col items-center justify-center">
          <div className="w-[1.6rem] aspect-square relative">
            <Image src={src} alt="img" fill />
          </div>
          <h1 className="text-[0.9rem] font-IBMPlexSans-Regular">{text}</h1>
        </div>
  )
}

export default NavItem