import { Introduction } from "@/app/components/Home/Introduction"
import { Tagline } from "@/app/components/Home/Tagline"
import { AboutMe } from "@/app/components/Home/AboutMe"
import { WorkExperiences } from "@/app/components/Home/WorkExperiences"
import Quote from "@/app/components/Home/Quote"

export default function Home() {
  return (
    <div className="bg-primary-base space-y-32 md:space-y-56">
      <div className="space-y-48 md:space-y-56">
        <Introduction />
        <Tagline />
      </div>
      <div className="bg-secondary-base pb-56 space-y-20 md:space-y-24">
        <AboutMe />
        <WorkExperiences />
      </div>
      <div className="pb-56">
        <Quote />
      </div>
    </div>
  )
}