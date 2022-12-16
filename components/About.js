import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center 
    md:text-left md:flex-row max-w-7xl justify-center
    mx-auto items-center px-5 space'>
    
        <h3 className='absolute top-24 sm:text-gray-500
        uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <br />
        <br />

        <motion.img src='/DP_2_CROPPED.jpg' 
        className='mt-5 h-[300px] w-[200px]  md:mb-0 flex-shrink-0
        object-cover 
        md:rounded-lg md:h-[400px]  md:w-[300px] 
        xl:h-[500px] xl:w-[400px]' 

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

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here's a &nbsp;
                <span className='underline decoration-[#F7AB0A]/50'> ittle</span> 
                &nbsp;background
                </h4>
                <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis quos sequi ipsam voluptas itaque quod eum recusandae at quidem provident delectus illum dolor, totamboriosam dolore dolorum? Veritatis id ipsa nihil qui ut modi non, dignissimos atque, beatae reiciendis, ipsam eligendi dolor odio quaerat inventore commodi molestias necessitatibus accusamus optio statum. Atque eius expedita hil qui ut modi non, dignissimos atque, beatae reiciendis, ipsam eligendi dolor odio quaerat inventore commodi molestventore commodi molestias necessitatibus accusamus optio statum. Atque eius expedita hil qui ut modi non, dias necessitatibus accusamus optio similique impediipsa dolore perspiciatis?</p>
        </div>
        
    
    </motion.div>
  )
}

export default About 