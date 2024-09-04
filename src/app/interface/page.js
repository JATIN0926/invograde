import Lectures from '@/components/Interface/Lectures/Lectures'
import Navbar from '@/components/Interface/Navbar/Navbar'
import SideBar from '@/components/Interface/SideBar/SideBar'
import StoryBar from '@/components/Interface/StoryBar/StoryBar'


const Page = () => {
  return (
    <main className="w-screen max-w-full flex flex-col relative">
      <Navbar />
      <StoryBar />
      <div className="flex flex-grow">
        <SideBar />
        <Lectures />
      </div>
    </main>
  )
}

export default Page
