import React from 'react'

export default function Collections() {
  return (
     <div className='mt-3 px-8'>
     <h1 className='text-xl font-semibold'>Collections <span className='text-gray-500'>6</span></h1>
     <div className='flex gap-2 text-white'>
     <div className='w-44 bg-green-800 h-30 rounded-2xl pl-3 pt-6 gap-x-2'>
        <h2>Transition Basics</h2>
        <span>4 resources</span>
     </div>

     <div className='w-48 bg-cyan-400 h-32 rounded-2xl pl-3 pt-6 gap-x-2'>
        <h2>Healthcare and wellness</h2>
        <span>4 resources</span>
     </div>
     <div className='w-48 bg-stone-700 h-32 rounded-2xl pl-3 pt-6 gap-x-2'>
        <h2>Legal Rights and Advocacy</h2>
        <span>4 resources</span>
     </div>
     <div className='w-48 bg-violet-600 h-32 rounded-2xl pl-3 pt-6 gap-x-2'>
        <h2>Emotional and Mental Health</h2>
        <span>4 resources</span>
     </div>
     <div className='w-48 bg-orange-300 h-32 rounded-2xl pl-3 pt-6 gap-x-2'>
        <h2>Physical Activity and Fitness</h2>
        <span>4 resources</span>
     </div>
     <div className='w-48 bg-cyan-700 h-32 rounded-2xl pl-3 pt-6 gap-x-2'>
        <h2>Social and Community Resources</h2>
        <span>4 resources</span>
     </div>
     <div className='w-48 bg-violet-100 h-32 rounded-2xl pl-3 pt-6 gap-x-2'>
         <span className='text-4xl px-8 text-violet-600'>+</span>
        <h2 className='text-violet-600'>Add new collections</h2>
     </div>
     </div>
     </div>
  )
}
