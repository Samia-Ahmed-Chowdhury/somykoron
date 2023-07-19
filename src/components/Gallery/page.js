import Image from 'next/image'
import React from 'react'

const GalleryPage = () => {
  return (
    <div id="our_work" className='my-36 px-5 lg:px-0 mx-auto max-w-7xl'>
    <h2 className='w-full mt-8 md:w-1/2 text-center  mx-auto text-3xl md:text-4xl font-semibold'>Our Work</h2>
    <div className='grid lg:grid-cols-3 gap-5 items-center my-8 '>
        {
            galley.map(item =>
                <div key={item.id} className={`${item.shadow} md:w-96 card `}>
                    <div className='w-full'>
                    <Image className="mx-auto" src={item.img_src} alt='logo' width={740} height={350} priority />
                    </div>
                </div>
            )
        }
    </div>
</div>
  )
}

export default GalleryPage

const galley=[
    {
        "id":1,
        "img_src":"https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9uYXRpb24lMjBjYW1wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
        "id":2,
        "img_src":"https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9uYXRpb24lMjBjYW1wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
        "id":3,
        "img_src":"https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9uYXRpb24lMjBjYW1wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
        "id":4,
        "img_src":"https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9uYXRpb24lMjBjYW1wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
        "id":5,
        "img_src":"https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9uYXRpb24lMjBjYW1wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
        "id":6,
        "img_src":"https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9uYXRpb24lMjBjYW1wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    }
]