// AboutMe.js
import React from 'react';
import pic from '../assets/pic.jpg';
import ParticlesComponent from './ParticlesComponent';
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants';

const AboutMe = () => {
  return (
    <div className='relative h-screen flex w-screen'
    id="aboutMeSection"
    >
      <ParticlesComponent className='absolute inset-0 z-0' />
      <div className='flex w-[60%] items-center justify-center z-10 mt-[-60px] '>
        <div className='flex flex-col gap-y-1 w-[700px] ml-[175px] '>
          <motion.div
          transition={{ duration: 2 }} // Transition duration
          className='text-[30px]'
          initial="hidden" 
          animate="show" 
          variants={fadeIn('up', 0.3)}
          >
          Hi,
          </motion.div>
          <motion.div className='text-[52px] text-[#1e1e1e] font-bold'
            initial="hidden" 
            animate="show" 
            variants={fadeIn('up', 0.6)}
          >
            I'M STEPHANIE <span className='text-yellow-500'>CONTRERAS</span>
          </motion.div>
          <motion.div className='text-gray-600 w-[80%] text-[18px]'
            initial="hidden" 
            animate="show" 
            variants={fadeIn('up', 0.8)}
          >
            Berkeley Full-Stack Web Development Student from Los Angeles, California. Born and raised in the San Fernando Valley.
          </motion.div>
        </div>
      </div>
      <motion.div className='flex w-1/2 items-center justify-center z-10 pr-12  mt-[-50px]'
        initial="hidden" 
        animate="show" 
        variants={fadeIn('down', 0.6)}
      >
        <img src={pic} alt="" className='h-[380px] w-[380px] rounded-[50%] object-cover'/>
      </motion.div>
    </div>
  );
};

export default AboutMe;