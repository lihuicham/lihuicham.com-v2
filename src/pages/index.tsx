import Quote from "@/app/components/Home/Quote"
import Contact from "@/app/components/Home/Contact"
import Featured from "@/app/components/Home/Featured"
import Introduction from "@/app/components/Home/Introduction"
import Tagline from "@/app/components/Home/Tagline"
import AboutMe from "@/app/components/Home/AboutMe"
import WorkExperiences from "@/app/components/Home/WorkExperiences"
import HeadlineV3 from "@/app/components/v3/HeadlineV3"
import WorkV3 from "@/app/components/v3/WorkV3"
import ProjectV3 from "@/app/components/v3/ProjectV3"
import AwardV3 from "@/app/components/v3/AwardsV3"

export default function Home() {
  return (
    <div className="bg-primary-base flex flex-col space-y-8 md:space-y-20">
      <HeadlineV3 />
      <WorkV3 />
      <AwardV3 />
      <ProjectV3 />
    </div>
  )
}