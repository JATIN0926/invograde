import Image from 'next/image'
import React from 'react'

const ProjectCard = () => {
  return (
    <div className=' h-[15rem] w-[22%] flex flex-col gap-4 '>
        <div className=" h-[80%]  w-full relative rounded-md">
            <Image src="/images/ProjectCardPlaceholder.png" alt='img' fill />
        </div>
        <div className=" w-full flex items-center justify-between ">
            <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full border-black border-[1px] relative">
                    {/* this image will take place as profile image of user who has posted this project */}
                    {/* <Image src="/images/ProfileAvatar.png" alt='img' fill />  */}
                </div>
                <h1 className=' text-[#3A3084] text-[0.9rem]'>Shreyas Saxena</h1>
            </div>
            <div className=" flex items-center justify-center gap-2">
                <div className=" w-5 h-5 relative">
                    <Image src="/icons/Like.png" alt='like' fill/>
                </div>
                <h1 className=' text-[0.8rem] text-black'>79</h1>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard