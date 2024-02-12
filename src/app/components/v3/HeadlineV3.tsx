/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"
import { PageLinks } from "../constants/PageLinks"

const HeadlineV3 = () => {
  return (
    <div>
      <div className="container mx-auto text-primary-text grid w-10/12 pt-20 gap-y-4 md:w-1/2 md:pt-32 md:gap-y-6">
        <div className="drop-shadow">
          <img alt="memoji" src="/assets/me.png" className="object-fit bg-tertiary-base w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden mb-2 md:mb-4"/>
        </div>
        <div className="flex items-center justify-between"
          >
          <h2 className="text-xl md:text-3xl font-medium md:text-4xl">Hey, I am Li Hui</h2>
          <Link download="" href="/assets/ChamLiHui-Resume.pdf">
            <div className="text-sm md:text-base font-medium rounded-xl px-2 py-1 bg-[#000] text-[#fff]" 
              style={{ border: 'solid 1px #dedede' }} >
              View my resume
            </div>
          </Link>
        </div>
        <p className="text-primary-text font-light text-sm md:text-lg md:leading-loose">
          I am a junior/penultimate Computing student at&nbsp;
          <span className="text-nus-orange font-normal underline underline-offset-2 md:underline-offset-4 hover:underline-offset-4 transition-all duration-300 ease-in-out"><Link href={PageLinks.Schools.NUS} target="_blank">National University of Singapore</Link></span>, 
          majoring in Business Analytics. 
          <br />
          I have internship experiences at&nbsp;
          <span className="text-thestraitstimes-blue font-normal underline underline-offset-2 md:underline-offset-4 hover:underline-offset-4 transition-all duration-300 ease-in-out"><Link href={PageLinks.Companies.TheStraitsTimes} target="_blank">The Straits Times</Link></span>
          &nbsp;and&nbsp;
          <span className="text-switcheolabs-green font-normal underline underline-offset-2 md:underline-offset-4 hover:underline-offset-4 transition-all duration-300 ease-in-out"><Link href={PageLinks.Companies.SwitcheoLabs} target="_blank">Switcheo Labs</Link></span>
          &nbsp;building apps and analysing data. 
          This spring, I am on a student exchange programme at the&nbsp;
          <span className="text-unc-blue font-normal underline underline-offset-2 md:underline-offset-4 hover:underline-offset-4 transition-all duration-300 ease-in-out"><Link href={PageLinks.Schools.UNC} target="_blank">University of North Carolina at Chapel Hill</Link></span>. 
        </p>
        <div className="flex gap-4 md:gap-6 mt-4 md:mt-6">
          <Link target="_blank" href={PageLinks.Socials.LinkedIn}>
            <div className="rounded-full flex items-center justify-center border border-linkedinblue w-8 h-8 md:w-14 md:h-14 hover:bg-linkedinblue/20 transition-all duration-300 ease-in-out">
              <img alt="linkedin" src="/assets/logos/socials/linkedin-logo.svg" className="w-6 h-6 md:w-10 md:h-10"/>
            </div>
          </Link>
          <Link target="_blank" href={PageLinks.Socials.GitHub}>
            <div className="rounded-full flex items-center justify-center border border-githubmediumgray w-8 h-8 md:w-14 md:h-14 hover:bg-githubmediumgray/20 transition-all duration-300 ease-in-out">
              <img alt="github" src="/assets/logos/socials/github-logo.svg" className="w-5 h-5 md:w-8 md:h-8"/>
            </div>
          </Link>
          <Link target="_blank" href={PageLinks.Socials.Medium}>
            <div className="rounded-full flex items-center justify-center border border-githubmediumgray w-8 h-8 md:w-14 md:h-14 hover:bg-githubmediumgray/20 transition-all duration-300 ease-in-out">
              <img alt="medium" src="/assets/logos/socials/medium-logo.svg" className="w-5 h-5 md:w-8 md:h-8"/>
            </div>
          </Link>
          <Link target="_blank" href={PageLinks.Socials.Email}>
            <div className="rounded-full flex items-center justify-center border border-gmailred w-8 h-8 md:w-14 md:h-14 hover:bg-gmailred/20 transition-all duration-300 ease-in-out">
              <img alt="email" src="/assets/logos/socials/gmail-logo.svg" className="w-5 h-5 md:w-8 md:h-8"/>
            </div>
          </Link>
          <Link target="_blank" href={PageLinks.Socials.Telegram}>
            <div className="rounded-full flex items-center justify-center border border-linkedinblue w-8 h-8 md:w-14 md:h-14 hover:bg-linkedinblue/20 transition-all duration-300 ease-in-out">
              <img alt="telegram" src="/assets/logos/socials/telegram-logo.svg" className="w-5 h-5 md:w-8 md:h-8"/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeadlineV3
