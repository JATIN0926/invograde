import Profile from '@/components/Messages/Profile/Profile'
import Image from 'next/image'
import React from 'react'

const UploadProject = () => {
  return (
    <div className="flex-grow mt-[100px] ml-[18%] px-10 py-7 overflow-y-auto">
        <div className="w-full flex items-start justify-center gap-16">
            <div className="flex flex-col items-center justify-center gap-5 w-full py-10 px-8 ">
                <div className="w-full flex items-center justify-between text-white">
                    <button className=' bg-[#774FCC] font-IBMPlexSans-Regular w-[11rem] h-[3rem] text-base rounded-[1.25rem] cursor-pointer'>Upload Project Cover</button>
                    <button className=' bg-[#774FCC] font-IBMPlexSans-Regular w-[11rem] h-[3rem] text-base rounded-[1.25rem] cursor-pointer'>Continue</button>
                </div>
                <div className="w-full h-[20rem] border-2 border-dashed border-[#774FCC] rounded-xl flex flex-col items-center justify-start gap-3 py-7">
                    <div className="flex flex-col gap-10">
                       <div className=" flex flex-col items-center justify-center gap-3">
                       <h1 className=' text-[#774FCC] text-2xl font-IBMPlexSans-Medium'>Show us your work</h1>
                       <p className=' text-[#3A3084] text-base font-IBMPlexSans-Regular'> <span className=' underline cursor-pointer'>Browse</span>  or you can also Drag & Drop</p>
                       </div>
                       <div className="flex flex-col items-center justify-center gap-3 ">
                       <div className="w-[35%] aspect-square relative">

                         <Image src="/images/UploadFile.png" alt='uploadfile' fill />
                         </div>
                         <p className=' text-[0.9rem] font-IBMPlexSans-Regular text-[#787878]'>png,jpg,jpeg,gif,mp4</p>
                       </div>
                    </div>
                    

                </div>
                <div className=" w-[90%] border-[#787878] border-2 h-[12rem] rounded-lg flex items-start justify-center pt-4">
                    <p className=' text-[#787878] text-base font-IBMPlexSans-Regular'>Add details of your Project to make it more efficient and better</p>
                </div>
                <div className="w-full flex items-center justify-around text-white">
                <button className=' bg-[#774FCC] font-IBMPlexSans-Regular w-[11.5rem] h-[2.5rem] text-base rounded-full cursor-pointer'>Save as Draft</button>
                <button className=' bg-[#774FCC] font-IBMPlexSans-Regular w-[11.5rem] h-[2.5rem] text-base rounded-full cursor-pointer'>Continue</button>
                </div>
            </div>
            <Profile /> 
        </div>
    </div>
  )
}

export default UploadProject