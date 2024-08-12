import React from 'react'
import CourseCard from './CourseCard'

const Lectures = () => {
  return (
    <div className=' w-[83%] h-full top-[17.5%] absolute right-0 px-10 py-7'>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h1 className=' font-IBMPlexSans-Regular text-2xl text-[#454545] self-start'>Earn a free Certificate</h1>
          <div className="flex items-center justify-between w-full">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
    </div>
  )
}

export default Lectures