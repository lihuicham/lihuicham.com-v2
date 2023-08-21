/* eslint-disable @next/next/no-img-element */

const AboutMe = () => {
  return (
    <div className="container mx-auto pt-16 flex flex-col items-center md:max-w-7xl">
      <div className="px-7 md:flex md:flex-row-reverse md:items-center md:justify-between md:mt-10">
        <div className="flex justify-center items-center mt-10 md:m-0">
          <img alt="me" src="/me.png" className="object-cover w-48 h-48 md:w-52 md:h-52 lg:w-72 lg:h-72 rounded-2xl overflow-hidden"/>
        </div>
        <div className="mt-4 md:m-0 md:w-3/4 md:mr-6">
          <div className="flex items-center">
            <h5 className="text-primary-text font-semibold text-xl md:text-2xl lg:text-3xl">About Me</h5>
            <div className="flex-grow border-b border-primary-text border md:border-2 rounded-xl ml-2 md:ml-4"></div>
          </div>
          <p className="text-primary-text text-sm md:text-lg lg:text-xl  font-medium mt-2 md:w-full">
            Hey friends ! I am Li Hui 🐳 , a penultimate (Year 3) 
            <span className="font-bold"> Business Analytics major</span> from NUS. I do a minor in
            <span className="font-bold"> UI/UX Design</span> and specialises in<span className="font-bold"> Machine Learning</span>. 
            Born in Malaysia, now residing in Singapore. Driven and competitive, I strive to be a T-shaped person. 
            Last summer, I honed my skills in design and development through self-initiated projects, which led to a software engineer internship opportunity. 
            This year, I am diving deep into the realms of data science, focusing in deep learning and its<span className="font-bold"> applications in NLP</span>. 
            I am currently taking the Deep Learning Specialisation course by Andrew Ng and Google Profressional ML Certification, hit me up for study-together sessions or coffee !
          </p>
        </div>
      </div>
    </div>
  )
} 

export default AboutMe