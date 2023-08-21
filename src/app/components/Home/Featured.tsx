import React from "react"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { featuredData } from "../constants/featuredData"

const Featured = () => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h5 className="text-center text-primary-text font-bold text-3xl md:text-5xl my-8 lg:my-10">featured.</h5>
      <div className="grid grid-cols-1 gap-6 lg:gap-8 px-7 mt-6 md:mt-8 w-full md:max-w-7xl lg:grid-cols-2">
        {
          featuredData.map((e, index) => {
            return (
              <div className="border-tertiary-base border-2 rounded-xl p-3 flex flex-col gap-3 md:p-4" key={index}>
                <div className="text-primary-text flex justify-between items-center">
                  <FontAwesomeIcon icon={e.icon} className="text-4xl md:text-5xl"/>
                  <Link href={e.link} target="_blank" className="hover:opacity-75"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-md md:text-lg"/></Link>
                </div>
                <div>
                  <h4 className="text-primary-text font-semibold md:text-xl">{e.title}</h4>
                  <p className="text-primary-text text-xs md:text-base">{e.description}</p>
                </div>
                <div className="flex text-xs justify-between md:text-base">
                  <div className="flex gap-2 text-tertiary-text">
                    {e.language.map((lang, id) => <div key={id}>{lang}</div>)}
                  </div>
                  <Link href={e.source} target="_blank" className="text-secondary-text underline hover:opacity-75">Source</Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Featured