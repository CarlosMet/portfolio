import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets:['latin'],
    weight:['200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Hero() {
  return (
    <section style={poppins.style} className='relative'>
        <div className='w-full mt-6 lg:mt-12 xl:mt-16 2xl:mt-40 flex justify-between items-center flex-col lg:flex-row'>
            <div className='w-full lg:w-6/12'> 
                <h1 className='font-extrabold text-[42px] lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tighter text-[var(--title-color)] text-center lg:text-left'>
                    Hello, i'm <br />
                    <span className='text-[var(--text-color)]'>Carlos Metaute 🖐</span> 
                </h1>
                <p className='mt-5 lg:mt-7 mb-3 lg:mb-5 tracking-tight text-lg text-center lg:text-left'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore expedita possimus accusantium facere error nobis culpa omnis mollitia accusamus, fugiat iure dolorum ipsam, excepturi incidunt explicabo provident maxime quos, aliquam nostrum.
                </p>
                <div className='flex items-center gap-4 lg:gap-8 flex-col lg:flex-row mt-8'>
                    <button className='rounded-md bg-[var(--text-color)] text-[var(--bg-color)] px-10 py-2 xl:px-14 font-semibold'>Contact</button>
                    <button>Download my resume</button>
                </div>
            </div>
            <div className='flex justify-center w-full lg:w-6/12 mt-4 lg:mt-0'>
                <img src="/3800_1_02-removebg-preview.png" className='w-56' alt="" />
            </div>
        </div>
        <div className="absolute top-[34%] lg:top-[20%] left-1/2 lg:left-1/2 -translate-x-[18%] lg:-translate-x-1/2 w-44 h-44 lg:w-[480px] lg:h-96  bg-gradient-to-b from-[#fa39ad] via-[#fe6c4c] to-blue-400 blur-3xl lg:blur-[123px] 2xl:blur-[165px] -z-10 rounded-full flex items-end justify-center">
            
        </div>
    </section>
  )
}
