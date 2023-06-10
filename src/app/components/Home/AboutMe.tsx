/* eslint-disable @next/next/no-img-element */

export const AboutMe = () => {
  return (
    <div className="container mx-auto pt-16 flex flex-col items-center">
      <h3 className="text-center text-secondary-text font-bold text-3xl md:text-6xl">experience.</h3>
      <div className="md:flex flex-row-reverse items-center w-full max-w-7xl">
        <div className="flex justify-center items-center mt-10 md:mt-8">
          <img alt="me" src="/me.png" className="object-cover w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden"/>
        </div>
        <div className="px-7 md:pr-7 md:w-3/4">
          <div className="flex items-center mt-8 md:pr-8">
            <h5 className="text-primary-text font-semibold text-xl md:text-3xl">About Me</h5>
            <div className="flex-grow border-b border-primary-text border md:border-2 rounded-xl ml-2 md:ml-4"></div>
          </div>
          <p className="text-primary-text text-sm md:text-xl font-medium mt-2 md:w-full">
            Hey friends ! I am Li Hui 🐳 , a third-year 
            <span className="font-bold"> Business Analytics student</span> at NUS with Minor in 
            <span className="font-bold"> UI/UX Design</span>. 
            Born in Malaysia, now residing in Singapore. Driven and competitive, I strive to be a T-shaped person. 
            This year, I am honing my skills to be a 
            <span className="font-bold"> full-stack designer</span> while diving deep into the realms of
            <span className="font-bold"> data science and deep learning</span>.  
          </p>
        </div>
      </div>
    </div>
  )
} 