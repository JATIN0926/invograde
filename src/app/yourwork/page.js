import Navbar from '@/components/Interface/Navbar/Navbar'
import SideBar from '@/components/Messages/Sidebar/Sidebar'
import MessageBox from '@/components/Messages/MessageBox/MessageBox'


const Page = () => {
  return (
    <main className="w-screen max-w-full flex flex-col relative">
      <Navbar isMessagesPage={true} />
      <div className="flex flex-grow">
        <SideBar  />
      </div>
    </main>
  )
}

export default Page
