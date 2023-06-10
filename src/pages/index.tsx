import { Introduction } from "@/app/components/Home/Introduction"
import { Tagline } from "@/app/components/Home/Tagline"
import { AboutMe } from "@/app/components/Home/AboutMe"

export default function Home() {
  return (
    <div className="bg-primary-base space-y-32 md:space-y-56">
      <div className="bg-primary-base flex-col space-y-48 md:space-y-56">
        <Introduction />
        <Tagline />
      </div>
      <div className="bg-secondary-base pb-56">
        <AboutMe />
      </div>
    </div>
  )
}