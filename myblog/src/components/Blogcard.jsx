import React from 'react'
import { FaUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Blogcard({blogs}) {
const filteredBlogs = blogs

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>{
      filteredBlogs.map((blog)=><Link key={blog.id} className='p-5 cursor-pointer shadow-lg rounded'>
        <div>
          <img src={blog.image} alt='/' className='w-full'></img>
        </div>
        <h3 className='mt-4 mb-2 font-bold hover:text-blue-700 cursor-pointer'>{blog.title}</h3>
        <p className='mb-2'><FaUser className='inline-flex items-center mr-2 text-gray-600'></FaUser>{blog.author}</p>
        <p className='text-gray-500 text-sm'>Published:{blog.published_date}</p>
      </Link>)
      }
    </div>
  )
}

export default Blogcard