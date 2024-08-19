import Image from 'next/image'
import React from 'react'
import Profile from '../Profile/Profile'

const SearchPerson = () => {
  return (
    <div className='w-full flex items-center justify-between'>
        <div className="flex items-center justify-center gap-4 w-[60%]">
            <div className="w-[5.5rem] aspect-square relative">
            <Image src="/images/ProfileAvatar.png" alt='avatar' fill  />
            </div>
            <input type="text"  placeholder='Type a name or find the person' className=' border-[1px] border-black w-[100%] rounded-full placeholder:text-[#6B6B6B] placeholder:font-IBMPlexSans-Regular' />
            <p className='text-[#454545] font-IBMPlexSans-Regular text-[1.1rem]'>He/Him</p>
        </div>
        <Profile />
    </div>
  )
}

export default SearchPerson