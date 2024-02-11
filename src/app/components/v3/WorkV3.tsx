/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { workDataV3 } from '../constants/workDataV3'
import { PageLinks } from '../constants/PageLinks'

const WorkV3 = () => {
  return (
    <div>
      <div className="container mx-auto text-primary-text w-1/2 grid md:gap-y-6">
        <h3 className="md:text-2xl font-medium">Work</h3>
        <div className="flex flex-col gap-y-6">
          {
            workDataV3.map((e, index) => {
              return (
                <div key={index} className="font-light flex flex-row justify-between pb-2" style={{ borderBottom: 'solid 1px #dedede' }}>
                  <div className="flex flex-row items-center space-x-4">
                    <div className="rounded-full flex items-center justify-center w-8 h-8" >
                      <img alt={e.company} src={e.logo} className="w-8 h-8"/>
                    </div>
                    <div className="">
                      <div className="font-medium">{e.company}</div>
                      <div className="text-gray-text">{e.role}</div>
                    </div>
                  </div>
                  <div className="pr-1 text-sm">
                    <div>{e.date}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="flex items-center gap-x-2.5 mt-6">
          <div className="relative flex h-2.5 w-2.5">
            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></div>
            <div className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green"></div>
          </div>
          <div className='text-sm text-gray-text font-light'>Actively looking for Summer 2024 internships.&nbsp;
            <Link target="_blank" href={PageLinks.Socials.Email}>
              <span className="underline underline-offset-4 hover:underline-offset-6 transition-all duration-300 ease-in-out">Get in touch</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkV3