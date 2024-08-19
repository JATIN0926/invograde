import React from 'react'
import SearchPerson from '../SearchPerson/SearchPerson'
import Image from 'next/image'

const MessageBox = () => {
  return (
    <div className="flex-grow mt-[80px] ml-[18%] px-10 overflow-y-auto ">
      <div className="flex flex-col justify-center items-center w-full ">

     
      <div className="w-full flex flex-col items-center justify-end gap-4 pl-[12%]">
        <SearchPerson />
      </div>
      <div className="w-full  flex flex-col items-center justify-center gap-2 ">
           <div className="flex items-center justify-center gap-8 text-white self-start">
            <button className=' bg-[#3A3084] rounded-full w-[7rem] h-[2.2rem] font-IBMPlexSans-Bold flex items-center justify-center'>Sent</button>
            <button className=' bg-[#3A3084] rounded-full w-[7rem] h-[2.2rem] font-IBMPlexSans-Bold flex items-center justify-center'>Received</button>
            <button className=' bg-[#3A3084] rounded-full w-[7rem] h-[2.2rem] font-IBMPlexSans-Bold flex items-center justify-center'>Archived</button>
           </div>
           <div className=" w-full flex items-center justify-between">
            <div className="w-[60%] bg-[#774FCC] p-4 rounded-xl flex flex-col items-center justify-center gap-4">
              <div className="w-[90%] flex items-center justify-between">
                <div className="flex items-center justify-center gap-3">
                    <div className="bg-white rounded-full aspect-square w-[4.5rem]"></div>
                    <div className="flex flex-col items-start justify-center gap-1.5 text-white">
                      <h1 className=' font-IBMPlexSans-Bold text-[0.9rem]'>Gaurav Tripathi</h1>
                      <h2 className=' font-IBMPlexSans-Medium text-[0.75rem]'>Student</h2>
                      <p className=' font-IBMPlexSans-Medium text-[0.75rem]'>Kalinga Institute of Industrial Technology</p>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-center text-white font-IBMPlexSans-Regular text-[0.9rem]">
                      <h1>He/Him</h1>
                      <h2>Backend Developer</h2>
                      <p>India</p>
                    </div>
              </div>
              <div className='w-[90%] h-[13rem] max-h-[15rem] resize-none focus:border-[#141520] border-2 border-[#141520] rounded-xl bg-transparent relative' >
                <div className="absolute w-full bottom-2 p-2 px-6">
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center justify-center gap-5">
                      <div className=" aspect-square w-6 relative">
                        <Image src="/icons/media.svg" alt='img' fill />
                      </div>
                      <div className=" aspect-square w-6 relative">
                        <Image src="/icons/video.svg" alt='img' fill />
                      </div>
                      <div className=" aspect-square w-6 relative">
                        <Image src="/icons/text.svg" alt='img' fill />
                      </div>
                    </div>
                    <input type="text" className=' w-1/2 border-2 border-[#DDCCFF] rounded-xl bg-transparent placeholder:text-white placeholder:font-IBMPlexSans-Medium' placeholder='Type something' />
                    <div className=" aspect-square w-16 relative bg-red-700">
                        <Image src="/icons/send.svg" alt='img' fill />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center gap-6 overflow-x-auto whitespace-nowrap">
  <div className="bg-white w-[24rem] p-3 px-6 h-10 text-[#141520] font-IBMPlexSans-Regular rounded-full flex items-center justify-center cursor-pointer">
    Are you willing to work?
  </div>
  <div className="bg-white w-[14rem] p-3 px-10 h-10 text-[#141520] font-IBMPlexSans-Regular rounded-full flex items-center justify-center cursor-pointer">
    Let’s Collaborate
  </div>
  <div className="bg-white w-[14rem] p-3 px-6 h-10 text-[#141520] font-IBMPlexSans-Regular rounded-full flex items-center justify-center cursor-pointer">
    I appreciate your designs
  </div>
  <div className="bg-white w-[14rem] p-3 px-6 h-10 text-[#141520] font-IBMPlexSans-Regular rounded-full flex items-center justify-center cursor-pointer">
    I appreciate your designs
  </div>
  <div className="bg-white w-[14rem] p-3 px-6 h-10 text-[#141520] font-IBMPlexSans-Regular rounded-full flex items-center justify-center cursor-pointer">
    I appreciate your designs
  </div>
</div>




            </div>
            <div className="w-[35%]  flex flex-col items-start justify-center gap-3">
              <div className="w-full bg-[#DDCCFF] rounded-lg h-[13rem]"></div>
              <div className="flex items-center justify-between w-full">

              <div className="w-[45%] bg-[#DDCCFF] rounded-lg h-[10rem]"></div>
              <div className="w-[45%] bg-[#DDCCFF] rounded-lg h-[10rem]"></div>
              </div>
            </div>
           </div>
      </div>
      </div>
    </div>
  )
}

export default MessageBox