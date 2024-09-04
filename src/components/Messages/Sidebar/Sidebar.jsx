import React from 'react'
import CustomToggleSwitch from '../../Interface/SideBar/Switch'

const SideBar = () => {
  return (
    
    <div className={`w-[18%] max-h-[110vh] h-[105vh]   fixed left-0 top-[96px]   bottom-0   font-IBMPlexSans-SemiBold z-30 pt-4`}>
      <div className="h-full w-full flex flex-col gap-2">
        <div className=" w-full h-[5%] flex flex-row items-center justify-center gap-3 ">
          <h1>Learner</h1>
          <CustomToggleSwitch color='bg-[#DDCCFF]' toggleColor="bg-[#3A3084]" />
          <h1>Trainer</h1>
        </div>
        <div className="h-[80%] w-full bg-[#3A3084] flex flex-col items-center justify-start gap-3 pt-7 rounded-tr-xl">
   
   <div className='w-[82%]'>
    


   </div>
   <div className=' bg-[white] rounded-md p-4 px-6 text-[#3A3084] flex flex-col items-start justify-start w-[82%] gap-2'>
   <h1>Badges</h1>
   <h1>Networks</h1>
   <h1>Accomplishment</h1>
   <h1>Resume</h1> 
   <h1>Find Work</h1>  
   </div>
   </div>
      </div>

    </div>

  
  )
}

export default SideBar