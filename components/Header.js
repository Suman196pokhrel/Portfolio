import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Header = ({socials}) => {
    return (
        <header className='sticky top-0 flex items-start 
        p-0 justify-between max-w-7xl mx-auto z-20 md:p-5
        md:items-center '>

            {/* social Icons  */}
            <motion.div
                
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.3
                }}
            >
                {socials?.map((social,i)=>(
                    <SocialIcon 
                    key={social._id} 
                    url={social.url} 
                    fgColor='gray' 
                    bgColor='transparent'
                     
                    />
                ))}

            </motion.div>


            <motion.div className='flex flex-row items-center text-gray-300 cursor-pointer'
                initial={{
                    x: 500,
                    opacity: 0.5,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    scale: 1,
                    opacity: 1
                }}
                transition={{
                    duration: 1.3
                }}
            >
               
                    <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' url='#contact'/>
               
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>

            </motion.div>


        </header >
    )

}

export default Header