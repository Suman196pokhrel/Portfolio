import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { urlFor } from '../sanity'


const Hero = ({pageInfo}) => {

    const [text, count] = useTypewriter({
        words: [`Hi , The name's ${pageInfo?.name}`, `A guy who loves technology`],
        loop: true,
        typeSpeed:40,
        deleteSpeed:40,
        delaySpeed:2000
        
    })

    return (
        <motion.div
            className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden
            md:bg-black'
            initial={{

            }}
        >

            <BackgroundCircle />


            <motion.img className='relative rounded-full h-[250px] w-[250px] mx-auto object-cover'
                src={urlFor(pageInfo?.heroImage).url()}
                alt="Profile Picture of Suman" 
                initial={{
                    opacity:0,
                    scale:[0.1,0.3,0.7]
                }}
                animate={{
                    opacity:1,
                    scale:[1,1.5,1]
                    
            
                }}
                transition={{
                    duration:1
                }}
                />
            
            
            
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[5px]'>{pageInfo.role}</h2>
                <h1 className='text-3xl lg:text-5xl font-semibold px-10'>
                    <span className=''>{text}</span>
                    <Cursor cursorColor='yellow' />
                </h1>

                <div className='pt-10'>
                    <Link href='#about'>
                    <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                    </Link>

                </div>


            </div>



        </motion.div>
    )
}

export default Hero