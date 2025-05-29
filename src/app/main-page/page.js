"use client";
import React, { useState } from "react";
import ProjectsArea from '@/components/main-page/ProjectsArea/ProjectsArea';
import withAuth from "@/components/withAuth/withAuth";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen max-w-full flex flex-col">
        <ProjectsArea isOpen={isOpen} />
    </div>
  );
};

export default withAuth(Page);
