import Navbar from '@/components/Interface/Navbar/Navbar'
import UploadProject from '@/components/YourWork/UploadProject/UploadProject'
import WorkSideBar from '@/components/YourWork/WorkSidebar/page'


const Page = () => {
  return (
    <main className="w-screen max-w-full flex flex-col relative">
      <Navbar isMessagesPage={true} />
      <div className="flex flex-grow">
        <WorkSideBar />
        <UploadProject />
      </div>
    </main>
  )
}

export default Page
