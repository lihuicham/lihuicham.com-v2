"use client"

import React, { useState } from 'react'
import Link from 'next/link';

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false) 
  return (
    <div className="sticky top-0 flex justify-between items-center py-5 px-6 md:px-8 lg:px-10 bg-primary-base">
      <Link href="/" className="text-2xl text-primary-text font-semibold">lihuicham</Link>
      <div className="bg-transparent md:w-auto md:h-auto md:block">
        <ul className="items-center md:space-x-16 md:space-y-0 lg:space-x-20 space-y-24 hidden md:flex">
          <li>
            <Link href="/" className="text-primary-text md:text-xl hover:opacity-75" onClick={() => setIsOpen(!isOpen)}>
              home.
            </Link>
          </li>
          <li className='flex items-center gap-2'>
            <Link href="/blog" className="text-primary-text md:text-xl hover:opacity-75" onClick={() => setIsOpen(!isOpen)}>
              blog.
            </Link>
            <div className='text-tertiary-text text-xs font-semibold border-2 border-tertiary-text rounded-lg py-1/2 px-1'>Coming Soon</div>
          </li>
          <li>
            <Link href="/projects" className="text-primary-text md:text-xl hover:opacity-75" onClick={() => setIsOpen(!isOpen)}>
              projects.
            </Link>
          </li>
        </ul>
      </div>
      <a className="text-primary-base bg-primary-text py-1 px-2 lg:py-2 lg:px-4 rounded-lg md:text-xl hover:bg-transparent hover:text-primary-text hover:ring-4 hover:ring-primary-text hover:ring-inset duration-500" href="https://read.cv/lihuicham" target="_blank">
        résumé.
      </a>
    </div>
  )
}