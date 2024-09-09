import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'


const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto text-white'>
      <div className='text-white text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to our Blog</h1>
        <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>In a rapidly evolving digital landscape, staying ahead of the curve is essential.We are passionate about exploring the cutting-edge advancements that shape our world. From AI and machine learning to the latest in web development and cybersecurity, our mission is to demystify technology and make it accessible to everyone.</p>
      </div>
      <div>
        <Link to='/' className='font-medium inline-flex items-center py-1 cursor-pointer hover:text-orange-600'>Learn More<FaArrowRight className='mt-1 ml-2'></FaArrowRight></Link>
      </div>
    </div>
  )
}

export default Banner