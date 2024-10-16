import React from 'react'

export default function Card() {
    const resources = [
        {
          title: 'Understanding Therapy',
          type: 'Article',
          time: '5 min',
          icon: '📘',
        },
        {
          title: 'Coming Out to Loved Ones',
          type: 'Guide',
          time: '7 Steps + 5 min',
          icon: '📖',
        },
        {
          title: 'Surgery Explained',
          type: 'Video',
          time: '10 min',
          icon: '🎥',
        },
        {
          title: 'Managing Stress and Anxiety',
          type: 'Video',
          time: '10 min',
          icon: '🎥',
        },
        {
          title: 'Choosing the Right Healthcare Provider',
          type: 'Article',
          time: '5 min',
          icon: '📘',
        },
        {
          title: 'Healthy Living: Nutrition Tips for Folks',
          type: 'Guide',
          time: '7 Steps + 5 min',
          icon: '📖',
        },
        {
          title: 'Finding Friendly Spaces',
          type: 'Video',
          time: '10 min',
          icon: '🎥',
        },
        {
          title: 'Joining Support Groups',
          type: 'Video',
          time: '10 min',
          icon: '🎥',
        },
      ];
      
  return (
    <div className="p-4 px-8 my-7">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {resources.map((resource, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-sm bg-white flex flex-col h-64">
          <div className='mt-auto'>
            <div className="flex items-end space-x-2">
              <span>{resource.icon}</span>
              <span className={`text-sm font-semibold ${
                resource.type === 'Video' ? 'text-orange-500':resource.type === 'Guide' ? 'text-rose-400' : resource.type === 'Article' ? 'text-blue-500' : 'text-gray-700'
              }`}>
                {resource.type}
              </span>
            </div>
            <h3 className="text-lg font-bold">{resource.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{resource.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
