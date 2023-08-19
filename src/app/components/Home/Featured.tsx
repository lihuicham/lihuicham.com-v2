import React, { useState } from "react"
import Link from "next/link"
import { gql, useQuery } from "@apollo/client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCoins, faLocationDot, faCreditCard, faMasksTheater, faBriefcase } from '@fortawesome/free-solid-svg-icons'

interface Featured {
  attributes:Featured
  title: string
  description: string
  link: string
  language: string[]
  source: string
} 

const GET_FEATUREDS = gql`
query {
  featureds (sort: "order:asc") {
    data {
      id
      attributes {
        title
        description
        link
        language
        source
      }
    }
  }
}
`

const Featured = () => {
  const { loading, error, data } = useQuery(GET_FEATUREDS)
  const [order, setOrder] = useState("1")
  if (loading) return <p>Loading...</p>
  if (error) return <p>Failed to load work experiences</p>
  const df:Featured[] = data.featureds.data
  let icon = faBriefcase
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h5 className="text-center text-primary-text font-bold text-3xl md:text-5xl my-8 lg:my-10">featured</h5>
      <div className="grid grid-cols-1 gap-6 px-7 mt-6 md:mt-8 w-full md:max-w-7xl lg:grid-cols-2">
        {
          df.map((e, index) => {
            return (
              <Link href={e.attributes.link} target="_blank" key={index}>
                <div className="border-tertiary-base border-2 rounded-xl p-3 flex flex-col gap-3 md:p-4 hover:shadow-md duration-200">
                  <div className="text-primary-text flex justify-between items-center">
                  {(() => {
                    switch (index.toString()) {
                      case "0":
                        return <FontAwesomeIcon icon={faCoins} className="text-4xl md:text-5xl"/>
                      case "1":
                        return <FontAwesomeIcon icon={faLocationDot} className="text-4xl md:text-5xl"/>
                      case "2":
                        return <FontAwesomeIcon icon={faCreditCard} className="text-4xl md:text-5xl"/>
                      case "3":
                        return <FontAwesomeIcon icon={faMasksTheater} className="text-4xl md:text-5xl"/>
                      default:
                        return <FontAwesomeIcon icon={faBriefcase} className="text-4xl md:text-5xl"/>
                    }
                  })()}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-md md:text-lg"/>
                  </div>
                  <div>
                    <h4 className="text-primary-text font-semibold md:text-xl">{e.attributes.title}</h4>
                    <p className="text-primary-text text-xs md:text-base">{e.attributes.description}</p>
                  </div>
                  <div className="flex text-xs justify-between md:text-base">
                    <div className="flex gap-2 text-tertiary-text">
                      {e.attributes.language.map((lang, id) => <div key={id}>{lang}</div>)}
                    </div>
                    <Link href={e.attributes.source} target="_blank" className="text-secondary-text underline hover:opacity-75">Source</Link>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Featured