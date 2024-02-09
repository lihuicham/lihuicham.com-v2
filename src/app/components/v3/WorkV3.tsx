/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { workDataV3 } from '../constants/workDataV3'

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
                  <div className="pr-1">
                    <div>{e.date}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default WorkV3