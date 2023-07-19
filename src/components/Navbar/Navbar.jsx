'use client'

import style from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const liList = [
  { id: 1, title: 'Home', link: '' },
  { id: 2, title: 'Success Story', link: 'success_story' },
  { id: 3, title: 'Service', link: 'service' },
  { id: 4, title: 'Our work', link: 'our_work' },
  { id: 5, title: 'Contact', link: 'contact' }
]

function Navbar() {

  return (
    <div className="bg-bgColor">
      <div className='navbar mx-auto max-w-7xl'>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="space-y-3 shadow glass  menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
              {
                liList.map(li => {
                  
                  return (
                    <li className={style.li_style} key={li.id}>
                      <Link  href={`#${li.link}`}>
                        {li.title}
                      </Link>
                    </li>
                  )
                }
                )
              }
            </ul>
          </div>

          <div className='w-full flex items-center cursor-pointer'>
            <Image src="/stt.png" alt='logo' width={150} height={40} priority />
          </div>
        </div>

        <div className=" ml-auto py-0 hidden lg:flex">
          <ul className="space-x-2 menu menu-horizontal px-1 ">
            {
              liList.map(li => {
                return (
                  <li className={style.li_style} key={li.id}>
                    <Link href={`#${li.link}`}>
                      {li.title}
                    </Link>
                  </li>
                )
              }
              )
            }
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar