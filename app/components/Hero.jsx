"use client"
import React from 'react'
import { Poppins } from 'next/font/google'
import {motion} from 'framer-motion'

const poppins = Poppins({
    subsets:['latin'],
    weight:['200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Hero() {
  return (
    <section style={poppins.style} className='relative overflow-hidden px-6 lg:px-16 xl:px-20 2xl:px-56 min-h-screen'>
        <div className='mt-20 lg:mt-28 xl:mt-36 2xl:mt-56 w-full  flex justify-between items-center flex-col lg:flex-row'>
            <div className='w-full lg:w-6/12'> 
                <h1 className='font-extrabold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tighter text-[var(--title-color)] text-center lg:text-left'>
                    Hello, i'm <br />
                    <span className='text-[var(--text-color)]'>Carlos Metaute 🖐</span> 
                </h1>
                <p className='mt-5 lg:mt-7 mb-3 lg:mb-5 tracking-tight text-lg text-center lg:text-left'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita possimus accusantium facere error nobis culpa omnis mollitia accusamus, fugiat iure dolorum ipsam, excepturi incidunt explicabo provident maxime quos, aliquam nostrum.
                </p>
                <div className='flex items-center gap-4 lg:gap-8 flex-col lg:flex-row mt-8'>
                    <button className='rounded-md bg-[var(--text-color)] text-[var(--bg-color)] px-10 py-2 xl:px-14 font-semibold'>Contact</button>
                    <button>Download my resume </button>
                </div>
            </div>
            <motion.div 
                initial={{
                    y:'72vh',
                    x:'-15vw'
                }}
                animate={{y: 0, x:0}}                
                transition={{duration: 10, type:'spring', bounce:0.6}}
                className='flex justify-center w-full lg:w-6/12 mt-4 lg:mt-0'>
                <img src="/3800_1_02-removebg-preview.png" className='w-56 lg:w-80 2xl:w-96' alt="" />
            </motion.div>
        </div>
        <div className="backdrop ">
            
        </div>
    </section>
  )
}
