"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false) 
  return (
    <div className="sticky flex justify-between items-center py-5 px-10 bg-primary-base">
      <Link href="/" className="text-2xl text-primary-text font-semibold">lihuicham</Link>
      <button 
        className="block md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FontAwesomeIcon icon={faXmark} className="text-xl"/> : <FontAwesomeIcon icon={faBars} className="text-xl"/>}
      </button>
      <div className={`absolute md:static bg-primary-base md:bg-transparent top-36 right-0 w-full md:w-auto md:h-auto md:block ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center md:flex-row md:space-x-16 md:space-y-0 lg:space-x-20 space-y-24">
          <li>
            <Link href="/" className="text-5xl text-primary-text md:text-xl" onClick={() => setIsOpen(!isOpen)}>
              home.
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-5xl text-primary-text md:text-xl" onClick={() => setIsOpen(!isOpen)}>
              blog.
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-5xl text-primary-text md:text-xl" onClick={() => setIsOpen(!isOpen)}>
              projects.
            </Link>
          </li>
          <li>
            <a className="text-primary-base text-5xl bg-primary-text pt-2 pb-3 px-4 rounded-lg md:hidden" href="https://read.cv/lihuicham" target="_blank" onClick={() => setIsOpen(!isOpen)}>
              résumé.
            </a>
          </li>
        </ul>
      </div>
      <a className="text-primary-base bg-primary-text pt-2 pb-3 px-4 rounded-lg hidden md:block md:text-xl" href="https://read.cv/lihuicham" target="_blank">
        résumé.
      </a>
    </div>
  )
}