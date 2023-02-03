import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'


const Skill = ({ directionLeft ,skill}) => {
  return (
    <div  className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0
        }}
        className='rounded-full border border-gray-500 object-cover w-14 h-14 md:w-32 md:h-32
        filter group-hover:grayscale  transition ease-out'
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill.image).url()}
        
        alt='skill dp'
      />
      <div className='flex items-center justify-center absolute opacity-0 hover:opacity-80 
      transition duration-300 ease-in group-hover:bg-white  w-14 h-14 md:w-32 md:h-32 rounded-full z-0'>
        <p className='text-xs lg:text-md xl:text-lg font-bold text-black opacity-100'>{skill.title}</p>
      </div>

    </div>
  )
}

export default Skill