import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Header = () => {
    return (
        <header className='sticky top-0 flex items-start 
        p-5 justify-between max-w-7xl mx-auto z-20 
        md:items-center'>

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

                <SocialIcon url='https://twitter.com/Suman98908583' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://www.instagram.com/spokhrel196/' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://www.linkedin.com/in/suman-pokhrel-a645a6185/' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://github.com/Suman196pokhrel' fgColor='gray' bgColor='transparent' />

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