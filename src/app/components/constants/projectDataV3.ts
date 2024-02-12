import { colorVariants } from "../v3/ProjectV3"
// icon from Freepik Special Flat
export interface Project {
  title: string
  description: string
  link: string
  tag: string
  logo: string
} 

export const projectDataV3 = {
  creditcard: {
    title: 'Credit Card Default Prediction',
    description: 'EDA and quantitative model evaluation.',
    link: 'https://github.com/lihuicham/default-credit-card-clients-prediction/blob/main/ProjectCode-Python.ipynb',
    tag: 'Machine Learning',
    logo: '/assets/logos/projects/creditcard.png',
  },
  populationhealth:{
    title: 'Population Health Programme',
    description: 'Visualising Singapore\'s public health data.',
    link: 'https://drive.google.com/file/d/1vyhNeBhmO-tWPZh08vhZ4Wk0K2Io8BEL/view?usp=drive_link',
    tag: 'Data Visualisation',
    logo:'/assets/logos/projects/populationhealth.png',
  },
  standupcomedy:{
    title: 'Standup Comedy Analysis',
    description: 'How funny are the comedians ?',
    link: 'https://github.com/lihuicham/standup-comedy-analysis',
    tag: 'Natural Language Processing',
    logo: '/assets/logos/projects/standupcomedy.png',
  },
  brandstyleguide:{
    title: 'Brand Style Guide',
    description: 'My personal brand identity.',
    link: 'https://drive.google.com/file/d/1Agx606I5Ht1OFVD_eWN3NNNJeorh-J_C/view?usp=drive_link',
    tag: 'Design',
    logo: '/assets/logos/projects/brandstyleguide.png',
  },
  fluo:{
    title: 'Fluo App on Demex',
    description: 'Stake, boost and claim rewards.',
    link: 'https://app.dem.exchange/pools',
    tag: 'Software Engineering',
    logo: '/assets/logos/projects/fluo.png',
  },
 traventure:{
    title: 'Traventure App',
    description: 'Agile tech product management.',
    link: 'https://docs.google.com/spreadsheets/d/1yGKUngdP5fGHOQmZWxFVd2KDVAtkpxnG/edit?usp=sharing&ouid=104164752399865493343&rtpof=true&sd=true',
    tag: 'Product Management',
    logo: '/assets/logos/projects/traventure.png',
  },
  landslide:{
    title: 'Breaking : Landslide in Malaysia',
    description: 'News reporting and data storytelling.',
    link: 'https://www.straitstimes.com/multimedia/graphics/2022/12/malaysia-genting-landslide/index.html?shell',
    tag: 'Data Storytelling',
    logo: '/assets/logos/projects/landslide.png',
  },

}