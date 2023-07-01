import React from "react"

export interface ProjectSectionDetails {
  title: string
  subtitle: string
  data: ProjectData[]
}

export interface ProjectData {
  title: string
  description: string
}

export const DataComponent: React.FC<ProjectData> = ({ title, description }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  )
}

export const Project = (props: ProjectSectionDetails) => {
  const { title, subtitle, data } = props
  return (
    <div>
      <div>
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
      <div>
        {data.map((e, index) => <DataComponent {...e} key={index}/>)}
      </div>
    </div>
  )
}