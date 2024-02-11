"use client"

import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="container mx-auto text-primary-text text-center">
      <div className="flex gap-2 md:gap-4 py-4 text-xs md:text-sm justify-center">
        <div className="font-light">designed & built by Li Hui &#169; 2024</div>
        <Link href="https://github.com/lihuicham/lihuicham.com-v2" target="_blank" className='hover:opacity-75'><FontAwesomeIcon icon={faGithub} /></Link>
      </div>
    </div>
    
  )
}

export default Footer