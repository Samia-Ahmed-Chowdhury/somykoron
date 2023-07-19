import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className="footer p-10 mt-24 bg-bgColor text-white">
      
    <div>
    <div className='w-full flex items-center cursor-pointer'>
    <Image src="/stt.png" alt='logo' width={150} height={40} priority />
          </div>
      <p className='text-black'>Somoykoron Tech Team<br/>Providing reliable tech since 1992</p>
    </div> 
    <div className='text-black'>
      <span className="footer-title">Services</span> 
      <a className="link link-hover">Branding</a> 
      <a className="link link-hover">Design</a> 
      <a className="link link-hover">Marketing</a> 
      <a className="link link-hover">Advertisement</a>
    </div> 
    <div className='text-black'>
      <span className="footer-title">Company</span> 
      <a className="link link-hover">About us</a> 
      <a className="link link-hover">Contact</a> 
      <a className="link link-hover">Jobs</a> 
      <a className="link link-hover">Press kit</a>
    </div> 
    <div className='text-black'>
      <span className="footer-title">Legal</span> 
      <a className="link link-hover">Terms of use</a> 
      <a className="link link-hover">Privacy policy</a> 
      <a className="link link-hover">Cookie policy</a>
    </div>
  </footer>
  )
}

export default Footer