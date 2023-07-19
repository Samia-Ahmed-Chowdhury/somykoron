import Image from 'next/image'
import React from 'react'
import './service.css'

const ServicePage = () => {
    return (
        <div id="service" className='my-36 px-5 lg:px-0 mx-auto max-w-7xl'>
            <h2 className='w-full md:w-1/2 text-center  mx-auto text-3xl md:text-4xl font-semibold'>What We Do</h2>
            <div className='grid lg:grid-cols-3 gap-8 items-center my-8 '>
                {
                    cardInfo.map(item =>
                        <div key={item.id} className={`${item.shadow} md:w-96  py-8 card `}>
                            <Image className="mx-auto" src={item.img_src} alt='logo' width={140} height={50} priority />

                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto text-center">{item.heading}</h2>
                                <p className=''>{item.detail}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ServicePage


const cardInfo = [
    {
        "id": 1,
        "shadow":'sideCardShadow',
        "img_src": "/s1.png",
        "heading": "Web design",
        "detail": "Evaluted is very important for your property buy and sell..Evaluted is very important for your property buy and sell.."
    },
    {
        "id": 2,
        "shadow":'middleCardShadow',
        "img_src": "/s2.png",
        "heading": "Ai Projects",
        "detail": "Evaluted is very important for your property buy and sell..Evaluted is very important for your property buy and sell.."
    },
    {
        "id": 3,
        "shadow":'sideCardShadow',
        "img_src": "/s3.png",
        "heading": "Web Development",
        "detail": "Evaluted is very important for your property buy and sell..Evaluted is very important for your property buy and sell.."
    }
]