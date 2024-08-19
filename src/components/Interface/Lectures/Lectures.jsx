// import React from 'react'
// import CourseCard from './CourseCard'

// const Lectures = () => {
//   return (
// <div className="w-[83%] ml-[18%] mt-[162px] h-[calc(100vh-120px)] px-10 py-7 overflow-y-auto">
//         <div className="w-full flex flex-col items-center justify-center gap-4">
//           <h1 className=' font-IBMPlexSans-Regular text-2xl text-[#454545] self-start'>Earn a free Certificate</h1>
//           <div className="flex items-center justify-between w-full flex-wrap gap-y-8">
//             <CourseCard />
//             <CourseCard />
//             <CourseCard />
//             <CourseCard />
//             <CourseCard />
//             <CourseCard />
//             <CourseCard />
//             <CourseCard />
//             <CourseCard />
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Lectures

import React from 'react'
import CourseCard from './CourseCard'

const Lectures = () => {
  return (
    <div className="flex-grow mt-[162px] ml-[18%] px-10 py-7 overflow-y-auto">
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <h1 className='font-IBMPlexSans-Regular text-2xl text-[#454545] self-start'>Earn a free Certificate</h1>
        <div className="flex items-center justify-between w-full flex-wrap gap-y-8">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  )
}

export default Lectures
