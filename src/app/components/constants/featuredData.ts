import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faCoins, faLocationDot, faCreditCard, faMasksTheater } from '@fortawesome/free-solid-svg-icons'

export interface Featured {
  title: string
  description: string
  link: string
  language: string[]
  source: string
  icon: IconDefinition
} 

export const featuredData: Featured[] = [
  {
    title: 'Fluo',
    description: 'Fluo is a new Web 3 product by Switcheo, released in Aug 2023. My primary focus is to develop and deploy the new Fluo Staking feature. I implemented and tested reusable UI components including forms, data tables and dashboards. I also integrated smart contracts calculations and real-time data updates with web sockets. Users can stake Fluo tokens, boost and claim rewards on Fluo.',
    language: ['React', 'Typescript', 'Material UI', 'Redux'],
    link: 'https://fluofinance.com/',
    source: 'https://fluofinance.com/',
    icon: faCoins
  },
  {
    title: 'Traventure',
    description: 'Traventure is an app that allows users to plan and organise their travel itineraries. It was a challenging yet rewarding software engineering endeavour that combined skills in project management, development and design. I was the project manager (Scrum master), developer and main designer for this project. External link to view app, Scrum artefacts in Source.',
    language: ['Vue', 'Firebase', 'Figma', 'Agile'],
    link: 'https://bt3103-72223.web.app/',
    source: 'https://docs.google.com/spreadsheets/d/1yGKUngdP5fGHOQmZWxFVd2KDVAtkpxnG/edit?usp=drive_link&ouid=104164752399865493343&rtpof=true&sd=true',
    icon: faLocationDot
  },
  {
    title: 'Credit Card Default Prediction',
    description: 'This project highlights my strong foundation in machine learning and statistics. The data science pipeline include data preprocessing, EDA, feature engineering and model evaluation (SVM, Gradient Boosting and Neural Network). Issues like imbalanced dataset, overfitting and outliers/missing data are handled. Source code in Python, with detailed explanation of theory in each step.',
    language: ['Python'],
    link: 'https://github.com/lihuicham/default-credit-card-clients-prediction/blob/main/ProjectCode-Python.ipynb',
    source: 'https://github.com/lihuicham/default-credit-card-clients-prediction',
    icon: faCreditCard,
  },
  {
    title: 'Standup Comedy Analysis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non lacus tincidunt lectus faucibus volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    language: ['NLP, Python'],
    link: 'https://www.linkedin.com/in/lihuicham/',
    source: 'https://www.linkedin.com/in/lihuicham/',
    icon: faMasksTheater
  },
]