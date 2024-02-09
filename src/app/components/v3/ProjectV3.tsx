/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { PageLinks } from '../constants/PageLinks'
import { projectDataV3 } from '../constants/projectDataV3'

export const colorVariants = {
  orange: '#fceed2',
  red: '#ffe3e0',
  purple: '#f8e3ff',
  yellow: '#fffdd9',
  green: '#e5ffd9',
  gray: '#f0eeed',
  blue: '#e3f8ff',
}

const ProjectV3 = () => {
  return (
    <div>
      <div className="container mx-auto text-primary-text w-1/2 grid md:gap-y-6">
        <h3 className="md:text-2xl font-medium">Projects</h3>
        <p className='font-light'>This section is work in progres 🚧</p>
        <div className="font-light grid grid-cols-2 gap-4">
          {
            projectDataV3.map((e, index) => {
              return (
                  <Link key={index} href="">
                    <div className={`rounded-3xl px-10 pt-10 pb-12 flex flex-col justify-center items-center text-center hover:bg-[${colorVariants[e.color]}]/20 transition-all duration-300 ease-in-out`} 
                         style={{ border: 'solid 1px #dedede' }} 
                         key={index}
                    >
                        <div className="rounded-full flex items-center justify-center w-8 h-8 mb-8" >
                          <img alt="" src="" className="w-8 h-8"/>
                        </div>
                        <div className="flex flex-col gap-y-1">
                          <div className='font-medium'>{e.title}</div>
                          <p className="">{e.description}</p>
                        </div>
                    </div>
                  </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectV3