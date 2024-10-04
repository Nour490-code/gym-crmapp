import React from 'react';
import { Link } from 'react-scroll';

export default function Nav({ linkText, linkHref }) {
  return (
    <div>
      <Link 
        to={linkHref} 
        smooth={true} 
        duration={500} 
        className="relative cursor-pointer px-2 sm:px-4 md:px-6 text-white hover:text-transparent bg-clip-text bg-gradient-to-l from-red-600 to-black bg-[length:0%_100%] hover:bg-[length:100%_100%] transition-all duration-300 ease-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-600 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-700"
      >
        {linkText}
      </Link>
    </div>
  );
}
