/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className="container mx-auto px-5 md:max-w-7xl">
      <div className="bg-primary-base px-4 py-10 rounded-md drop-shadow-md md:flex md:px-12 md:w-full ">
        <div className='md:w-2/3'>
          <div>
            <img alt="me" src="/memoji.png" className="object-contain bg-tertiary-base w-14 h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden"/>
          </div>
          <p className='text-xl font-bold text-primary-text mt-4 lg:text-3xl'>Cham Li Hui</p>
          <p className='font-medium text-primary-text lg:text-xl'>Student, SWE Intern</p>
          <p className='text-xs text-primary-text mt-2 md:w-3/4 lg:text-base lg:mt-6'>
            Whether you’re looking to collaborate on a cool project or have a 
            freelance job opportunity, you can reach me easily by email or telegram !
          </p>
          <div className='text-primary-text mt-4 flex gap-4 md:gap-6 lg:gap-8 lg:mt-6'>
            <Link href="mailto:lihuicham@u.nus.edu" className='hover:opacity-75'><FontAwesomeIcon icon={faEnvelope} className="text-xl lg:text-3xl"/></Link>
            <Link href="https://t.me/lihuicham" target='_blank' className='hover:opacity-75'><FontAwesomeIcon icon={faPaperPlane} className="text-xl lg:text-3xl"/></Link>
          </div>
        </div>
        <div className='mt-8'>
          <p className='font-semibold text-primary-text lg:text-xl'>Let&apos;s Connect !</p>
          <div className='text-primary-text flex gap-4 md:gap-6 lg:gap-8 mt-4'>
            <Link href="https://www.linkedin.com/in/lihuicham" target="_blank" className='hover:opacity-75'><FontAwesomeIcon icon={faLinkedinIn} className="text-xl lg:text-3xl"/></Link>
            <Link href="https://github.com/lihuicham" target="_blank" className='hover:opacity-75'><FontAwesomeIcon icon={faGithub} className="text-xl lg:text-3xl"/></Link>
            <Link href="https://medium.com/@lihuicham" target="_blank" className='hover:opacity-75'><FontAwesomeIcon icon={faMedium} className="text-xl lg:text-3xl"/></Link>
          </div>
          <div className='mt-8'>
            <p className='font-semibold text-primary-text lg:text-xl'>Links</p>
            <div className='lg:text-xl text-primary-text mt-2 flex flex-col gap-3'>
              <div className='flex items-center gap-2'>
                <Link href="/blog" className='hover:opacity-75'>blog.</Link>
                <div className='text-tertiary-text text-xs font-semibold border-2 border-tertiary-text rounded-lg py-1/2 px-1'>Coming Soon</div>
              </div>
              <Link href="/projects" className='hover:opacity-75'>projects.</Link>
              <Link download="" href="/assets/Resume.pdf" className='hover:opacity-75'>résumé.</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact