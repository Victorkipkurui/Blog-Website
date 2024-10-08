import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const Sidebar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then(res => res.json())
      .then(data => setPopularBlogs(data.slice(0, 15))) // Fetches the first 15 blogs
      .catch(error => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div>
      <div>
        <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 5).map(blog => ( // Latest 5 blogs
            <div key={blog.id} className='my-5 border-b-2 px-4'>
              <h4 className='font-medium mb-2'>{blog.title}</h4>
              <Link to={`/blogs/${blog.id}`} className='text-base pb-2 font-medium inline-flex items-center py-1 cursor-pointer hover:text-orange-600'>
                Read More
                <FaArrowRight className='mt-1 ml-2' />
              </Link>
            </div>
          ))}
        </div>
        <h3 className='text-2xl font-semibold px-4 mt-20'>Popular Blogs</h3>
        <div>
          {popularBlogs.slice(5, 10).map(blog => ( // Next 5 blogs (6-10)
            <div key={blog.id} className='my-5 border-b-2 px-4'>
              <h4 className='font-medium mb-2'>{blog.title}</h4>
              <Link to={`/blogs/${blog.id}`} className='text-base pb-2 font-medium inline-flex items-center py-1 cursor-pointer hover:text-orange-600'>
                Read More
                <FaArrowRight className='mt-1 ml-2' />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
