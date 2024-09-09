import React from 'react'

const Pagination=({onpageChange, currentPage, blogs, pageSize})=> {

  const totalPages = Math.ceil(blogs.length/pageSize);

  const renderPagination = () =>{
    return Array.from({length: totalPages},(_, i)=> i+1).map((pageNumber)=>(
    <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
      <a href="#" onClick={()=>handlePages(pageNumber)}>{pageNumber}</a>
    </li>))
  }
  return (
    <ul className='pagination my-8 gap-4 flex-wrap'>
      <li>
        <button onClick={()=>onpageChange(currentPage-1)} disabled={currentPage===1}>Previous</button>
      </li>
      <div className='flex gap-1'>{renderPagination()}</div>
      <li>
        <button onClick={()=>onpageChange(currentPage+1)} disabled={currentPage ===totalPages}>Next</button>
      </li>
    </ul>
  )
}

export default Pagination