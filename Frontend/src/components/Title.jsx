import React from 'react';

function Title({ text1, text2 }) {
  return (
    <div className='inline-flex gap-2 items-center mb-3 title'>
      <p className='text-[#b6bee5]'>{text1} <span className='text-gray-300 font-medium'>{text2}</span></p>
      <span className='w-8 sm:w-12 h-[1px] bg-gray-200'></span>
    </div>
  )
}

export default Title;
