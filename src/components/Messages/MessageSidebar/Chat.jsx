import React from 'react'

function Chat({name,msg}) {
  return (
    <div className="flex items-center justify-between bg-[#3A3084] rounded-lg p-2 w-[95%] px-3">
    <div className="w-[25%] aspect-square bg-white rounded-full mr-2"></div>
    <div className=' w-[60%]'>
      <p className="text-[0.9rem] font-IBMPlexSans-Bold">{name}</p>
      <p className="text-xs font-IBMPlexSans-Regular">{msg}</p>
    </div>
  </div>
  )
}

export default Chat
