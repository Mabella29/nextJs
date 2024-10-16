import Header from '@/app/resources/Header'
import React from 'react'
import Collections from './resources/Collections'
import Card from './resources/Card'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center text-black">
    <div className="text-xl font-bold">transminder</div>
    <div className="space-x-6">
      <Link href="/" className="text-gray-500">Users</Link>
      <Link href="" className="text-gray-500">Places</Link>
      <Link href="/resources" className="hover:text-blue-600">Resources</Link>
      <Link href="" className="text-gray-500">Settings</Link>
    </div>
    <div className="flex items-center">
      <div className="bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center text-violet-500 text-sm font-bold">N</div>
      <span className="ml-2">Name</span>
    </div>
  </nav>
      <Header/>
      <Collections/>
      <Card/>
    </div>
  )
}

