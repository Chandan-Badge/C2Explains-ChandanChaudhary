import React from 'react'
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/bestSeller';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
  return (
    <div className='flex items-center justify-center sm:justify-end flex-col w-full pl-0 sm:pl-28 md:pl-52 min-h-[80vh]'>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <NewsletterBox />

    </div>
  )
}

export default Home;
