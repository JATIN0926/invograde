import Lectures from '@/components/Interface/Lectures/Lectures'
import Navbar from '@/components/Interface/Navbar/Navbar'
import SideBar from '@/components/Interface/SideBar/SideBar'
import React from 'react'

const page = () => {
  return (
    <main className="w-screen max-w-full flex flex-col gap-6 relative">
        <Navbar />
        <div className="w-full h-[85vh] flex items-center justify-center">
        <SideBar />
        <Lectures />
        </div>
    </main>
  )
}

export default page