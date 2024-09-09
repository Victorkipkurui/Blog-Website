import React, { useEffect } from 'react'
import { useState } from 'react'
import Blogcard from './Blogcard';
import Pagination from './Pagination';


const Blogpage = () => {

  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentpage] =useState(1);
  const pageSize = 12 ;//blogs per page
  const [selectedCategory, setselectedCategory] = useState(null);
  const [activeCategory, setactivecategory] = useState(null);

  useEffect(()=>{
   async function fetchBlogs() {
      let url = `http://localhost:3000/blogs?page=${currentPage}$limit=${pageSize}`;

      //filtering by category{}
      if(selectedCategory){
        url +=`&category${selectedCategory}`;
      }
        const response = await fetch(url);
        const data = await response.json();
        setBlogs(data);
      } 
      fetchBlogs();
      
  },[currentPage,pageSize,selectedCategory])

  //page changing button
  const handlePages = (pagenumber)=>{
    setCurrentpage(pagenumber);

  const handleCategory = (category)=>{
    setselectedCategory(category);
    setCurrentpage(1);
    setactivecategory(category);
  }
  }
  return (
    <div>
      {/*category section*/}
      <div>Page Category</div>

      {/*blog section*/}
      <div><Blogcard blogs = {blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}></Blogcard></div>
      {/*pagination section*/}
      <div>
        <Pagination onpageChange={handlePages} blogs={blogs} currentPage={currentPage} pageSize={pageSize}></Pagination>
      </div>
    </div>
  )
}

export default Blogpage