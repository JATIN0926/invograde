import Navbar from '@/components/Interface/Navbar/Navbar'
import MessageBox from '@/components/Messages/MessageBox/MessageBox'
import MessageSidebar from '@/components/Messages/MessageSidebar/MessageSidebar'


const Page = () => {
  return (
    <main className="w-screen max-w-full flex flex-col relative">
      <Navbar isMessagesPage={true} />
      <div className="flex flex-grow">
        <MessageSidebar />
        <MessageBox />
      </div>
    </main>
  )
}

export default Page
