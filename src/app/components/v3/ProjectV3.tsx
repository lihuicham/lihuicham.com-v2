/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
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

// cannot do iterate through object because 
// tailwind css don't support dynamic class names
// failed to pass in bg color dynamically 

const ProjectV3 = () => {
  return (
    <div>
      <div className="container mx-auto text-primary-text grid w-10/12 md:w-1/2 gap-y-4 md:gap-y-8">
        <h3 className="md:text-2xl font-medium">Projects</h3>
        <div className="font-light flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
          <Link href={projectDataV3.creditcard.link} target='_blank'>
            <div className={`relative rounded-2xl md:rounded-3xl py-8 md:px-10 md:py-12 flex flex-col justify-center items-center text-center hover:bg-[#fae3aa]/20 hover:text-[#bd5c0d] transition-all duration-300 ease-in-out`} 
                  style={{ border: 'solid 1px #dedede' }} 
            >
                <div className="rounded-3xl absolute top-3 left-3 py-1 px-2 text-xs font-medium"
                  style={{ border: 'solid 1px #dedede' }} >
                  Machine Learning
                </div>
                <div className="rounded-full flex items-center justify-center w-12 h-12 mb-4 md:w-20 md:h-20 md:mb-4 mt-4">
                  <img alt='' src={projectDataV3.creditcard.logo} className="w-12 h-12 md:w-20 md:h-20"/>
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="text-sm md:text-base font-medium">{projectDataV3.creditcard.title}</div>
                  <p className="text-sm md:text-base">{projectDataV3.creditcard.description}</p>
                </div>
            </div>
          </Link>
          <Link href={projectDataV3.populationhealth.link} target='_blank'>
            <div className={`relative rounded-2xl md:rounded-3xl py-8 md:px-10 md:py-12 flex flex-col justify-center items-center text-center hover:bg-[#e3f8ff]/20 hover:text-[#084887] transition-all duration-300 ease-in-out`} 
                  style={{ border: 'solid 1px #dedede' }} 
            >
                <div className="rounded-3xl absolute top-3 left-3 py-1 px-2 text-xs font-medium"
                  style={{ border: 'solid 1px #dedede' }} >
                  Data Visualisation
                </div>
                <div className="rounded-full flex items-center justify-center w-12 h-12 mb-4 md:w-20 md:h-20 md:mb-4 mt-4" >
                  <img alt='' src={projectDataV3.populationhealth.logo} className="w-12 h-12 md:w-20 md:h-20"/>
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="text-sm md:text-base font-medium">{projectDataV3.populationhealth.title}</div>
                  <p className="text-sm md:text-base">{projectDataV3.populationhealth.description}</p>
                </div>
            </div>
          </Link>
          <Link href={projectDataV3.standupcomedy.link} target='_blank'>
            <div className={`relative rounded-2xl md:rounded-3xl py-8 md:px-10 md:py-12 flex flex-col justify-center items-center text-center hover:bg-[#ffe3e0]/20 hover:text-[#c71054] transition-all duration-300 ease-in-out`} 
                  style={{ border: 'solid 1px #dedede' }} 
            >
                <div className="rounded-3xl absolute top-3 left-3 py-1 px-2 text-xs font-medium"
                  style={{ border: 'solid 1px #dedede' }} >
                  Natural Language Processing
                </div>
                <div className="rounded-full flex items-center justify-center w-12 h-12 mb-4 md:w-20 md:h-20 md:mb-4 mt-4" >
                  <img alt='' src={projectDataV3.standupcomedy.logo} className="w-12 h-12 md:w-20 md:h-20"/>
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="text-sm md:text-base font-medium">{projectDataV3.standupcomedy.title}</div>
                  <p className="text-sm md:text-base">{projectDataV3.standupcomedy.description}</p>
                </div>
            </div>
          </Link>
          <Link href={projectDataV3.brandstyleguide.link} target='_blank'>
            <div className={`relative rounded-2xl md:rounded-3xl py-8 md:px-10 md:py-12 flex flex-col justify-center items-center text-center hover:bg-[#f8e3ff]/20 hover:text-[#652c91] transition-all duration-300 ease-in-out`} 
                  style={{ border: 'solid 1px #dedede' }} 
            >
                <div className="rounded-3xl absolute top-3 left-3 py-1 px-2 text-xs font-medium"
                  style={{ border: 'solid 1px #dedede' }} >
                  Design
                </div>
                <div className="rounded-full flex items-center justify-center w-12 h-12 mb-4 md:w-20 md:h-20 md:mb-4 mt-4">
                  <img alt='' src={projectDataV3.brandstyleguide.logo} className="w-12 h-12 md:w-20 md:h-20"/>
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="text-sm md:text-base font-medium">{projectDataV3.brandstyleguide.title}</div>
                  <p className="text-sm md:text-base">{projectDataV3.brandstyleguide.description}</p>
                </div>
            </div>
          </Link>
          <Link href={projectDataV3.traventure.link} target='_blank'>
            <div className={`relative rounded-2xl md:rounded-3xl py-8 md:px-10 md:py-12 flex flex-col justify-center items-center text-center hover:bg-[#e5ffd9]/20 hover:text-[#166109] transition-all duration-300 ease-in-out`} 
                  style={{ border: 'solid 1px #dedede' }} 
            >
                <div className="rounded-3xl absolute top-3 left-3 py-1 px-2 text-xs font-medium"
                  style={{ border: 'solid 1px #dedede' }} >
                  Product Management
                </div>
                <div className="rounded-full flex items-center justify-center w-12 h-12 mb-4 md:w-20 md:h-20 md:mb-4 mt-4">
                  <img alt='' src={projectDataV3.traventure.logo} className="w-12 h-12 md:w-20 md:h-20"/>
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="text-sm md:text-base font-medium">{projectDataV3.traventure.title}</div>
                  <p className="text-sm md:text-base">{projectDataV3.traventure.description}</p>
                </div>
            </div>
          </Link>
          <Link href={projectDataV3.fluo.link} target='_blank'>
            <div className={`relative rounded-2xl md:rounded-3xl py-8 md:px-10 md:py-12 flex flex-col justify-center items-center text-center hover:bg-[#ffe6ef]/20 hover:text-[#b51850] transition-all duration-300 ease-in-out`} 
                  style={{ border: 'solid 1px #dedede' }} 
            >
                <div className="rounded-3xl absolute top-3 left-3 py-1 px-2 text-xs font-medium"
                  style={{ border: 'solid 1px #dedede' }} >
                  Software Engineering
                </div>
                <div className="rounded-full flex items-center justify-center w-12 h-12 mb-4 md:w-20 md:h-20 md:mb-4 mt-4">
                  <img alt='' src={projectDataV3.fluo.logo} className="w-12 h-12 md:w-20 md:h-20"/>
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="text-sm md:text-base font-medium">{projectDataV3.fluo.title}</div>
                  <p className="text-sm md:text-base">{projectDataV3.fluo.description}</p>
                </div>
            </div>
          </Link>
          <Link href={projectDataV3.landslide.link} target='_blank'>
            <div className={`relative rounded-2xl md:rounded-3xl py-8 md:px-10 md:py-12 flex flex-col justify-center items-center text-center hover:bg-[#f3f0f3]/20 hover:text-[#696569] transition-all duration-300 ease-in-out`} 
                  style={{ border: 'solid 1px #dedede' }} 
            >
                <div className="rounded-3xl absolute top-3 left-3 py-1 px-2 text-xs font-medium"
                  style={{ border: 'solid 1px #dedede' }} >
                  Data Storytelling
                </div>
                <div className="rounded-full flex items-center justify-center w-12 h-12 mb-4 md:w-20 md:h-20 md:mb-4 mt-4">
                  <img alt='' src={projectDataV3.landslide.logo} className="w-12 h-12 md:w-20 md:h-20"/>
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="text-sm md:text-base font-medium">{projectDataV3.landslide.title}</div>
                  <p className="text-sm md:text-base">{projectDataV3.landslide.description}</p>
                </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectV3