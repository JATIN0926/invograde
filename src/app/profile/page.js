"use client"
import ProfilePage from "@/components/ProfilePage/ProfilePage/ProfilePage";
import withAuth from "@/components/withAuth/withAuth";
import { useState } from "react";

const Page = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="w-screen max-w-full flex flex-col">
      <ProfilePage isOpen={isOpen} />
    </main>
  );
};

export default withAuth(Page);
