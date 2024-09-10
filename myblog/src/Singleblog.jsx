import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaClock, FaUser } from 'react-icons/fa6'; // Combined import
import Sidebar from './components/Sidebar';

const Singleblog = () => {
  const data = useLoaderData();

  // Ensure data[0] exists to prevent destructuring errors
  if (!data || !data[0]) {
    return <div>Blog not found</div>; // Handle the case where data is missing
  }

  const { title, image, category, author, published_date, reading_time, content } = data[0];

  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog</h2>
      </div>

      <div className='max-w-7xl mx-auto my-12  flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
          <div>
            <img src={image} alt='' className='w-full mx-auto rounded' />
          </div>
          <h2 className='text-3xl font-bold mb-4 text-blue-500 cursor-pointer mt-8'>{title}</h2>
          <p className='mb-3 text-gray-600'>
            <FaUser className='inline-flex items-center mr-2' />{author} | {published_date}
          </p>
          <p className='mb-3 text-gray-600'>
            <FaClock className='inline-flex items-center mr-2' />{reading_time}
          </p>
          <p className='text-base text-gray-600 mb-6'>{content}</p>
          <div className='text-base text-gray-500'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quod mollitia eveniet dolorum dignissimos labore earum enim, ut quaerat beatae veritatis molestias aspernatur? Dicta nihil rem illo eum nulla quos.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quod mollitia eveniet dolorum dignissimos labore earum enim, ut quaerat beatae veritatis molestias aspernatur? Dicta nihil rem illo eum nulla quos.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quod mollitia eveniet dolorum dignissimos labore earum enim, ut quaerat beatae veritatis molestias aspernatur? Dicta nihil rem illo eum nulla quos.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quod mollitia eveniet dolorum dignissimos labore earum enim, ut quaerat beatae veritatis molestias aspernatur? Dicta nihil rem illo eum nulla quos.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quod mollitia eveniet dolorum dignissimos labore earum enim, ut quaerat beatae veritatis molestias aspernatur? Dicta nihil rem illo eum nulla quos.</p>
          </div>
        </div>
        <div className='lg:w-1/2'>
            <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Singleblog;
