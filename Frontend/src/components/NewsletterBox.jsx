import React from 'react';

function NewsletterBox() {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert("Thanks for subscribing us.")
    }

  return (
    <div className='text-center my-10 flex flex-col gap-2 w-max h-max'>
        <p className='text-gray-300 font-medium text-xl sm:text-2xl'>Subscribe now & get 20% off</p>
        <p className='m-auto text-xs sm:text-sm md:text-base text-gray-300'>Subscribe and get latest notification.</p>

        <form onSubmit={onSubmitHandler} action="" className='flex items-center mx-auto mt-4 border border-[#b6bee5]/50'>
            <input type="email" name="" id="" placeholder='Enter your email' className='outline-none w-52 sm:w-72 xl:w-96 px-3 py-1.5 sm:py-2.5 flex-1 text-sm sm:text-base' required />
            <button type='submit' className='bg-[#181e33] hover:bg-[#181e33]/70 active:bg-[#181e33]/40 text-[#aeb8e7] font-semibold transition-all px-3 sm:px-6 md:px-10 py-2 sm:py-3 text-xs sm:text-sm'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox;
