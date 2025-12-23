import React from 'react'

export default function AboutLayout({children}) {
  return (
    <div>
      <ul className='flex gap-2'>
        <li>Mission</li>
        <li>vision</li>
      </ul>
      {children}
    </div>
  )
}
