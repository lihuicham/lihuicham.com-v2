import Link from "next/link"
import { gql, useQuery } from "@apollo/client"

interface Work {
  role: string
  company: string
  link: string
  type: string
  from: string
  to: string
  description: string
} 

const GET_WORKS = gql`
query {
  experiences (sort: "order:asc") {
    data {
      id
      attributes {
        role
        company
        link
        type
        from
        to
        description
        order
        
      }
    }
  }
}
`

const works: Work[] = [
  {
    role: 'Software Engineer Intern',
    company: 'Switcheo Labs',
    link: 'https://www.switcheo.com',
    type: 'Internship',
    from: 'May 2023',
    to: 'Nov 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non lacus tincidunt lectus faucibus volutpat. Sed nec ex nec lorem semper placerat nec quis odio.',
  },
]

export const WorkExperiences = () => {
  const { loading, error, data } = useQuery(GET_WORKS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Failed to load work experiences</p>
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h5 className="text-center text-primary-text font-semibold text-xl md:text-3xl">Work Experiences</h5>
      <div className="mt-6 md:mt-16 w-full px-7 md:px-10 flex flex-col gap-5 md:gap-8 lg:gap-10 md:max-w-7xl">
        {
          data.experiences.data.map((e, index) => {
            return (
              <div className="bg-primary-base px-6 py-4 shadow-md border-l-primary-text border-l-4" key={index}>
                <div className="lg:flex lg:gap-3 lg:items-center">
                  <div className="text-primary-text font-semibold md:text-2xl">{e.attributes.role}</div>
                  <div className="text-secondary-text font-bold md:text-2xl flex items-center">
                    <span className="md:mr-1">@</span>
                    <Link href={e.attributes.link} target="_blank" className="underline">{e.attributes.company}</Link>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-xl">
                  <div className="text-primary-text font-medium my-1">{e.attributes.type}</div>
                  <div className="w-1 h-1 rounded-full bg-primary-text"></div>
                  <div className="text-tertiary-text font-semibold">{e.attributes.from} - {e.attributes.to}</div>
                </div>
                <p className="text-primary-text text-xs md:text-lg">{e.attributes.description}</p>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}