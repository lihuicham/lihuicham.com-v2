export interface ProjectSectionDetails {
  title: string
  subtitle: string
  data: ProjectData[]
}

export interface ProjectData {
  title: string
  description: string
  link?: string
  type: string
}

export const projectData: ProjectData[] = [
  // originals
  {
    title: 'Credit Card Default Prediction',
    description: 'A machine learning project to predict defaulting clients with data processing, EDA and model evaluation.',
    link: 'https://github.com/lihuicham/default-credit-card-clients-prediction/blob/main/ProjectCode-Python.ipynb',
    type: 'originals'
  },
  {
    title: 'Stand-up Comedy Analysis',
    description: 'A funniness level predictive NLP model. Techniques used are sentiment analysis and topic modelling.',
    link: 'https://github.com/lihuicham/standup-comedy-analysis',
    type: 'originals'
  },
  {
    title: 'Tech Project Management',
    description: 'Manage Scrum artefacts and backlog using Jira as Scrum Master. Project is awarded Top Student among 212 students.',
    link: 'https://docs.google.com/spreadsheets/d/1yGKUngdP5fGHOQmZWxFVd2KDVAtkpxnG/edit?usp=sharing&ouid=104164752399865493343&rtpof=true&sd=true',
    type: 'originals'
  },
  {
    title: 'Traventure App',
    description: 'Plan your travel itinerary with Traventure, a beautifully designed full-stack web app.',
    link: 'https://bt3103-72223.web.app/',
    type: 'originals'
  },
  {
    title: 'UX Research & Design Project',
    description: 'Researched and prototyped a new video conferencing system for developers and PMs.',
    link: 'https://drive.google.com/file/d/1FQM1dThdOscv2LFT4we6rl2tHjLgyIe2/view?usp=sharing',
    type: 'originals'
  },
  {
    title: 'Fancy Payment Form',
    description: 'Dark-themed form with input validation and animated toast message. View on desktop only.',
    link: 'https://lihuicham.github.io/fancy-payment-form/',
    type: 'originals'
  },
  {
    title: 'Track My Day App',
    description: 'A habit tracker mobile app with analytics. Built for NUS Orbital 2022 - Apollo 11 (Advanced) level.',
    link: 'https://github.com/lihuicham/nus-orbital-project-2022',
    type: 'originals'
  },
  // current
  {
    title: 'Personal Blog',
    description: 'A blog of my uses and recommendations.',
    type: 'current'
  },
  {
    title: 'Fluo Finance',
    description: 'Building a DeFi App for my SWE internship. Integration with smart contracts and blockchain protocols.',
    link: 'https://fluofinance.com/',
    type: 'current'
  },
  // experiments
  {
    title: 'Custom 404 Page',
    description: 'Learned responsive page development and frontend skills.',
    link: 'https://github.com/lihuicham/404-page',
    type: 'experiments'
  },
  {
    title: 'Link In Bio',
    description: 'My custom linkinbio page for social medias, photos from Bintan trip.',
    link: 'https://lihuicham.github.io/linkinbio/',
    type: 'experiments'
  },
  {
    title: 'MovieGo',
    description: 'A movie search app built with Vue.js, TMDB API and SCSS.',
    link: 'https://fantastic-starship-6db79b.netlify.app/',
    type: 'experiments'
  },
]