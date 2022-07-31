import React from 'react';
import ReactDOM from 'react-dom/client'; 
import reportWebVitals from './reportWebVitals';  
import './Css/style.css'; 
import './Js/custom'; 
import Header from '../src/Header/Header';
import About from '../src/About/about'; 
import RecentWork from '../src/Recent-work/Recent';
import Skill from '../src/Skills/skill'; 
import Service from '../src/Services/Service'; 
import ProjectTimer from '../src/Projets-timer/projects'; 
import Contact from '../src/Contact/Contact';   
import Footer from '../src/Footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <Header />
    <About />
    <RecentWork />
    <Skill />
    <Service />
    <ProjectTimer />
    <Contact />
    <Footer />

    
  </React.StrictMode> 
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
