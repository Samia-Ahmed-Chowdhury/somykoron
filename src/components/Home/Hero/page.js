import React from 'react'
import Image from 'next/image'

const HeroPage = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-2 items-center pt-8 px-5 lg:px-0 mx-auto max-w-7xl'>
    <div className='flex flex-col justify-center  mx-auto'>
        <h1 className='font-bold text-5xl md:text-7xl md:leading-[84px] text-black'>Polite fast and always ready to help globally</h1>
        <p className='font-normal text-[16px] md:text-lg text-paragraph_color my-4'>We pride ourselves on offering a business services like no other;We pride ourselves on offering a business services like no other;</p>
        <div className=''>
            <button className='my_button'>Get Started</button>
        </div>
    </div>

    <div>
        <Image src="/heroImg.png" alt='logo' width={500} height={500} priority />
    </div>
</div>

  )
}

export default HeroPage