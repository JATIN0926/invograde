import Image from 'next/image'
const Profile = () => {
  return (
    <div className='p-6 flex flex-col items-center justify-center'>
       <div className="w-16 aspect-square relative">
            <Image src="/images/ProfileAvatar.png" alt='avatar' fill  />
        </div>
        <div className="flex items-center justify-center gap-2 cursor-pointer">
            <h1 className='text-[#141520] text-base'>You</h1>
            <div className="h-3 w-3 relative">
            <Image src="/icons/ArrowDown.svg" alt='arrow' fill  />
            </div>
        </div>
    </div>
  )
}

export default Profile