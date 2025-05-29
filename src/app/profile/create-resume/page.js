"use client"
import CreateResume from '@/components/ProfilePage/CreateResume/CreateResume'
import withAuth from '@/components/withAuth/withAuth';
import React from 'react'

const page = () => {
  return (
    <CreateResume />
  )
}

export default withAuth(page);
