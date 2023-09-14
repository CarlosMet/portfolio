import React from 'react'

export default function Navbar() {
  return (
    <header className='absolute top-0 left-0 w-full'>
        <nav className='flex justify-between items-center [&>div]:w-4/12  py-5 lg:py-7 xl:py-9'>
            <div className='flex justify-start'>
                logo
            </div>

            <div className='flex justify-center'>
                <ul className=' items-center gap-3 hidden lg:flex'>
                    <li>Work</li>
                    <li>About</li>
                    <li>Contact</li>                    
                </ul>
            </div>

            <div className='flex justify-end'>
                github
            </div>

        </nav>
    </header>
  )
}
