import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaArrowRight } from 'react-icons/fa6';

const Sidebar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]); // Corrected variable name

  useEffect(() => {
    fetch("http://localhost:5173/blogs")
      .then(res => res.json())
      .then(data => setPopularBlogs(data.slice(0, 15))) // Corrected function name here too
      .catch(error => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div>
      <div>
        <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
        <div>
          {
            popularBlogs.slice(0, 5).map(blog => ( // You can remove .slice(0, 5) here if it's not necessary
              <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                <h4 className='font-medium mb-2'>{blog.title}</h4>
                <Link to='/' className='text-base pb-2 font-medium inline-flex items-center py-1 cursor-pointer hover:text-orange-600'>
                  Read More
                  <FaArrowRight className='mt-1 ml-2' />
                </Link>
              </div>
            ))
          }
        </div>
        <h3 className='text-2xl font-semibold px-4 mt-20'>Popular Blogs</h3>
        <div>
          {
            popularBlogs.slice(0, 5).map(blog => ( // You can remove .slice(0, 5) here if it's not necessary
              <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                <h4 className='font-medium mb-2'>{blog.title}</h4>
                <Link to='/' className='text-base pb-2 font-medium inline-flex items-center py-1 cursor-pointer hover:text-orange-600'>
                  Read More
                  <FaArrowRight className='mt-1 ml-2' />
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
