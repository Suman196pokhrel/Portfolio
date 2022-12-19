import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity'

const Projects = ({projects}) => {

    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
            className='h-screen flex relative flex-col md:flex-row overflow-hidden text-left max-w-full justify-evenly
        mx-auto items-center z-0'
        >

            <h3 className='absolute top-24 text-gray-500 uppercase tracking-[20px] text-2xl'>Projects</h3>


            <div className='mt-12 md:mt-0 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
             scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin
            '>
                {/* Each Projects  */}
                {projects?.map((project, i) => (
                    <div className=' w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center 
                        justify-center p-5 md:p-44 h-screen' key={project._id}>
                        <motion.img
                            initial={{y:-300,opacity:0}}
                            transition={{duration:1.2}}
                            whileInView={{opacity:1,y:0}}
                            viewport={{once:true}}
                            src={urlFor(project.image).url()}
                            alt="smthing"
                        />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>

                            <h4 className='text-2xl md:text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]'>
                                    Case Study {i + 1} of {projects.length}:
                                </span>{project.title}
                            </h4>

                            <p className='text-lg text-center md:text-left'>
                                {project.summary}
                            </p>
                        </div>
                    </div>
                ))}


            </div>



            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>
            </div>


        </motion.div>
    )
}

export default Projects