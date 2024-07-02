import './App.css';
import Contact from './Componants/Contact';
import Experience from './Componants/Experience';
import Myskill from './Componants/Myskill';
import Navbar from './Componants/Navbar';
import Self from './Componants/Self';
import Work from './Componants/Work';
// import { FaArrowCircleUp } from "react-icons/fa";

function App() {

// logo

let logotxt = 'harsh';

// navigation

// let links = ['Services','Works','Resume','Skills','Testimonial','Contact me']
let links = [
  {
    text : 'About me',
    link : 'aboutsection'
  },
  {
    text : 'Works',
    link : 'worksection'
  },
  {   
    text : 'Resume',
    link : 'resumesection'
  },
  {
    text : 'Skills',
    link : 'skillsection'
  },
  {
    text : 'Contact me',
    link : 'contactsection'
  },
]

// MY RECENT WORKS 

let mywork = [
  {

      img : 'ans.PNG',
      name : 'ansit',
      link : 'https://ansitindia.com/',
  },
  {

      img : 'capela.PNG',
      name : 'Capela CSL',
      link : 'https://capellacsl.com/',
  },
  {

      img : 'craftly.PNG',
      name : 'Craftaly Ai',
      link : 'https://www.craftly.ai/',
  },
  {

      img : 'smelly.PNG',
      name : 'Smelly Fresh',
      link : 'https://smellyfresh.com/',
  },
  {

      img : 'park4u.PNG',
      name : 'ParkForu',
      link : 'https://www.parkforu.com/',
  },
  
]

// my experience and education


let exp = [


  {

    year : '2023 - present',
    company : 'Creative Multimedia & Institute ',
    postition : 'As Developement Faculty ',

  },

  {

    year : '2022 - 2023',
    company : 'Webforest LLP',
    postition : 'Sr.UI Developer',

  },


  
  {

    year : '2020 - 2022',
    company : 'Webster n Square technology',
    postition : 'Sr.Web Designer / UI / UX designer',

  },

  
  {

    year : '2019 - 2020',
    company : 'Ebizz Infotech',
    postition : 'Web Designer',

  },
  {

    year : '2018 - 2019',
    company : 'Varshaa Weblabs',
    postition : 'Jr.Web Designer',

  },


  

  

]

// education 


let edu = [

  {
      year : '2013 - 2017',
      sname : 'Sigma Group of Institute',
      location : 'Vadodara'
  },

  {
      year : '2012 - 2013',
      sname : 'Ankur School of science',
      location : 'Surat'
  }
]

// skills 

let skill = [
  {
    logo : 'html.png',
    text : 'html',
  },
  {
    logo : 'css.png',
    text : 'css',
  },
  {
    logo : 'sass.png',
    text : 'scss',
  },
  {
    logo : 'tailwind.png',
    text : 'Tailwind',
  },
  {
    logo : 'bootstrap.png',
    text : 'Bootstrap',
  },
  {
    logo : 'jquery.png',
    text : 'jquery',
  },
  {
    logo : 'js.png',
    text : 'javascript',
  },
  {
    logo : 'ecmascript.png',
    text : 'ecmascript',
  },
  {
    logo : 'reactjs.png',
    text : 'react js',
  },
  {
    logo : 'materialui.png',
    text : 'Material ui',
  },
  {
    logo : 'clan.png',
    text : 'c langauge',
  },
  {
    logo : 'c.png',
    text : 'C++',
  },
  {
    logo : 'github.png',
    text : 'Github',
  },
]

  return (    
    <>
    
    {/* <button id="scrollToTopBtn"><FaArrowCircleUp /></button> */}

    <Navbar logo ={logotxt}  navlinks={links}/>
    <Self/>
    <Work items={mywork}/>
    <Experience experience = {exp}  education = {edu}/>
    <Myskill skills = {skill}/>
    <Contact/>   

    </>
  );
}

export default App;
