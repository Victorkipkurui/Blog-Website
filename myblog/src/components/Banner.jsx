import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'


const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
      <div className='text-white text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to our Blog</h1>
        <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>This blog covers a wide range of topics, offering readers insights and updates across several categories. The News section provides timely information on current events, including business and technology updates, while the World category delivers stories and global trends that shape international affairs. Games caters to gaming enthusiasts with news on video game releases, reviews, and eSports. For practical resources, the References section offers tutorials and guides on various subjects. Categories like Apples and Cherry delve into specific industries, such as web development, eCommerce, media production, and nonprofit management, providing valuable content for entrepreneurs and creative professionals.</p>

        <div>
          <Link to='/' className='font-medium inline-flex items-center py-1 cursor-pointer hover:text-orange-600'>Learn More<FaArrowRight className='mt-1 ml-2'></FaArrowRight></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner