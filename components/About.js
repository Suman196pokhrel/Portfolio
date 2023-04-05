import React from 'react'
import {motion} from 'framer-motion'
import { urlFor } from '../sanity'




const About = ({pageInfo}) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center 
    md:text-left md:flex-row max-w-7xl justify-center
    mx-auto items-center px-5 '>
    
        <h3 className='absolute  top-[80px] md:top-[150px] md:mt-[-50px] xl:top-[150px] text-gray-500
        uppercase tracking-[20px] text-2xl'>About</h3>


        <motion.img 
         src={urlFor(pageInfo?.profilePic).url()}
        className='mt-[200px] md:mt-[100px]  h-[300px] w-[200px]  md:mb-0 flex-shrink-0 object-cover 
        md:rounded-lg md:h-[400px]  md:w-[300px]    xl:h-[500px] xl:w-[400px]' 

        initial={{
            x:-200,
            opacity:0,
            borderRadius:"0%"
        }}
        whileInView={{
            x:0,
            opacity:1,
            borderRadius:"10%"

            
        }}
        transition={{
            duration:1
        }}
        
        />

        <div className='md:mt-28 space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here's a &nbsp;
                <span className='underline decoration-[#F7AB0A]/50'>Little Background</span> 
                &nbsp;
                </h4>
                <p className='lg:text-lg md:text-sm sm:text-sm text-justify'>
                    {pageInfo?.backgroundInformation}
                </p>
        </div>
        
    
    </motion.div>
  )
}

export default About 