import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export interface ProjectSectionDetails {
  title: string
  subtitle: string
  data: ProjectData[]
}

export interface ProjectData {
  title: string
  description: string
  link?: string
  type: string
}

export const DataComponent: React.FC<ProjectData> = ({ title, description, link }) => {
  if (link)
  return (
    <Link href={link} target="_blank">
      <div className="text-primary-text border-b-tertiary-text border-b-2 pb-1 flex flex-col gap-1/2 hover:opacity-80 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex justify-between items-center lg:gap-x-3">
          <div className="font-semibold text-sm 2xl:text-lg">{title}</div>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs lg:text-sm 2xl:text-base"/>
        </div>
        <div className="text-xs lg:text-sm 2xl:text-lg">{description}</div>
      </div>
    </Link>
  )
  return (
    <div className="text-primary-text border-b-tertiary-text border-b-2 pb-1 flex flex-col gap-1/2 lg:flex-row lg:items-center lg:justify-between">
      <div className="font-semibold text-sm 2xl:text-lg">{title}</div>
      <div className="text-xs lg:text-sm 2xl:text-lg">{description}</div>
    </div>
  )
}

export const Project = (props: ProjectSectionDetails) => {
  const { title, subtitle, data } = props
  return (
    <div>
      <div className="text-project-text mb-4 lg:mb-6">
        <div className="font-semibold text-lg lg:text-xl 2xl:text-2xl">{title}</div>
        <div className="text-xs lg:text-base 2xl:text-lg">{subtitle}</div>
      </div>
      <div className="flex flex-col gap-4">
        {data.map((e, index) => <DataComponent key={index} {...e.attributes}/>)}
      </div>
    </div>
  )
}