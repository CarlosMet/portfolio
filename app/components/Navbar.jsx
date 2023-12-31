import React from 'react'

export default function Navbar() {
  return (
    <header className='w-full px-6 lg:px-16 xl:px-20 2xl:px-56'>
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
