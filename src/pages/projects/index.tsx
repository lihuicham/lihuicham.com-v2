import { Project, ProjectSectionDetails, ProjectData, DataComponent } from "./Project"
import { gql, useQuery } from "@apollo/client"
import Custom404 from "../404"

// FIXME : can add a project date field in database and sort graphql based on that
const GET_PROJECTS = gql`
query {
  projects (pagination: { limit: 100 }) {
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
  if (error) return <Custom404 />
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
    <div className="container mx-auto px-8 pb-56">
      <h5 className="text-center text-project-text font-bold text-3xl md:text-5xl my-8 lg:my-10">projects</h5>
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