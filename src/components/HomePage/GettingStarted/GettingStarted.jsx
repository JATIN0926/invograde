// import Image from 'next/image'
// import React from 'react'

// const GettingStarted = () => {
//   return (
//     <div className=' w-full p-4 flex flex-col items-center justify-center gap-10 bg-[#131313] py-10'>
//       <div className=" w-[85%] flex items-center justify-start px-2">
//         <div className="flex flex-col items-start  justify-center gap-3 w-[60%]">
//           <h1 className=' text-white font-IBMPlexSans-SemiBold text-4xl'>Getting Started</h1>
//           <p className=' text-[#787878] text-lg font-IBMPlexSans-Regular leading-5'>Our focus is to monetize your talent and to assure your profit without investments, connect learning with real-world application, offering tools and opportunities that enable individuals to grow their expertise & gain recognition.</p>
//         </div>
//       </div>
//       <div className="w-[95%] flex items-center justify-between  h-[18rem]">
//         <div className="flex flex-col items-center justify-center w-[15%] gap-4 self-start text-white font-IBMPlexSans-Regular text-base">
//           <div className=" flex items-center justify-center">
//             <Image src="/images/1.svg" width={50} height={50} alt='one' className=' w-[60%] h-[6rem]' />
//             <Image src="/images/1_side.svg" width={50} height={50} alt='one' className=' w-[40%] h-[6rem]' />
//           </div>
//           <p>Sign In & Onboard Yourself as a Designer or a Developer</p>
//         </div>
//         <div className="flex flex-col items-center justify-center w-[15%] gap-4 self-end text-white font-IBMPlexSans-Regular text-base">
//           <div className=" flex items-center justify-center">
//             <Image src="/images/2.svg" width={50} height={50} alt='one' className=' w-[60%] h-[6rem]' />
//             <Image src="/images/2_side.svg" width={50} height={50} alt='one' className=' w-[40%] h-[6rem]' />
//           </div>
//           <p>Add Your Work, showcase your portfolio and start publishing your talent</p>
//         </div>
//         <div className="flex flex-col items-center justify-center w-[15%] gap-4 self-start text-white font-IBMPlexSans-Regular text-base">
//           <div className=" flex items-center justify-center">
//             <Image src="/images/3.svg" width={50} height={50} alt='one' className=' w-[60%] h-[6rem]' />
//             <Image src="/images/3_side.svg" width={50} height={50} alt='one' className=' w-[40%] h-[6rem]' />
//           </div>
//           <p>Earn points & remarks on your work to receive skilled Badges</p>
//         </div>
//         <div className="flex flex-col items-center justify-center w-[15%] gap-4 self-end text-white font-IBMPlexSans-Regular text-base">
//           <div className=" flex items-center justify-center">
//             <Image src="/images/4.svg" width={50} height={50} alt='one' className=' w-[60%] h-[6rem]' />
//             <Image src="/images/4_side.svg" width={50} height={50} alt='one' className=' w-[40%] h-[6rem]' />
//           </div>
//           <p>publish your lessons, tutorials and courses and get free verified certificates</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default GettingStarted


import Image from 'next/image'
import React from 'react'
import RotatingReviews from './RotatingReviews'

const GettingStarted = () => {
  return (
    <div className='w-full p-4 flex flex-col items-center justify-center gap-10 bg-[#131313] py-10'>
      <div className="w-[85%] flex items-center justify-start px-2">
        <div className="flex flex-col items-start justify-center gap-3 w-[60%]">
          <h1 className='text-white font-IBMPlexSans-SemiBold text-4xl'>Getting Started</h1>
          <p className='text-[#787878] text-lg font-IBMPlexSans-Regular leading-5'>Our focus is to monetize your talent and to assure your profit without investments, connect learning with real-world application, offering tools and opportunities that enable individuals to grow their expertise & gain recognition.</p>
        </div>
      </div>
      <div className="relative w-[95%] flex items-center justify-between h-[18rem]">
        {/* Step 1 */}
        <div className="relative flex flex-col items-center justify-center w-[15%] gap-6 self-start text-white font-IBMPlexSans-Regular text-base">
          <div className="flex items-center justify-center">
            <Image src="/images/1.svg" width={50} height={50} alt='one' className='w-[60%] h-[6rem]' />
            <Image src="/images/1_side.svg" width={50} height={50} alt='one' className='w-[40%] h-[6rem] translate-y-8' />
          </div>
          <p>Sign In & Onboard Yourself as a Designer or a Developer</p>
          {/* Diagonal Line */}
          <div className="absolute top-[5%] left-[50%] w-[160%] h-[2px] bg-[#6c63ff] transform rotate-[20deg] origin-top-left"></div>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center justify-center w-[15%] gap-6 self-end text-white font-IBMPlexSans-Regular text-base">
          <div className="flex items-center justify-center">
            <Image src="/images/2.svg" width={50} height={50} alt='two' className='w-[60%] h-[6rem]' />
            <Image src="/images/2_side.svg" width={50} height={50} alt='two' className='w-[40%] h-[6rem] translate-y-8' />
          </div>
          <p>Add Your Work, showcase your portfolio and start publishing your talent</p>
          {/* Diagonal Line */}
          <div className="absolute top-[-30%] left-[42%] w-[160%] h-[2px] bg-[#6c63ff] transform rotate-[-15deg] origin-top-right"></div>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center justify-center w-[15%] gap-6 self-start text-white font-IBMPlexSans-Regular text-base">
          <div className="flex items-center justify-center">
            <Image src="/images/3.svg" width={50} height={50} alt='three' className='w-[60%] h-[6rem]' />
            <Image src="/images/3_side.svg" width={50} height={50} alt='three' className='w-[40%] h-[6rem] translate-y-8' />
          </div>
          <p>Earn points & remarks on your work to receive skilled Badges</p>
          {/* Diagonal Line */}
          <div className="absolute top-[10%] left-[50%] w-[165%] h-[2px] bg-[#6c63ff] transform rotate-[13deg] origin-top-left"></div>
        </div>

        {/* Step 4 */}
        <div className="relative flex flex-col items-center justify-center w-[15%] gap-6 self-end text-white font-IBMPlexSans-Regular text-base">
          <div className="flex items-center justify-center">
            <Image src="/images/4.svg" width={50} height={50} alt='four' className='w-[60%] h-[6rem]' />
            <Image src="/images/4_side.svg" width={50} height={50} alt='four' className='w-[40%] h-[6rem] translate-y-8' />
          </div>
          <p>Publish your lessons, tutorials and courses and get free verified certificates</p>
        </div>
      </div>
      {/* <RotatingReviews /> */}
    </div>
  )
}

export default GettingStarted
