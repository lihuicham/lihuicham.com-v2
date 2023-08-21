import { ProjectSectionDetails, projectData } from "../../app/components/constants/projectData"
import Project from "./Project"

export default function Projects() {
  const sectionsArray: ProjectSectionDetails[] = [
    {
      title: 'Current',
      subtitle: 'Projects that I am currently working on, follow to see my progress ! ',
      data: projectData.filter(e => e.type === 'current')
    },
    {
      title: 'Originals',
      subtitle: 'These are projects that I’ve spent a large amount of my time on.',
      data: projectData.filter(e => e.type === 'originals')
    },
    {
      title: 'Experiments',
      subtitle: 'Here are my archived experiments. ',
      data: projectData.filter(e => e.type === 'experiments')
    },
    
  ]
  return (
    <div className="container mx-auto px-8 pb-56">
      <h5 className="text-center text-project-text font-bold text-3xl md:text-5xl my-8 lg:my-10">projects.</h5>
      <div className="flex flex-col gap-y-10">
        {
          sectionsArray.map((e, index) => (
            <div key={index}>
              <Project {...e}/>
            </div>
            
          ))
        }
      </div>
    </div>
  )
}