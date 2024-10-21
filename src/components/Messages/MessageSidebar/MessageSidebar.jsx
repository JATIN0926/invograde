import React from 'react'
import CustomToggleSwitch from '../../Interface/SideBar/Switch'
import Chat from './Chat'

const MessageSidebar = () => {
  return (
    
    <div className={`w-[19%] max-h-[110vh] h-[105vh]   fixed left-0 top-[96px]   bottom-0   font-IBMPlexSans-SemiBold z-30 pt-4`}>
      <div className="h-full w-full flex flex-col gap-2">
        <div className=" w-full h-[5%] flex flex-row items-center justify-center gap-3 ">
          <h1 className=' text-[0.9rem]'>Learner</h1>
          <CustomToggleSwitch color='bg-[#DDCCFF]' toggleColor="bg-[#3A3084]" />
          <h1 className=' text-[0.9rem]'>Trainer</h1>
        </div>
        <div className="h-[80%] w-full bg-[#3A3084] flex flex-col items-center justify-start  pt-6 rounded-tr-xl">
   
   
   <div className="w-full bg-[#3A3084] text-white flex flex-col">


  <button className="bg-[#DDCCFF] text-[#141520] w-[62%] rounded-full self-center py-2 mb-4 font-IBMPlexSans-Bold">+ Compose</button>

  <div className="flex flex-col gap-2 items-center justify-start bg-red-600 ">
    <div className="flex items-center justify-center gap-4">

    <h2 className="font-IBMPlexSans-Bold text-[#DDCCFF]">People</h2>
  <h2 className="font-IBMPlexSans-Bold">Community</h2>
    </div>
   
   <div className=" w-full flex flex-col items-center justify-start gap-3 overflow-y-scroll h-[40%] bg-green-500">

   <Chat name='Gaurav Tripathi' msg='Hey Gaurav, just curious but did you...' />
   <Chat name='Tanishka Saxena' msg='Hey Tanu, just curious but did you...' />
   <Chat name='Tanishka Saxena' msg='Hey Tanu, just curious but did you...' />
   <Chat name='Tanishka Saxena' msg='Hey Tanu, just curious but did you...' />
   </div>

    
  </div>

    


   </div>
   <div className=' bg-[white] rounded-md p-4 px-6 text-[#3A3084] flex flex-col items-start justify-start w-[70%] gap-1 font-IBMPlexSans-Bold'>
   <h1>Badges</h1>
   <h1>Networks</h1>
   <h1>Accomplishment</h1>
   <h1>Resume</h1> 
   <h1>Find Work</h1>  
   </div>
   
      </div>

    </div>

  </div>
  )}

export default MessageSidebar