import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity'

const ExperienceCard = ({ experience }) => {
    return (
        <motion.article className=' flex flex-col rounded-lg items-center space-y-5 flex-shrink-0
        w-screen md:w-[650px]  snap-center bg-[#292929] p-10 md:px-2  opacity-40 hover:opacity-100
        cursor-pointer transition-opacity duration-300 overflow-hidden '>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full md:rounded-full  object-cover object-center'
                src={urlFor(experience?.companyImage).url()}
                alt="exp_1"
            />


            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light'>CEO of PAPAFAM</h4>
                <p className='font-bold text-xl mt-1'>PAPAFAM</p>
                <div className='flex space-x-3 my-2'>

                    {experience.technologies?.map((tech) => (

                        <img key={tech._id} src={urlFor(tech.image).url()}
                            className='h-10 w-10 rounded-full'
                        />
                    ))}



                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()} ---  
                    {experience.isCurrentlyWorkingHere ? "present":new Date(experience.dateEnded).toDateString()} 
                </p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {experience.points?.map((points,i) => (

                        <li key={i}>{points}</li>
                    ))}


                </ul>
            </div>

        </motion.article>
    )
}

export default ExperienceCard