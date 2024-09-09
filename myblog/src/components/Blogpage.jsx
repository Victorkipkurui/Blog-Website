import React, { useEffect } from 'react'
import { useState } from 'react'
import Blogcard from './Blogcard';


const Blogpage = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
   async function fetchBlogs() {

        const response = await fetch('http://localhost:3000/blogs');
        const data = await response.json();
        setBlogs(data);
      } 
      fetchBlogs();
      console.log(blogs);
  },[])
  return (
    <div>
      {/*category section*/}
      <div>Page Category</div>

      {/*blog section*/}
      <div><Blogcard blogs = {blogs}></Blogcard></div>
      {/*pagination section*/}
      <div></div>
    </div>
  )
}

export default Blogpage