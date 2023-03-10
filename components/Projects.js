import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity'

const Projects = ({ projects }) => {
    // console.log(projects)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-[2000px]  xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
        >

            <h3 className='absolute top-24 text-gray-500 uppercase tracking-[20px] text-2xl'>PROJECTS</h3>

            <div className='mt-[80px] grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 p-6'>

                {projects?.map((project, i) => (
                    <div className='relative p-1 rounded-lg flex-col justify-center text-center 
                                    content-center cursor-pointer  h-28  md:h-72 w-full md:w-full  m-4 object-fit 
                                    ' 
                        key={project._id}
                        onClick={()=>window.open(project.linkToBuild,'_blank', 'noopener,noreferrer')}
                    >
                        <motion.img
                            className=' border border-gray-500  rounded-xl p-0 m-0
                             h-full w-full'
                            initial={{
                                y: -150,
                                opacity: 0
                            }}
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            src={urlFor(project.image).url()}

                            alt='skill dp'
                        />
                        <p className='text-xs md:text-xl text-slate-300 '
                        >{project.title}</p>
                    </div>



                ))}

            </div>


        </motion.div>
    )
}

export default Projects





// (
//     <motion.div
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1.5}}
//         className='h-screen flex relative flex-col md:flex-row overflow-hidden text-left max-w-full justify-evenly
//     mx-auto items-center z-0'
//     >

//         <h3 className='absolute top-24 text-gray-500 uppercase tracking-[20px] text-2xl'>Projects</h3>


//         <div className='mt-12 md:mt-0 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
//          scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin
//         '>
//             {/* Each Projects  */}
//             {projects?.map((project, i) => (
//                 <div className=' w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center 
//                     justify-center p-5 md:p-44 h-screen' key={project._id}>
//                     <motion.img
//                         initial={{y:-300,opacity:0}}
//                         transition={{duration:1.2}}
//                         whileInView={{opacity:1,y:0}}
//                         viewport={{once:true}}
//                         src={urlFor(project.image).url()}
//                         alt="smthing"
//                     />
//                     <div className='space-y-10 px-0 md:px-10 max-w-6xl'>

//                         <h4 className='text-2xl md:text-4xl font-semibold text-center'>
//                             <span className='underline decoration-[#F7AB0A]'>
//                                 Case Study {i + 1} of {projects.length}:
//                             </span>{project.title}
//                         </h4>

//                         <p className='text-lg text-center md:text-left'>
//                             {project.summary}
//                         </p>
//                     </div>
//                 </div>
//             ))}


//         </div>



//         <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>
//         </div>


//     </motion.div>
// )