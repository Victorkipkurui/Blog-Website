import React from 'react'
import Blogpage from '../components/Blogpage'
const Blogs = () => {
  return (
    <div>
      <div className='py-40 text-white bg-black px-4 text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Blog Page</h1>
      </div>
      <div className='max-w-7xl mx-auto'>
        <Blogpage></Blogpage>
      </div>
    </div>
  )
}

export default Blogs