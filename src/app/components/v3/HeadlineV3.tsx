/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"
import { PageLinks } from "../constants/PageLinks"

const HeadlineV3 = () => {
  return (
    <div>
      <div className="container mx-auto text-primary-text w-1/2 pt-32 grid md:gap-y-6">
        <div className="drop-shadow">
          <img alt="memoji" src="/assets/me.png" className="object-fit bg-tertiary-base w-14 h-14 lg:w-24 lg:h-24 rounded-full overflow-hidden mb-4"/>
        </div>
        <h2 className="text-3xl font-medium md:text-4xl">Li Hui is a XXX</h2>
        <p className="text-primary-text font-light text-xs md:text-lg md:leading-loose">
          She&#39;s is a junior at&nbsp;
          <span className="text-nus-orange font-normal underline underline-offset-4 hover:underline-offset-6 transition-all duration-300 ease-in-out"><Link href={PageLinks.Schools.NUS} target="_blank">National University of Singapore</Link></span>, 
          majoring in Business Analytics. 
          <br />
          Li Hui has internship experiences at&nbsp;
          <span className="text-thestraitstimes-blue font-normal underline underline-offset-4 hover:underline-offset-6 transition-all duration-300 ease-in-out"><Link href={PageLinks.Companies.TheStraitsTimes} target="_blank">The Straits Times</Link></span>
          &nbsp;and&nbsp;
          <span className="text-switcheolabs-green font-normal underline underline-offset-4 hover:underline-offset-6 transition-all duration-300 ease-in-out"><Link href={PageLinks.Companies.SwitcheoLabs} target="_blank">Switcheo Labs</Link></span>
          &nbsp;building apps and analysing data. 
          She is now an exchange student at the&nbsp;
          <span className="text-unc-blue font-normal underline underline-offset-4 hover:underline-offset-6 transition-all duration-300 ease-in-out"><Link href={PageLinks.Schools.UNC}>University of North Carolina at Chapel Hill</Link></span>. 
        </p>
        <div className="flex gap-4 md:gap-6 md:mt-6">
          <Link target="_blank" href={PageLinks.Socials.LinkedIn}>
            <div className="rounded-full flex items-center justify-center border border-linkedinblue w-14 h-14 hover:bg-linkedinblue/20 transition-all duration-300 ease-in-out">
              <img alt="linkedin" src="/assets/logos/socials/linkedin-logo.svg" className="w-10 h-10"/>
            </div>
          </Link>
          <Link target="_blank" href={PageLinks.Socials.GitHub}>
            <div className="rounded-full flex items-center justify-center border border-githubmediumgray w-14 h-14 hover:bg-githubmediumgray/20 transition-all duration-300 ease-in-out">
              <img alt="github" src="/assets/logos/socials/github-logo.svg" className="w-8 h-8"/>
            </div>
          </Link>
          <Link target="_blank" href={PageLinks.Socials.Medium}>
            <div className="rounded-full flex items-center justify-center border border-githubmediumgray w-14 h-14 hover:bg-githubmediumgray/20 transition-all duration-300 ease-in-out">
              <img alt="medium" src="/assets/logos/socials/medium-logo.svg" className="w-8 h-8"/>
            </div>
          </Link>
          <Link target="_blank" href={PageLinks.Socials.Email}>
            <div className="rounded-full flex items-center justify-center border border-gmailred w-14 h-14 hover:bg-gmailred/20 transition-all duration-300 ease-in-out">
              <img alt="email" src="/assets/logos/socials/gmail-logo.svg" className="w-8 h-8"/>
            </div>
          </Link>
          <Link target="_blank" href={PageLinks.Socials.Telegram}>
            <div className="rounded-full flex items-center justify-center border border-linkedinblue w-14 h-14 hover:bg-linkedinblue/20 transition-all duration-300 ease-in-out">
              <img alt="telegram" src="/assets/logos/socials/telegram-logo.svg" className="w-8 h-8"/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeadlineV3
