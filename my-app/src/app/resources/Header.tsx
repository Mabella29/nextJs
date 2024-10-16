import React from 'react'

export default function h1() {
  return (
    <>
     <div className='text-black px-8 py-6 flex justify-between' >
        <div>
        <h1 className="text-3xl font-semibold">Resources</h1>
        <p className='text-gray-500'>Manage and search resources with ease</p>
        </div>
      
      <div><button className='rounded-2xl bg-black text-white py-2 px-4'>Add new resources</button></div>
    </div>

    
    </>
   
  )
}
