import Profile from '@/components/Messages/Profile/Profile'
import React from 'react'
import Story from './Story'
import Image from 'next/image'

const StoryBar = () => {
    return (

       <div className="w-full  border-b-[1px] border-b-[#787878] fixed top-[96px] left-0 z-40 bg-white">
        <div className=" w-full flex items-center justify-between px-8 py-2">
         <div className=" flex flex-col items-center justify-center gap-2  w-[10%] ">

        <div className=" w-16 aspect-square bg-[#CFCFCF] p-2 rounded-full relative">
            <div className="absolute bottom-0 -right-[15%]">

            <div className=" w-8 h-8 relative">

            <Image src="/icons/plusIcon.svg" alt='plus' fill className=' '/>
            </div>
            </div>
        </div> 
        <h1 class="text-sm">Add Yours</h1>
        </div>
        <div class="flex gap-x-10  ">
       <Story text="Shreyas" />
       <Story text="Gaurav" />
       <Story text="Gaurav" />
       <Story text="Shreyas" />
       <Story text="Gaurav" />
       <Story text="Gaurav" />

       
   </div>

   <Profile />
        </div>
       
{/* <div class="flex flex-col items-center">
        <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
        </div>
        <span class="text-sm mt-2">Add Yours</span>
    </div> */}
    
  
  
    


       </div>
    )
}

export default StoryBar

