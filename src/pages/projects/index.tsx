import { Project, ProjectSectionDetails, ProjectData, DataComponent } from "./Project"

const presentProjectsData: ProjectData[] = [
  {
    title: 'Staking for Fluo Finance',
    description: 'Building the Staking feature for Fluo with smart contracts integration. Users can stake, boost and claim Fluo tokens',
  },
  {
    title: 'Personal Blog',
    description: 'A blog of my uses and recommendations. Work In Progress.'
  }
]

const originalsProjectsData: ProjectData[] = [
  {
    title: 'Stand-up Comedy Analysis',
    description: 'A funniness level predictive NLP model. Techniques used are sentiment analysis and topic modeling.',
  },
  {
    title: 'Default Credit Card Clients Prediction',
    description: 'An end-to-end data science pipeline with EDA, feature engineering, model evaluation to predict defaulting clients.',
  },
]

const projectSectionsArr: ProjectSectionDetails[] = [
  {
    title: 'Present',
    subtitle: 'Projects that I am currently working on, follow to see my progress !',
    data: presentProjectsData
  },
  {
    title: 'Originals',
    subtitle: 'These are projects that I’ve spent a large amount of my time on.',
    data: originalsProjectsData
  },
  // {
  //   title: 'Experiments',
  //   subtitle: 'Here are my archived experiments and small projects',
  //   data: presentProjectsData
  // },
]

export default function Projects() {
  return (
    <div>
      { projectSectionsArr.map((project, index) => <Project {...project} key={index}/>) }
    </div>
  )
}