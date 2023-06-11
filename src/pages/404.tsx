/* eslint-disable react-hooks/exhaustive-deps */
import ArcticOceanFractal from "arctic-ocean-fractal";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Custom404() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    setInterval(() => {
      setShow(!show)
    }, 6000)
  }, [show])
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="absolute overflow-hidden flex flex-col items-center py-16 md:flex-row md:py-36 md:relative w-full">
        <div className="w-10/12 sm:w-8/12 md:w-5/12 md:absolute md:top-40 md:right-4 lg:top-28 lg:right-16">
          <ArcticOceanFractal pose={show ? "hide" : "show"}/>
        </div>
        <div className="px-7 mt-8 md:px-12 lg:px-16 lg:m-0">
          <h3 className="text-secondary-text font-bold text-3xl md:text-4xl lg:text-5xl md:w-2/3">Oops, you are running out of oxygen !</h3>
          <p className="text-tertiary-text font-medium text-xl mt-4 mb-10 md:text-2xl lg:text-3xl lg:mt-8 lg:mb-20">This page is lost in the arctic ocean.</p>
          <Link href="/" className="bg-secondary-text text-primary-base p-4 rounded-xl font-medium text-xl hover:bg-transparent hover:text-secondary-text hover:ring-4 hover:ring-secondary-text hover:ring-inset duration-500">
            Back to safety
          </Link>
        </div>
      </div>
    </div>
  )
}