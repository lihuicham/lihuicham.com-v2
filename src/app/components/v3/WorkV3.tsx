/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { workDataV3 } from '../constants/workDataV3'
import { PageLinks } from '../constants/PageLinks'

const WorkV3 = () => {
  return (
    <div>
      <div className="container mx-auto text-primary-text grid w-10/12 md:w-1/2 gap-y-2 md:gap-y-6">
        <h3 className="text-lg md:text-2xl font-medium">Work</h3>
        <div className="flex flex-col gap-y-4 md:gap-y-6">
          {
            workDataV3.map((e, index) => {
              return (
                <div key={index} className="font-light flex flex-row justify-between pb-2" style={{ borderBottom: 'solid 1px #dedede' }}>
                  <div className="flex flex-row items-center space-x-4">
                    <div className="rounded-full flex items-center justify-center w-6 h-6 md:w-8 md:h-8" >
                      <img alt={e.company} src={e.logo} className="w-6 h-6 md:w-8 md:h-8"/>
                    </div>
                    <div className="">
                      <div className="text-sm md:text-base font-medium">{e.company}</div>
                      <div className="text-xs md:text-sm pr-1 md:hidden">{e.date}</div>
                      <div className="text-xs md:text-base text-gray-text">{e.role}</div>
                    </div>
                  </div>
                  <div className="text-xs hidden md:text-sm md:pr-1">{e.date}</div>
                </div>
              )
            })
          }
        </div>
        <div className="flex items-center gap-x-2.5 mt-2 md:mt-4">
          <div className="relative flex h-2.5 w-2.5">
            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></div>
            <div className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green"></div>
          </div>
          <div className='text-xs md:text-sm text-gray-text font-light'>Looking for Summer 2024 internships.&nbsp;
            <Link target="_blank" href={PageLinks.Socials.LinkedIn}>
              <span className="underline underline-offset-4 hover:underline-offset-6 transition-all duration-300 ease-in-out">Get in touch</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkV3