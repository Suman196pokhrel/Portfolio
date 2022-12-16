import { motion } from 'framer-motion'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import {
    PhoneIcon,
    MapIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline'

const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = formData => {
        // console.log(formData);
        window.location.href = `mailto:emusk196@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData}.${formData.message} (${formData.email})`
        

    }

    return (
        <motion.div
            className='h-screen relative flex flex-col text-center md:text-left 
            md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >

            <h3 className='absolute top-24 text-gray-500 uppercase tracking-[20px] text-2xl'>Contact</h3>

            <div className='flex flex-col space-y-10'>

                <h4 className='text-4xl font-semibold text-center'>I have got just what you need.{" "}
                    <span className='decoration-[#F7AB0A]/50 underline'>Let's Talk</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+97798980909</p>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <MapIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>123 Lane, Baker Street</p>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>emusk196@gmail.com</p>
                    </div>
                </div>



                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input required {...register('name')} placeholder='Name' className='contactInput' type="name" />
                        <input required {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input required {...register('subject')} placeholder='subject' className='contactInput' type="text" name="" id="" />
                    <textarea required {...register('message')} placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
                </form>


            </div>

        </motion.div>
    )
}

export default Contact

