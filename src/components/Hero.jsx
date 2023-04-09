import React from 'react'
import HeroGraphic from './HeroGraphic'

function Hero() {
  return (
    <div className='w-screen flex-1 flex justify-center bg-stem-blue-light p-6'>
        <div className='w-full max-w-6xl flex items-center justify-between md:flex-col md:h-96 md:mt-24'>
            <div className='flex h-full items-center'>
                <div className='md:text-center'>
                    <h2 className='font-extrabold text-3xl text-stem-pink-dark mb-2'>D.A.W.S.S</h2>
                    <h1 className='font-black text-6xl text-stem-green'>STEM CLUB</h1>
                    <div className='md:hidden'>
                        <h3 className='font-bold my-3'>Experiments, Learning, <br /> Innovation</h3>
                        <button className='px-4 py-2 bg-stem-pink-dark text-white rounded-lg'>Contact Us</button>
                    </div>
                    
                </div>
            </div>
            
            <div>
                <HeroGraphic/>
            </div>
        </div>
    </div>
  )
}

export default Hero