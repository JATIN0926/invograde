import SideBar from '@/components/main-page/Sidebar/Sidebar'
import Navbar from '@/components/main-page/Navbar/Navbar'
import ProjectsArea from '@/components/main-page/ProjectsArea/ProjectsArea'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen max-w-full flex flex-col '>
      <Navbar />
      <div className=" w-full bg-red-900 flex">
          <SideBar />
          <ProjectsArea />
      </div>
    </div>
  )
}

export default page