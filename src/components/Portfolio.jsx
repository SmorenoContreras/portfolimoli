import React from 'react'
import WorkSlider from './WorkSlider'
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants';
import { useEffect } from 'react';

const Portfolio = () => {

  

  return (
    <div className='flex flex-row xl:h-[85vh] h-[100vh] lg:py-[90px] lg:h-[100vh] bg-white py-[100px] xl:py-[125px]'
    id="portfolioSection"
    >
      <div className='flex w-[50%] xl:ml-[175px] lg:ml-[100px] flex-col gap-y-6 py-4'>
        <motion.div className='xl:text-[50px] font-bold lg:text-[42px]'
         initial="hidden" 
         animate="show" 
         variants={fadeIn('right', 0.3)}
        >
        My Work <span className='text-blue-500'>.</span>
        </motion.div>
        <motion.div className='w-[70%] xl:text-[18px] lg:text-[16px] text-[#1e1e1e] text-opacity-70'
          initial="hidden" 
          animate="show" 
          variants={fadeIn('right', 0.6)}
        >
          Explore my portfolio: A showcase of Diverse projects highlighting creativity, innovation, and dedication to excellence.
        </motion.div>
      </div>
      <div className='flex w-[50%] xl:mr-[160px] lg:mr-[90px]'>
      <WorkSlider/>
      </div>
    </div>
  )
}

export default Portfolio