import React from 'react'

const Story = ({text}) => {
  return (
    <div class="flex flex-col items-center">
    <div class="w-16 aspect-square rounded-full border-2 border-purple-500 flex items-center justify-center">
        <div class=" w-full h-full bg-[#CFCFCF] rounded-full"></div>
    </div>
    <span class="text-xs mt-2 text-center truncate w-16">{text}</span>
</div>
  )
}

export default Story