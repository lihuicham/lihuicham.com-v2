export interface WorkV3 {
  company: string
  role: string
  date: string
  link: string
  logo: string
} 

export const workDataV3: WorkV3[] = [
  {
    role: 'Data Analyst Intern',
    company: 'NUS Computing',
    date: 'Jan 2024 - Now',
    link: 'https://www.comp.nus.edu.sg/',
    logo: '/assets/logos/companies/nus-logo.png'
  },
  {
    role: 'Software Engineer Intern',
    company: 'Switcheo Labs',
    date: 'May 2023 - Oct 2023',
    link: 'https://www.switcheo.com',
    logo: '/assets/logos/companies/switcheolabs-logo.svg'
  },
  {
    role: 'Residential Assistant',
    company: 'Residential College 4 (NUS)',
    date: 'June 2023 - Dec 2023',
    link: 'https://rc4.nus.edu.sg',
    logo: '/assets/logos/companies/rc4-logo.png',
  },
  {
    role: 'Data Visualization Developer Intern',
    company: 'SPH Media - The Straits Times',
    date: 'Dec 2022 - Jan 2023',
    link: 'https://www.straitstimes.com/multimedia/graphics',
    logo: '/assets/logos/companies/sph-logo.png'
  }
]