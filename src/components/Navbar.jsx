import React from 'react'
import Logo from '../images/Logo.svg'

function Navbar() {
  return (
    <div className='h-20 bg-stem-gray flex justify-center p-6'>
        <div className='w-full max-w-6xl h-full flex items-center justify-between'>
            <div className='flex gap-3 items-center'>
                <img className='h-12' src={Logo} alt="stem club logo circle with microscope" />
                <div className='flex flex-col'>
                    <h1 className='font-extrabold leading-5'>
                        <span className='text-stem-pink-dark'>D.A.W.S.S</span>
                        <br/>
                        <span className='text-stem-green'>STEM CLUB</span>
                    </h1>
                </div>
            </div>
            <div className='md:hidden'>
                <ul className='flex gap-16'>
                    <li className=''>Home</li>
                    <li className=''>About</li>
                    <li className=''>Events</li>
                    <li className=''>Contact</li>
                </ul>
            </div>  
        </div>
    </div>
  )
}
export default Navbar