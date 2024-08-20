import Image from 'next/image'
const Profile = () => {
  return (
    <div className='p-2 flex flex-col items-center justify-center '>
       <div className="w-14 h-14 relative">
            <Image src="/images/ProfileAvatar.png" alt='avatar' fill  />
        </div>
        <div className="flex items-center justify-center gap-2 cursor-pointer">
            <h1 className='text-[#141520] text-[0.9rem]'>You</h1>
            <div className="h-2.5 w-2.5 relative">
            <Image src="/icons/ArrowDown.svg" alt='arrow' fill  />
            </div>
        </div>
    </div>
  )
}

export default Profile