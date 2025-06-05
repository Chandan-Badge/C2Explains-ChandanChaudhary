import React from 'react'
import Hero from '../components/hero';
import LatestCollection from '../components/LatestCollection';

const Home = () => {
  return (
    <div className='flex items-center justify-center sm:justify-end flex-col w-full sm:w-[75vw] md:w-[80vw] lg:w-[85vw] right-0 absolute'>
      <Hero />
      <LatestCollection />

    </div>
  )
}

export default Home;
