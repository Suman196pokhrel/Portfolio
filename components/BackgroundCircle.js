import React from 'react'
import { motion } from 'framer-motion'


const BackgroundCircle = () => {
  return (
    <motion.div className='relative flex justify-center items-center'
    initial={{
        opacity:0
    }}
    animate={{
        scale:[0.3,1,2],
        opacity:[0.3,1,0],
        borderRadius:["20%","20%","50%","80%","20%"]
        
    }}

    transition={{
        duration:2.5,
        repeat:Infinity
        
        
    }}
    >

        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
        <div className='absolute border border-[#F7AB0A] opacity-20 rounded-full h-[350px] w-[350px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
        <div className='absolute border border-[#F7AB0A] opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse '/>
        <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 animate-ping'/>

        <div className='border'/>
    </motion.div>
  )
}

export default BackgroundCircle