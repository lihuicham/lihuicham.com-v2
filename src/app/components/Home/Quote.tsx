/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
const Quote = () => {
  return (
    <div className="container mx-auto py-36 px-8 text-center md:max-w-6xl relative">
      <img src='/quote-left.svg' alt='quote-left' className="absolute opacity-75 z-0 top-32 left-6 sm:left-16 md:left-10 lg:w-28 lg:h-28 lg:top-24 lg:left-28 xl:left-44"/>
      <div className="text-center text-tertiary-text font-medium text-lg md:text-2xl lg:text-3xl md:leading-normal md:w-full relative">
        Not an expert, but I love to explore, and you should too. 
        <p> Nurture your curiosity.</p>
      </div>
      <div className="text-primary-text text-sm md:text-lg lg:text-2xl mt-4">
      I read widely and try new things. I
      <Link href="/projects" className="mx-1 underline">write</Link>
      occassionally too.
      </div>
    </div>
  )
}

export default Quote