import React, { useEffect, useState } from 'react';
import Blogcard from './Blogcard';
import Pagination from './Pagination';
import Category from './Category';
import Sidebar from './Sidebar';

const Blogpage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Fixed naming for consistency
  const pageSize = 12; // Blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null); // Consistent camelCase
  const [activeCategory, setActiveCategory] = useState(null); // Consistent camelCase

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:3000/blogs?page=${currentPage}&limit=${pageSize}`;

      // Filtering by category
      if (selectedCategory) {
        url += `&category=${selectedCategory}`; // Added '=' after category
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  // Page change handler
  const handlePages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Category change handler
  const handleCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when category changes
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
