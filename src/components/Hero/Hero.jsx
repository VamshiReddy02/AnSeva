import React from 'react'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <section className='container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]'>
        {/* Text section */}
        <div className='flex flex-col justify-center gap-3'>
            <div className='space-y-6 text-center md:text-left'>
            <h1 className='text-5xl font-bold text-dark-blue'>
                COVID-19 Risk <br /> Assessment Tool
            </h1>
            <p className='text-lg text-gray-400 mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem iusto ullam et consequatur architecto!
            </p>
            <div className='bg-primary text-white px-6 py-4 rounded-lg mt-4 w-fit mx-auto md:mx-0 font-bold hover:shadow-lg duration-100'>
                <button>Learn more</button>
            </div>
        </div>
        </div>
        {/* image section */}
        <div className='flex items-center justify-center'>
            <img src={hero} alt='' />
        </div>
    </section>
  )
}

export default Hero