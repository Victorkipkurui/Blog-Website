import React, { useEffect, useState } from 'react';
import Blogcard from './Blogcard';
import Pagination from './Pagination';
import Category from './Category';
import Sidebar from './Sidebar';

const Blogpage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const pageSize = 12; 
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [activeCategory, setActiveCategory] = useState(null); 

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:3000/blogs?page=${currentPage}&limit=${pageSize}`;

      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }

    fetchBlogs();
  }, [currentPage, selectedCategory]);

  const handlePages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); 
    setActiveCategory(category);
  };

  return (
    <div>
      {/* Category section */}
      <div>
        <Category
          selectedCategory={selectedCategory}
          handleCategory={handleCategory}
          activeCategory={activeCategory}
        />
      </div>

      {/* Blog section */}
      <div className='flex flex-col lg:flex-row gap-12'>
        <Blogcard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
        <div>
          <Sidebar />
        </div>
      </div>

      {/* Pagination section */}
      <div>
        <Pagination onPageChange={handlePages} blogs={blogs} currentPage={currentPage} pageSize={pageSize} />
      </div>
    </div>
  );
};

export default Blogpage;
