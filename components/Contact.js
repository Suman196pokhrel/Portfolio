import { motion } from 'framer-motion'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import {
    PhoneIcon,
    MapIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline'

const Contact = ({ pageInfo }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = formData => {
        console.log(formData);
        // window.location.href = `mailto:emusk196@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData}.${formData.message} (${formData.email})`


    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-[2000px]  xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
        >

            <h3 className='absolute top-24 text-gray-500 uppercase tracking-[20px] text-2xl'>Contact</h3>

            <div className='mt-[100px] flex flex-col space-y-10 w-screen items-center'>

                {/* <h4 className='text-2xl md:text-4xl font-semibold text-center'>I have got just what you need.{" "}
                    <span className='decoration-[#F7AB0A]/50 underline'>Let's Talk</span>
                </h4> */}

                <div className='space-y-5 md:space-y-10'>
                    <motion.div 
                    initial={{
                        y: -40,
                        opacity:0
                    }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y:0 }}
              
                    className='flex items-center space-x-5'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-xl md:text-2xl'>+{pageInfo?.phoneNumber}</p>
                    </motion.div>
                    <motion.div
                     initial={{
                        y: -120,
                        opacity:0
                    }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y:0 }}
                     className='flex items-center space-x-5'>
                        <MapIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-xl md:text-2xl'>{pageInfo?.address}</p>
                    </motion.div>
                    <motion.div 
                     initial={{
                        y: -160,
                        opacity:0
                    }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y:0 }}
                    className='flex items-center space-x-5'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-xl md:text-2xl'>{pageInfo?.email}</p>
                    </motion.div>
                </div>



                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col space-y-2 w-screen md:w-fit mx-auto p-5'>
                    <div className='flex  flex-col  md:space-x-2 md:flex-row space-y-2 items-center justify-center md:w-fit'>
                        <motion.input 
                         initial={{
                        y: 20,
                        opacity:0
                    }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y:0 }}
                        required {...register('name')} placeholder='Name' className='contactInput' type="name" />
                        <motion.input 
                         initial={{
                        y: 80,
                        opacity:0
                    }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y:0 }}
                        required {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <motion.input 
                     initial={{
                        y: 120,
                        opacity:0
                    }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y:0 }}
                    required {...register('subject')} placeholder='subject' className='contactInput' type="text" name="" id="" />
                    <motion.textarea 
                     initial={{
                        y: 160,
                        opacity:0
                    }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y:0 }}
                    required {...register('message')} placeholder='Message' className='contactInput' />
                    <motion.button 
                     initial={{
                        y: 200,
                        opacity:0
                    }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y:0 }}
                    type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>Submit</motion.button>
                </form>


            </div>

        </motion.div>
    )
}

export default Contact

