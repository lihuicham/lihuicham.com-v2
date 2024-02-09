/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { PageLinks } from '../constants/PageLinks'
import { projectDataV3 } from '../constants/projectDataV3'

const ProjectV3 = () => {
  return (
    <div>
      <div className="container mx-auto text-primary-text w-1/2 grid md:gap-y-6">
        <h3 className="md:text-2xl font-medium">Projects</h3>
        <div className="flex flex-col gap-y-6">
          {
            projectDataV3.map((e, index) => {
              return (
                <div key={index} className="font-light flex flex-row justify-between pb-2" style={{ borderBottom: 'solid 1px #dedede' }}>
                  <div className="flex flex-row items-center space-x-4">
                    <div className="rounded-full flex items-center justify-center w-8 h-8" >
                      <img alt="" src="" className="w-8 h-8"/>
                    </div>
                    <div className="">
                      <div className="font-medium">{e.title}</div>
                      <div className="text-gray-text">{e.description}</div>
                    </div>
                  </div>
                  <div className="pr-1 text-sm">
                    <div>{e.type}</div>
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

export default ProjectV3