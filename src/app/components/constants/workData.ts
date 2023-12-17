export interface Work {
  role: string
  company: string
  type: string
  from: string
  to: string
  description: string
  link: string
} 

export const workData: Work[] = [
  {
    role: 'Data Analyst Intern',
    company: 'NUS Computing',
    type: 'Internship',
    from: 'Dec 2023',
    to: 'Now',
    description: 'Gaining insights on NUS Computing social media performance using platform analytics tools such as Google Analytics and Meta Business Suite. Analyse and visualise data using Python, Excel and Power BI.',
    link: 'https://www.switcheo.com',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Switcheo Labs',
    type: 'Internship',
    from: 'May 2023',
    to: 'Oct 2023',
    description: 'Joined a team of developers in building Fluo, a Web 3 decentralised market maker. Implemented reusable UI components such as payment forms and dashboards with smart contracts integration. Worked on Demex and other De-Fi applications. Tech stack : React, Typescript, MUI.',
    link: 'https://www.switcheo.com',
  },
  {
    role: 'Residential Assistant',
    company: 'Residential College 4 (NUS)',
    type: 'Full-Time',
    from: 'May 2023',
    to: 'Now',
    description: 'Responsible for 120 residents in House of Leo. First-aid trained with CPR and AED. Serve as positive role model and student leader to NUS students. Skills : community building, conflict resolution, policy enforcement.',
    link: 'https://rc4.nus.edu.sg/student-leaders/',
  },
  {
    role: 'Frontend Developer',
    company: 'Google DSC',
    type: 'Part-Time',
    from: 'Aug 2022',
    to: 'May 2023',
    description: 'Collaborated with a team of designers, consultants and software engineers to build a content management system for Mercy Relief (NGO). Tech stack : React, Next.js, MUI.',
    link: 'https://gdsc-nus.vercel.app/our-projects',
  },
  {
    role: 'Data Visualization Developer',
    company: 'SPH Media - The Straits Times',
    type: 'Internship',
    from: 'Dec 2022',
    to: 'Jan 2023',
    description: 'Responsible in migration of Vue to Svelte framework for scrollY and parallax effect components. Developer for Breaking News - “Landslide hit Malaysia campsite near Genting : What we know so far” published on The Straits Times. Tech Stack : Vue3, Svelte, D3.js.',
    link: 'https://www.straitstimes.com/multimedia/graphics',
  }
]