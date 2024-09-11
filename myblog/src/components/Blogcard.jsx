import React from 'react';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Blogcard = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  // Filter and paginate blogs based on category and page number
  const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
    console.log(filteredBlogs);

  // Return a message if no blogs are available
  if (filteredBlogs.length === 0) {
    return <p>No blogs available for this category.</p>;
  }

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {filteredBlogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 cursor-pointer shadow-lg rounded'>
          <div>
            {/* Check if image exists, else provide a fallback */}
            <img
              src={blog.image ? blog.image : 'https://via.placeholder.com/300'} // Placeholder if image is missing
              alt={blog.title ? blog.title : 'Blog image'}
              className='w-full h-64 object-cover rounded'
            />
          </div>
          <h3 className='mt-4 mb-2 font-bold hover:text-blue-700 cursor-pointer'>{blog.title || 'No Title'}</h3>
          <p className='mb-2 text-gray-600'>
            <FaUser className='inline-flex items-center mr-2' />
            {blog.author || 'Unknown Author'}
          </p>
          <p className='text-gray-500 text-sm'>Published: {blog.published_date || 'Unknown Date'}</p>
        </Link>
      ))}
    </div>
  );
};

export default Blogcard;
