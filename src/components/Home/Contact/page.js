import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
  return (
    <div id="contact" className='grid lg:grid-cols-2 gap-2 items-center pt-8 px-5 lg:px-0 mx-auto max-w-7xl'>
      <form className=' px-10 mb-6 mt-2 md:w-[80%] shadow-xl pt-16 py-12  mx-auto rounded-lg'>
        <h2 className='text-3xl font-semibold mx-auto text-center'>GET IN TOUCH</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" className="bg-[#E8F0FE] input w-full  " />

        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input type="email" name="email"
            className="bg-[#E8F0FE]  input w-full " />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Message</span>
          </label>

          <input type="text" name="msg"
            className="bg-[#E8F0FE]  input w-full " />
        </div>


        <button className='my_button mx-auto my-6 ' type="submit" variant="dark">Login</button>
      </form>

      
    <div>
        <Image className='hidden md:flex' src="/contact.png" alt='logo' width={350} height={350} priority />
    </div>
    </div>
  )
}

export default ContactPage