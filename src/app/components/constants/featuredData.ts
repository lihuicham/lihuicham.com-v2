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
    link: 'https://dev-app.dem.exchange/fluo-dashboard',
    source: 'https://fluofinance.com/',
    icon: faCoins
  },
  {
    title: 'Tech Project Management - Traventure App',
    description: 'Traventure is an app that allows users to plan and organise their travel itineraries. Project is awarded Top Student award for Application Systems Development for Business Analytics course among 212 students. I was the project manager (Scrum master), developer and main designer for this project. External link to view Scrum artefacts, demo app in Source.',
    language: ['Vue', 'Firebase', 'Figma', 'Agile'],
    link: 'https://docs.google.com/spreadsheets/d/1yGKUngdP5fGHOQmZWxFVd2KDVAtkpxnG/edit?usp=drive_link&ouid=104164752399865493343&rtpof=true&sd=true',
    source: 'https://bt3103-72223.web.app/',
    icon: faLocationDot
  },
  {
    title: 'Credit Card Default Prediction',
    description: 'This project highlights my strong foundation in machine learning and statistics. The data science pipeline include data preprocessing, EDA, feature engineering and model evaluation (SVM, Gradient Boosting and Neural Network). Issues like imbalanced dataset, overfitting and outliers/missing data are handled. Source code in Python, with detailed explanation of theory in each step.',
    language: ['Python', 'Scikit-Learn', 'Matplotlib', 'Keras'],
    link: 'https://github.com/lihuicham/default-credit-card-clients-prediction/blob/main/ProjectCode-Python.ipynb',
    source: 'https://github.com/lihuicham/default-credit-card-clients-prediction',
    icon: faCreditCard,
  },
  {
    title: 'Standup Comedy Analysis',
    description: 'An end-to-end data science pipeline to build a NLP model that predicts funniness level of stand-up comedy shows. We scraped the website “Scraps from the Loft” for data and perform word tokenisation. We used sentiment analysis and labelled the features to obtain “funny score”. An ensemble classifier model is built to predict the funniness level of input comedy script.',
    language: ['Python', 'Nltk', 'Scikit-Learn'],
    link: 'https://drive.google.com/file/d/1RXushQCit1mBq048kBf6S6zdq5wcObmx/view?usp=sharing',
    source: 'https://github.com/lihuicham/standup-comedy-analysis',
    icon: faMasksTheater
  },
]