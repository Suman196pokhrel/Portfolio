import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'


const Skill = ({ directionLeft ,skill}) => {
  return (
    <div  className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32
        filter group-hover:grayscale transition duration-300 ease-in-out'
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill.image).url()}
        alt='skill dp'
      />
      <div className='flex items-center justify-center absolute opacity-0 hover:opacity-80 
      transition duration-300 ease-in-out group-hover:bg-white  w-24 h-24 xl:w-32 xl:h-32 rounded-full z-0'>
        <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
      </div>

    </div>
  )
}

export default Skill