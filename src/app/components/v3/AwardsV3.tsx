/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { PageLinks } from '../constants/PageLinks'
import { awardDataV3 } from '../constants/awardDataV3'

const AwardV3 = () => {
  return (
    <div>
      <div className="container mx-auto text-primary-text grid w-10/12 md:w-1/2 gap-y-2 md:gap-y-2">
        <h3 className="text-lg md:text-2xl font-medium">Awards</h3>
        <div className="flex flex-col gap-y-4 md:gap-y-0">
          {
            awardDataV3.map((e, index) => {
              return (
                <Link href={e.link} key={index} target='_blank'>
                  <div className="font-light flex flex-row justify-between pb-2 md:pb-4 md:pt-4 md:px-2 hover:bg-[#e8e8e8]/20 transition-all duration-300 ease-in-out" style={{ borderBottom: 'solid 1px #dedede' }}>
                    <div className="flex flex-row items-center md:space-x-4">
                      {/* <div className="rounded-full hidden md:flex items-center justify-center w-4 h-4 md:w-8 md:h-8">
                        <img alt={e.title} src="/assets/logos/others/medal.png" className="w-4 h-4 md:w-8 md:h-8"/>
                      </div> */}
                      <div className="flex flex-col space-y-1">
                        <div className="text-sm md:text-base font-medium">{e.title}</div>
                        <div className="text-xs md:text-sm pr-1 md:hidden">{e.date}</div>
                        <div className="text-xs md:text-base text-gray-text">{e.issuer}</div>
                      </div>
                    </div>
                    <div className="text-xs hidden md:text-sm md:pr-1">{e.date}</div>
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

export default AwardV3