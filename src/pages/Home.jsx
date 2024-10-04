import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import Nav from '../Components/Nav';
import Fac from './Fac';
import Prog from './Prog';
import Last from './Last';
import Login from './Login';
import Profile from './Profile';
export default function Home() {
  return (
    <div className="relative w-full h-screen text-center  ">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/6390166-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Content */}
      <div className='w-full relative z-10  flex items-center py-2 bg-black bg-opacity-25'>
      <div className="flex-grow h-10 flex lg:gap-36 md:gap-20 sm:gap-x-16 text-white font-bold text-[15px] items-center justify-center">
  <Nav linkText="Home" linkHref="Home" />
  <Nav linkText="About us" linkHref="About" />
  <Nav linkText="Facilities" linkHref="Facilities" />
  <Nav linkText="Programs" linkHref="Programs" />
</div>

      {/* Icon on the Right */}
      <div className='py-2 px-2'>
        <IoPersonOutline size={20} className="text-red-700" />
      </div>
    </div>
     <div className=' flex-col   lg:py-32 px-11'>

    <p className='relative z-10 text-[80px] font-extrabold bg-clip-text text-transparent bg-gradient-to-l from-red-700 to-black'>
  GET  READY <br /> TO CHANGE
</p>
 <button className='relative z-10  bg-black w-26 text-white   h-16 font-bold   rounded-xl  p-5 '> Discover more </button>
     </div>

{/* 
<div id='Programs'>

    <Prog/>
</div>
<div id='About'>

    <Last/>
</div>
<div>
   <Login/>
</div>
<div>
   <Profile/>
</div> */}
    </div>
  );
}
