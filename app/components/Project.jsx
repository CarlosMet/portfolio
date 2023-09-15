import React from 'react'

export default function Project({direction, project}) {
    const {techs, img, title, paragraph} = project
  return (
    <div className={direction === 'right' ? 'flex flex-col lg:flex-row items-center mt-7 lg:mt-12 justify-between' : 'flex flex-col lg:flex-row-reverse items-center mt-7 lg:mt-12 justify-between'}>
      <div className='w-full lg:w-1/2'>
        <h3 className='text-center lg:text-left font-extrabold text-3xl lg:text-4xl tracking-tighter mb-6'>{title}</h3>
        {
            techs.map( (tech, index) =>(
                <span className='rounded-md px-3 mr-3 bg-gray-300'>{tech}</span>
            ) )
        }
        <p className='text-lg tracking-tight mt-3 text-center lg:text-left w-10/12'>{paragraph}{paragraph}</p>
      </div>
      <div className='w-5/12'>
        <img src="https://i.pinimg.com/originals/bc/5d/72/bc5d720b5aa3ac60c2403ec0b2b68a0e.jpg" alt="mockup" className='w-full' />
      </div>
    </div>
  )
}
