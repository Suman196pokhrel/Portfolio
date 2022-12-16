import React from 'react'
import { motion } from 'framer-motion'

const ExperienceCard = () => {
    return (
        <motion.article className=' flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] xl:w-[500px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100
        cursor-pointer transition-opacity duration-300 overflow-hidden '>
            <motion.img
            initial={{y:-100,opacity:0}} 
            transition={{duration:1.2}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className='w-32 h-32 rounded-full md:rounded-full  object-cover object-center'
            src="https://th.bing.com/th/id/R.1f68cd337bec15a87486b7e953dbb01f?rik=oFSQsLIgU%2be5Nw&riu=http%3a%2f%2fwww.misgl.com%2fwp-content%2fuploads%2f2015%2f09%2fgoogle_logo_03-818x600.jpg&ehk=T8yozub64LX0yyqx9L0LL6R0%2bFhPxVnLB4kbElKoMCg%3d&risl=&pid=ImgRaw&r=0" 
            alt="exp_1"
            />


            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>CEO of PAPAFAM</h4>
                <p className='font-bold text-2xl mt-1'>PAPAFAM</p>
                <div className='flex space-x-3 my-2'>
                    <img src='https://th.bing.com/th/id/OIP.pqcPskVdTrJqfhZ-Z49AtQHaHn?pid=ImgDet&rs=1'
                    className='h-10 w-10 rounded-full'
                    />
                    <img src='https://th.bing.com/th/id/OIP.pqcPskVdTrJqfhZ-Z49AtQHaHn?pid=ImgDet&rs=1'
                    className='h-10 w-10 rounded-full'
                    />
                    <img src='https://th.bing.com/th/id/OIP.pqcPskVdTrJqfhZ-Z49AtQHaHn?pid=ImgDet&rs=1'
                    className='h-10 w-10 rounded-full'
                    />

                </div>
                <p className='uppercase py-5 text-gray-300'>Started work .... Ended</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary points summary Summary points summary summary summary </li>
                    <li>Summary points summary Summary points summary summary summary </li>
                    <li>Summary points summary Summary points summary summary summary </li>
                    <li>Summary points summary Summary points summary summary summary </li>

                </ul>
            </div>
        </motion.article>
    )
}

export default ExperienceCard