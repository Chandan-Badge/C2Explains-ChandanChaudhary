import React, { useState } from 'react'

function Collection() {

  const [showFilter, setShowFilter] = useState(true);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 mt-20 text-[#fff] pl-64'>

      {/* Filter option */}
      <div className='min-w-40'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER</p>
        {/* Category Filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"}`}>
          <p className='mb-3 text-start font-medium'>CATEGORIES</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-300'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Button"} /> Button
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Card"} /> Card
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Checkbox"} /> Checkbox
            </p>

          </div>

        </div>
        
      </div>
      
    </div>
  )
}

export default Collection;
