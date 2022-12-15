import React from 'react'
import {SocialIcon} from 'react-social-icons'

const Header = () => {
    return (
        <header className='sticky top-0 flex items-start p-5 justify-between max-w-7xl mx-auto z-20 md:items-center'>

            {/* social Icons  */}   
            <div>
                
                <SocialIcon url='https://twitter.com/Suman98908583'fgColor='gray' bgColor='transparent'/>
                <SocialIcon url='https://www.instagram.com/spokhrel196/'fgColor='gray' bgColor='transparent'/>
                <SocialIcon url='https://www.linkedin.com/in/suman-pokhrel-a645a6185/'fgColor='gray' bgColor='transparent'/>
                <SocialIcon url='https://github.com/Suman196pokhrel'fgColor='gray' bgColor='transparent'/>

            </div>

            <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>

            </div>

        </header>
    )

}

export default Header