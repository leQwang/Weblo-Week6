import React from 'react'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="grid place-items-center h-screen w-full">
      <div className='flex gap-4 items-center'>
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt=""
        />
        <h1 className='text-2xl text-white font-bold'>404! Not Found</h1>
      </div>
    </div>
  )
}

export default NotFound