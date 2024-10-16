import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center text-black">
    <div className="text-xl font-bold">transminder</div>
    <div className="space-x-6">
      <Link href="" className="text-gray-500">Users</Link>
      <Link href="" className="text-gray-500">Places</Link>
      <Link href="" className="hover:text-blue-600">Resources</Link>
      <Link href="" className="text-gray-500">Settings</Link>
    </div>
    <div className="flex items-center">
      <div className="bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold">N</div>
      <span className="ml-2">Name</span>
    </div>
  </nav>
  )
}
