import React from 'react';
import "./Button.css";

function Button({ text }) {
  return (
    <button
        className="bracket-button relative border-[0.4px] border-white/15 bg-white/10 hover:bg-white/5 text-white text-[18px] font-bold px-3 sm:px-6 md:px-10 py-2 sm:py-3 text-xs sm:text-sm cursor-pointer transition-all duration-150 ease-in-out">
        {text}
    </button>
  )
}

export default Button;
