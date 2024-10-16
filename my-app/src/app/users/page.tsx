import React from 'react'
import { User, columns } from "./columns"
import { DataTable } from "@/components/data-table"
 
async function getUsers(): Promise<User[]> {
  // Fetch data from your API here.
  const res = await fetch('')
  const data = await res.json()
  return data
  
}
 
export default async function Page() {
  const data = await getUsers

  return (
    <section className='py-24'>
       <div className="container">
        <h1 className='text-3xl font-bold'>All Users</h1>
       </div>
    </section>
  )
}
