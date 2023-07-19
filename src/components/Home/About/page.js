import Image from 'next/image'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi2'

const AboutPage = () => {
    return (
        <div id="success_story" className='my-32 bg-bgColor'>
          <div className='grid lg:grid-cols-[.9fr,1fr] gap-7 items-center pt-8 px-5 lg:px-0 mx-auto max-w-7xl'>
        
          <div className='mx-auto'>
        <Image src="/story_img.png" alt='logo' width={450} height={450} priority />
    </div>

          <div className='flex flex-col justify-center  mx-auto'>
        <h1 className='font-bold text-3xl md:text-5xl mx-auto text-black'>Our <span className='text-primary_color'>Success</span> Story</h1>
        <p className='font-normal md:w-10/12 mx-auto text-[16px] md:text-lg text-paragraph_color my-5'>Over 10 years of experience have gone in to creating the perfect business and web platform across the globe.Over 10 years of experience have gone in to creating the perfect business and web platform across the globe.</p>
       
        <p className='text-primary_color mb-3 mx-auto text-[16px] font-semibold cursor-pointer'>Learn More <HiArrowRight className='inline text-primary_color' /></p>
    </div>

   
            </div>
        </div>
    )
}

export default AboutPage