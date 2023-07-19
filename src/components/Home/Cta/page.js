import Image from 'next/image'
import React from 'react'

const CatPage = () => {
  return (
    <div id="" className='grid lg:grid-cols-2 gap-2 items-center pt-8 px-5 lg:px-0 mx-auto max-w-7xl'>
    <div className='flex flex-col justify-center  mx-auto'>
        <h1 className='font-bold text-3xl md:text-5xl md:leading-[84px] text-black'>Have a look & know us a better</h1>
        <p className='font-normal text-[16px] md:text-lg text-paragraph_color my-4'>At Somykoron, we help you build sustainable brands with loyalty and trust on a reality-based, iterative and integrated marketing approach.We empower great ideas and believe that great content comes from great people, just like you and your team! We can help you cut through the noise, find your audience and deliver your brand story at its very best. We are dedicated to authentic brand stories and use a perfect blend of design with technology and professional networking to create the largest possible value for both your budget and your audience.</p>
        <div className=''>
            <button className='my_button'>Explore More</button>
        </div>
    </div>

    <div>
        <Image src="/cta.png" alt='logo' width={500} height={500} priority />
    </div>
</div>
  )
}

export default CatPage