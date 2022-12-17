import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {

    const projects = [1, 2, 3, 4, 5, 6]

    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
            className='h-screen flex relative flex-col md:flex-row overflow-hidden text-left max-w-full justify-evenly
        mx-auto items-center z-0'
        >

            <h3 className='absolute top-24 text-gray-500 uppercase tracking-[20px] text-2xl'>Projects</h3>


            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
             scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin
            '>
                {/* Each Projects  */}
                {projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center 
                        justify-center p-20 md:p-44 h-screen' key={i}>
                        <motion.img
                            initial={{y:-300,opacity:0}}
                            transition={{duration:1.2}}
                            whileInView={{opacity:1,y:0}}
                            viewport={{once:true}}
                            src="https://th.bing.com/th/id/OIP.-NHfsnk5mf2tjwKlJvBpEQHaEo?pid=ImgDet&rs=1"
                            alt="smthing"
                        />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>

                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]'>
                                    Case Study {i + 1} of {projects.length}:
                                </span>Calculator App
                            </h4>

                            <p className='text-lg text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est maiores adipisci, harum dolore fuga eligendi vitae corporis earum? Labore suscipit magni corrupti! Laborum, optio dicta ut reprehenderit possimus, eius iste odio placeat modi tenetur saepe in voluptatem molestiae exercitationem dolore doloribus totam cupiditate repudiandae reprehenderit, saepe praesentium?
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