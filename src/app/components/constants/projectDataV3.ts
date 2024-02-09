import { colorVariants } from "../v3/ProjectV3"

export interface Project {
  title: string
  description: string
  link?: string
  type: string
  color: keyof typeof colorVariants
} 

export const projectDataV3: Project[] = [
  {
    title: 'Credit Card Default Prediction',
    description: 'EDA and quantitative model evaluation.',
    link: 'https://github.com/lihuicham/default-credit-card-clients-prediction/blob/main/ProjectCode-Python.ipynb',
    type: 'Machine Learning',
    color: 'orange',
  },
  {
    title: 'Standup Comedy Analysis with NLP',
    description: 'How funny are the comedians ?',
    link: '',
    type: 'Machine Learning',
    color: 'red',
  },
  {
    title: 'Brand Style Guide',
    description: 'My personal brand identity.',
    link: '',
    type: 'Design',
    color: 'purple',
  },
  {
    title: 'Fluo App',
    description: 'Stake, boost and claim rewards now.',
    link: '',
    type: 'SWE',
    color: 'yellow',
  },
  {
    title: 'Traventure App',
    description: 'Agile tech product management.',
    link: '',
    type: 'PM',
    color: 'green',
  },
  {
    title: 'Landslide in Malaysia',
    description: 'Breaking news reporting and data storytelling.',
    link: '',
    type: 'SWE',
    color: 'gray',
  },
  {
    title: 'Population Health Programme',
    description: 'Visualising Singapore\'s public health data with Tableau.',
    link: '',
    type: 'SWE',
    color: 'blue',
  },
]