import { Project, ProjectSectionDetails, ProjectData, DataComponent } from "./Project"
import { gql, useQuery } from "@apollo/client"

const GET_PROJECTS = gql`
query {
  projects {
    data {
      id
      attributes {
        title
        description
        link
        type
      }
    }
  }
}
`

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  console.log(data.projects.data.filter(e => e.attributes.type === 'originals'), 'hi')
  const sectionsArray: ProjectSectionDetails[] = [
    {
      title: 'Current',
      subtitle: 'Projects that I am currently working on, follow to see my progress ! ',
      data: data.projects.data.filter(e => e.attributes.type === 'current')
    },
    {
      title: 'Originals',
      subtitle: 'These are projects that I’ve spent a large amount of my time on.',
      data: data.projects.data.filter(e => e.attributes.type === 'originals')
    },
    {
      title: 'Experiments',
      subtitle: 'Here are my archived experiments. ',
      data: data.projects.data.filter(e => e.attributes.type === 'experiments')
    },
    
  ]
  return (
    <div>
      {
        sectionsArray.map((e, index) => (
          <div key={index}>
            <Project {...e}/>
          </div>
          
        ))
      }
    </div>
  )
}