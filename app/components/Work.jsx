import React from 'react'
import { Poppins } from 'next/font/google'
import projects from '@/utils/projects'
import Project from './Project'

const font = Poppins({
    subsets:['latin'],
    weight: ['300', '500', '700', '800']
})

export default function Work() {    

  return (
    <section style={font.style} className='px-6 lg:px-16 xl:px-20 2xl:px-56 overflow-hidden'>
        <h3 className='text-center text-3xl lg:text-4xl font-extrabold tracking-tighter'>My Work.</h3>
        <p className='text-lg tracking-tight text-center w-full lg:w-10/12 mx-auto mt-5 lg:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit animi fugit voluptas qui laboriosam sapiente, saepe, consequuntur excepturi libero, magni assumenda?</p>

        {projects.map( (project, index) =>(
            <Project key={index} project={project} direction={index % 2 === 0 ? 'right' : 'left'} />
        ) )}

        
    </section>
  )
}
