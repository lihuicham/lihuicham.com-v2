import { Introduction } from "@/app/components/Home/Introduction"
import { Tagline } from "@/app/components/Home/Tagline"
import { AboutMe } from "@/app/components/Home/AboutMe"
import { WorkExperiences } from "@/app/components/Home/WorkExperiences"
import Quote from "@/app/components/Home/Quote"
import Contact from "@/app/components/Home/Contact"
import Featured from "@/app/components/Home/Featured"

export default function Home() {
  return (
    <div className="bg-primary-base space-y-32 md:space-y-52">
      <div className="space-y-48 md:space-y-56">
        <Introduction />
        <Tagline />
      </div>
      <div className="bg-secondary-base space-y-20 md:space-y-24">
        {/* <AboutMe /> */}
        <WorkExperiences />
      </div>
      <div className="">
        {/* <Quote /> */}
        <Featured />
      </div>
      <div className="bg-tertiary-base py-12">
        <Contact />
      </div>
    </div>
  )
}