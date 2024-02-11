/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { PageLinks } from '../constants/PageLinks'
import { awardDataV3 } from '../constants/awardDataV3'

const AwardV3 = () => {
  return (
    <div>
      <div className="container mx-auto text-primary-text w-1/2 grid md:gap-y-6">
        <h3 className="md:text-2xl font-medium">Awards</h3>
        <div className="flex flex-col">
          {
            awardDataV3.map((e, index) => {
              return (
                <Link href={e.link} key={index} target='_blank'>
                  <div className="font-light flex flex-row justify-between pb-4 pt-4 px-2 hover:bg-[#e8e8e8]/20 transition-all duration-300 ease-in-out" style={{ borderBottom: 'solid 1px #dedede' }}>
                    <div className="flex flex-row items-center space-x-4">
                      <div className="rounded-full flex items-center justify-center w-8 h-8" >
                        <img alt={e.title} src="/assets/logos/others/medal.png" className="w-8 h-8"/>
                      </div>
                      <div className="">
                        <div className="font-medium">{e.title}</div>
                        <div className="text-gray-text">{e.issuer}</div>
                      </div>
                    </div>
                    <div className="pr-1 text-sm">
                      <div>{e.date}</div>
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

export default AwardV3