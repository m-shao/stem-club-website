import React from 'react'

function Card({icon, name, title, description}) {
  return (
    <div>
        <div className='relative w-60 h-80 rotate-target'>
            <div className='w-full h-full absolute transition-transform bg-blue rotateY-180 duration-500' 
                style={{transformStyle:"preserve-3d"}}>
                <div className='absolute w-full h-full bg-stem-gray rounded-2xl flex flex-col gap-4 justify-center items-center p-3 shadow-xl' style={{backfaceVisibility:'hidden'}}>
                    <img className='w-5/6' src={icon} alt={name + title} />
                    <h1 className='text-3xl font-bold'>{name}</h1>
                </div>
                <div className='absolute w-full h-full bg-stem-gray rounded-2xl flex justify-center items-center flex-col text-center gap-3' style={{backfaceVisibility:'hidden', transform:'rotateY(180deg)'}}>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p className='text-md'>{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card