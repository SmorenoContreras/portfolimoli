import React, { useState, useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import { FaUser } from "react-icons/fa";
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  console.log('the active link is: ', activeLink)

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Add scroll event listener for react-scroll
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // Set the active link when a section is clicked
  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <div
      className={`${
        isScrolled ? 'bg-white shadow-xl transition-all ease-in-out duration-500 delay-75' : 'bg-[#F1F1F1] transition-all ease-in-out duration-500 delay-75'
      } w-screen flex flex-row  h-[65px] items-center px-[175px] justify-between overflow-y-auto overflow-x-hidden text-[14px] fixed z-[50] top-0 group`}
    >
      {/* Developer Name */}
      <div>
        <h1 className='text-[22px] ml-0 text-[#3b82F6] font-bold flex flex-row items-center gap-x-3'><FaUser/> Stephanie Contreras</h1>
      </div>
      {/* Navigation Titles */}
      <motion.div 
      className='flex flex-row gap-x-7 px-6 font-medium text-[#1e1e1e] text-opacity-80'
        initial="hidden" 
        animate="show" 
         variants={fadeIn('down', 0.1)}
      >
        <Link
          to='aboutMeSection'
          spy={true}
          smooth={true}
          duration={500}
          className={`${
            activeLink === 'aboutMeSection' ? 'active-css text-[#3b82F6] ' : ''
          } transition-all duration-200 ease-in-out z-[20]cursor-pointer hover:cursor-pointer hover:text-[#3b82F6] `}
          onSetActive={() => handleSetActive('aboutMeSection')}
        
        >
          ABOUT ME
        </Link>
        <Link
          to='portfolioSection'
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          className={`${
            activeLink === 'portfolioSection' ? 'text-[#3b82F6] active-css' : ''
          } transition-all duration-200 ease-in-out z-[20] cursor-pointer hover:text-[#3b82F6]`}
          onSetActive={() => handleSetActive('portfolioSection')}
          onClick={()=>handleSetActive('portfolioSection')}
        >
          PORTFOLIO
        </Link>
        <Link
          to='contactsSection'
          spy={true}
          smooth={true}
          duration={600}
          className={`${
            activeLink === 'contactsSection' ? 'text-[#3b82F6] active-css' : ''
          } transition-all duration-200 ease-in-out z-[20] cursor-pointer hover:text-[#3b82F6]`}
          onSetActive={() => handleSetActive('contactsSection')}
        >
          CONTACT
        </Link>
        <Link
          to='resumeSection'
          spy={true}
          smooth={true}
          duration={500}
          offset={-20}
          className={`${
            activeLink === 'resumeSection' ? 'text-[#3b82F6] active-css' : ''
          } transition-all duration-200 ease-in-out z-[20] cursor-pointer hover:text-blue-500`}
          onSetActive={() => handleSetActive('resumeSection')}
          onClick={() => handleSetActive('resumeSection')}
        >
          RESUME
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;