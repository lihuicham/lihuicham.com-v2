import Quote from "@/app/components/Home/Quote"
import Contact from "@/app/components/Home/Contact"
import Featured from "@/app/components/Home/Featured"
import Introduction from "@/app/components/Home/Introduction"
import Tagline from "@/app/components/Home/Tagline"
import AboutMe from "@/app/components/Home/AboutMe"
import WorkExperiences from "@/app/components/Home/WorkExperiences"
import HeadlineV3 from "@/app/components/v3/HeadlineV3"
import WorkV3 from "@/app/components/v3/WorkV3"

export default function Home() {
  return (
    <div className="bg-primary-base md:space-y-24">
      <div className="space-y-48 md:space-y-56">
        <HeadlineV3 />
        {/* <Introduction />
        <Tagline /> */}
      </div>
      {/* <div className="bg-secondary-base space-y-20 md:space-y-24">
        <AboutMe />
        <WorkExperiences />
      </div> */}
      <div className="bg-primary-base space-y-20 md:space-y-24">
        <WorkV3 />
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