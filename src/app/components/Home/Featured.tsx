import React from "react"
import Link from "next/link"
import { gql, useQuery } from "@apollo/client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

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
  if (loading) return <p>Loading...</p>
  if (error) return <p>Failed to load work experiences</p>
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h5 className="text-center text-primary-text font-bold text-3xl md:text-5xl my-8 lg:my-10">featured</h5>
      <div className="grid grid-cols-1 gap-6 px-7 mt-6 md:mt-8 w-full md:max-w-7xl lg:grid-cols-2">
        {
          data.featureds.data.map((e, index) => {
            return (
              <div className="border-tertiary-base border-2 rounded-xl p-3 flex flex-col gap-3 md:p-4 hover:shadow-md duration-200" key={index}>
                <div className="text-primary-text flex justify-between items-center">
                  <FontAwesomeIcon icon={faGithub} className="text-4xl md:text-5xl"/>
                  <Link href={e.attributes.link} target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-md md:text-lg"/></Link>
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
            )
          })
        }
      </div>
    </div>
  )
}

export default Featured