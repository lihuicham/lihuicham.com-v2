import Link from "next/link"
interface Work {
  role: string
  company: string
  link: string
  type: string
  period: string
  description: string
} 

const works: Work[] = [
  {
    role: 'Software Engineer Intern',
    company: 'Switcheo Labs',
    link: 'https://www.switcheo.com',
    type: 'Internship',
    period: 'May 2023 - Nov 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non lacus tincidunt lectus faucibus volutpat. Sed nec ex nec lorem semper placerat nec quis odio.',
  },
  {
    role: 'Data Visualization Developer Intern',
    company: 'The Straits Times',
    link: 'https://www.straitstimes.com/multimedia/graphics',
    type: 'Internship',
    period: 'Dec 2022 - Jan 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non lacus tincidunt lectus faucibus volutpat. Sed nec ex nec lorem semper placerat nec quis odio.',
  },
]

export const WorkExperiences = () => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h5 className="text-center text-primary-text font-semibold text-xl md:text-3xl">Work Experiences</h5>
      <div className="mt-6 md:mt-16 w-full px-7 md:px-10 flex flex-col gap-5 md:gap-8 lg:gap-10 md:max-w-7xl">
        {
          works.map(({ role, company, link, type, period, description }, index) => {
            return (
              <div className="bg-primary-base px-6 py-4 shadow-md border-l-primary-text border-l-4" key="index">
                <div className="lg:flex lg:gap-3 lg:items-center">
                  <div className="text-primary-text font-semibold md:text-2xl">{role}</div>
                  <div className="text-secondary-text font-bold md:text-2xl flex items-center">
                    <span className="md:mr-1">@</span>
                    <Link href={link} target="_blank" className="underline">{company}</Link>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-xl">
                  <div className="text-primary-text font-medium my-1">{type}</div>
                  <div className="w-1 h-1 rounded-full bg-primary-text"></div>
                  <div className="text-tertiary-text font-semibold">{period}</div>
                </div>
                <p className="text-primary-text text-xs md:text-lg">{description}</p>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}