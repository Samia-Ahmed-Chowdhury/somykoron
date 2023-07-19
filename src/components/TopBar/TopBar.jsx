import React from 'react'
import { HiPhone, HiEnvelope } from 'react-icons/hi2';

const TopBar = () => {
    return (
        
          <div className='flex items-center gap-4 my-5 max-w-7xl mx-auto'>
                <p className='text-primary_color text-sm font-medium cursor-pointer'><HiPhone className='mr-1 text-primary_color inline' />+880-12345678</p>
                <p className='text-primary_color text-sm font-medium cursor-pointer'><HiEnvelope className='mr-1 text-primary_color inline' />support@somykoron.com</p>
            </div>
    )
}

export default TopBar