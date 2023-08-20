import Link from "next/link"
import { workData } from "../constants/workData"

const WorkExperiences = () => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h5 className="text-center text-primary-text font-bold text-3xl md:text-5xl my-8 lg:my-10">experiences</h5>
      <div className="mt-6 md:mt-8 w-full px-7 md:px-10 flex flex-col gap-5 md:gap-8 lg:gap-10 md:max-w-7xl">
        {
          workData.map((e, index) => {
            return (
              <div className="bg-primary-base px-6 py-4 shadow-md border-l-primary-text border-l-4" key={index}>
                <div className="lg:flex lg:gap-3 lg:items-center">
                  <div className="text-primary-text font-semibold md:text-xl">{e.role}</div>
                  <div className="text-secondary-text font-bold md:text-xl flex items-center">
                    <span className="md:mr-1">@</span>
                    <Link href={e.link} target="_blank" className="underline">{e.company}</Link>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-lg">
                  <div className="text-primary-text font-medium my-1">{e.type}</div>
                  <div className="w-1 h-1 rounded-full bg-primary-text"></div>
                  <div className="text-tertiary-text font-semibold">{e.from} - {e.to}</div>
                </div>
                <p className="text-primary-text text-xs md:text-base">{e.description}</p>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WorkExperiences