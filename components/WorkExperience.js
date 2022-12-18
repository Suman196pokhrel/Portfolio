import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'


const WorkExperience = ({experiences}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left
        md:flex-row max-w-full px-5 justify-evenly mx-auto items-center 
    '>

      <h3 className='absolute top-24 uppercase tracking-[13px] md:tracking-[20px]  text-gray-500 text-2xl'>Experience</h3>

      <div className='w-full mt-[80px] flex space-x-7 overflow-x-scroll p-10 snap-x snap-mandatory
         scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin
        '>
        {/* Experience Cards */}
        {experiences?.map((experience, i) => (

          <ExperienceCard key={experience._id} experience={experience}/>

        ))}



      </div>


    </motion.div>
  )
}

export default WorkExperience