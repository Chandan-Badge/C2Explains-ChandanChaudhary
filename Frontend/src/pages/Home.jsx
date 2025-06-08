import React from 'react'
import Hero from '../components/hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/bestSeller';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
  return (
    <div className='flex items-center justify-center sm:justify-end flex-col w-full pl-0 sm:pl-56'>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <NewsletterBox />

    </div>
  )
}

export default Home;
