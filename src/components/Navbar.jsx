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
                    <li className='cursor-pointer relative group/item'>
                        <span>Home</span>
                        <span className="absolute left-0 bottom-0 w-0 transition-all h-[2px] bg-stem-pink-dark group-hover/item:w-full"></span>
                    </li>
                    <li className='cursor-pointer relative group/item'>
                        <span>About</span>
                        <span className="absolute left-0 bottom-0 w-0 transition-all h-[2px] bg-stem-pink-dark group-hover/item:w-full"></span>
                    </li>
                    <li className='cursor-pointer relative group/item'>
                        <span>Events</span>
                        <span className="absolute left-0 bottom-0 w-0 transition-all h-[2px] bg-stem-pink-dark group-hover/item:w-full"></span>
                    </li>
                    <li className='cursor-pointer relative group/item'>
                        <span>Contact</span>
                        <span className="absolute left-0 bottom-0 w-0 transition-all h-[2px] bg-stem-pink-dark group-hover/item:w-full"></span>
                    </li>
                </ul>
            </div>  
        </div>
    </div>
  )
}
export default Navbar