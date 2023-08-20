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
    role: 'Software Engineer Intern',
    company: 'Switcheo Labs',
    type: 'Internship',
    from: 'May 2023',
    to: 'Now',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non lacus tincidunt lectus faucibus volutpat. Sed nec ex nec lorem semper placerat nec quis odio.',
    link: 'https://www.switcheo.com',
  },
  {
    role: 'Frontend Developer',
    company: 'Google DSC',
    type: 'Part-Time',
    from: 'Aug 2022',
    to: 'May 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non lacus tincidunt lectus faucibus volutpat. Sed nec ex nec lorem semper placerat nec quis odio.',
    link: 'https://gdsc-nus.vercel.app/our-projects',
  },
  {
    role: 'Data Visualization Developer',
    company: 'SPH Media - The Straits Times',
    type: 'Internship',
    from: 'Dec 2022',
    to: 'Jan 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non lacus tincidunt lectus faucibus volutpat. Sed nec ex nec lorem semper placerat nec quis odio.',
    link: 'https://www.straitstimes.com/multimedia/graphics',
  }
]