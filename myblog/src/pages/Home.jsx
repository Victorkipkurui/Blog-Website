import React from 'react'
import Banner from '../components/Banner'
import Blogpage from '../components/Blogpage'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='max-w-7xl mx-auto'>
        <Blogpage></Blogpage>
      </div>
    </div>
  )
}

export default Home