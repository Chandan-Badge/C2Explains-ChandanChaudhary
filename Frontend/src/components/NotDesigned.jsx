import React from 'react';

function NotDesigned() {
    return (
        <div className='text-gray-300 text-base pt-10 md:pt-20 flex items-center justify-center flex-col gap-10'>
            <div class="bar w-48 h-3 bg-[#b6bee5] rotate-[-15deg] rounded-[30px]">
                <div class="ball relative w-12 h-12 bottom-12 bg-white rounded-full after:content-[''] after:absolute after:w-1 after:h-1 after:top-6 after:right-1.5 after:bg-black after:rounded-full"></div>
            </div>

            Currently in Developing Phase...
        </div>
    )
}

export default NotDesigned;
