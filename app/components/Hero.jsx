import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets:['latin'],
    weight:['200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Hero() {
  return (
    <section style={poppins.style} className='relative'>
        <div className='w-full mt-6 lg:mt-12 xl:mt-16 2xl:mt-40'>
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
                    <button>Download my resume</button>
                </div>
            </div>
        </div>
        <div className="absolute lg:right-48 2xl:right-80 top-[1%] lg:top-[15%] left-1/2 lg:left-auto -translate-x-[18%] lg:-translate-x-0 w-36 h-36 lg:w-72 lg:h-72 2xl:w-96 2xl:h-96 bg-gradient-to-b from-[#fa39ad] to-[#fe6c4c] blur-2xl lg:blur-[60px] 2xl:blur-[90px] -z-10 rounded-full flex items-end justify-center">
            <div className='w-28 h-28 rounded-full bg-gradient-to-b from-[#fe6c4c] to-yellow-200'>

            </div>
        </div>
    </section>
  )
}
