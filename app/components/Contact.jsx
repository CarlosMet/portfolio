"use client"
import React, { useRef } from 'react'

export default function Contact() {
    const tapaRef = useRef(null)
    const mailRef = useRef(null)

    const sendHandler = ()=>{
        // logica de email js

        
        mailRef.current.classList.add('carta')
        setTimeout(()=>{
            tapaRef.current.classList.add('tapa')
        },350)

    }

  return (
    <section className='px-6 lg:px-16 xl:px-20 2xl:px-56 mt-6 lg:mt-9 flex flex-col lg:flex-row items-center'>
        <div className='w-full lg:w-5/12'>
            <h3 className='font-extrabold text-3xl lg:text-4xl text-center lg:text-left tracking-tighter'>
                Get in touch.
            </h3>
            <p className='text-lg tracking-tight mt-4 lg:mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ducimus voluptates eaque tempora non iure cumque accusamus, quisquam, deserunt, maiores autem possimus nulla exercitationem at incidunt rerum corrupti quae illo modi quasi.</p>
            <div className='flex gap-3 flex-col-reverse lg:flex-row items-center'>
                <input className='w-8/12 bg-gray-200 border-none focus:outline-none rounded-lg px-3 py-1' type="text" name="" id="" />
                <button onClick={sendHandler} className='rounded-md bg-[var(--text-color)] text-[var(--bg-color)] px-5 py-2 xl:px-6 font-semibold' type='submit'> Contact me </button>
            </div>
        </div>
        <div className='flex justify-center w-6/12'>
              <div className='w-24 h-12 border-2 bg-red-500 border-black rounded-tr-xl relative'>
                <div className="absolute w-4 h-9 border-2 bg-blue-500 border-black left-1/2 -translate-x-1/2 top-11">                    
                </div>
                <div ref={tapaRef} className="absolute w-12 h-[2px] bg-black -bottom-[2px] -left-12"></div>
                <div>
                    <img ref={mailRef} src="/mail-svgrepo-com.svg" className='absolute w-14 -left-16 bottom-1/2 translate-y-1/2 -z-10' alt="mail" />
                </div>
              </div>
        </div>
    </section>
  )
}
