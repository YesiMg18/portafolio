import React from 'react';

import './App.scss';
import {HeroPrincipal} from './components/Hero.jsx';
import UiIcon from "./assets/icon-ui.png";
import WebIcon from "./assets/icon-web.png";
import DesignIcon from "./assets/icon-design.png";
import PsImage from "./assets/ps_image.png";
import AiImage from "./assets/ai_image.png";
import PrImage from "./assets/pr_image.png";
import IdImage from "./assets/id_image.png";
import XdImage from "./assets/xd_image.png";
import AeImage from "./assets/ae_image.png";
import FigmaImage from "./assets/figma_image.png";
import InImage from "./assets/in_image.png";
import MiroImage from "./assets/miro_image.png";
import SketchImage from "./assets/sketch_image.png";
import NotionImage from "./assets/notion_image.png";
import SublimeImage from "./assets/sublime_image.png";
import VisualImage from "./assets/visual_image.png";
import JiraImage from "./assets/jira_image.png";
import EmailIcon from "./assets/email.svg";
import BehanceIcon from "./assets/behance.svg";
import GithubIcon from "./assets/github.svg";
import LinkedinIcon from "./assets/linkedin.svg";
import FiverrIcon from "./assets/fiverr.svg";
import {ExperienceCards} from './components/Experience.jsx';
import {Projects} from './components/Projects.jsx';

function App() {
  return (
    <div className="App">
      <HeroPrincipal/>
      <section className='aptitudesSection'>
        <div className='aptitudesTitle'>
          <h1>APTITUDES</h1>
        </div>
        <div className='aptitudesText'>
          <div>
            <h3>INICIATIVA</h3>
            <p>Capacidad de anticiparme a lo que pueda surgir , capacidad de tener diferentes enfoques para resolver un problema. Inquietud por mejorar la eficacia de los resultados.</p>
          </div>
          <div>
            <h3>SOLUCIÓN DE PROBLEMAS</h3>
            <p>Decidir que hacer en función de la situación , capacidad a adaptarme a situaciones o personas para buscar la calidad del proceso, me siento atraída por lo novedoso y el cambio por otras culturas y experiencias.</p>
          </div>
          <div>
            <h3>AUTOAPRENDIZAJE</h3>
            <p>Capacidad de anticiparme a lo que pueda surgir , capacidad de tener diferentes enfoques para resolver un problema. Inquietud por mejorar la eficacia de los resultados.</p>
          </div>
        </div>
      </section>
      <section className='habilitiesSection'>        
        <h1>HABILIDADES PROFESIONALES</h1>
        <div className='habilitiesCards'> 
          <div>
            <img src={UiIcon}/>
            <h4>DISEÑO UX/UI</h4>
            <p>Diseño de interfaz de Usuario, Experiencia de Usuario , Diseño responsivo, Prototype, Diseño de App Mobile, Research, Pruebas de usabilidad , Design System, UI documentation</p>
          </div>
          <div>
            <img src={WebIcon}/>
            <h4>DESARROLLO WEB</h4>
            <p>Maquetado, HTML5 ,CSS3, Git, SASS, React, Mediaqueries, Grid, Metodología BEM, Javascript</p>
          </div>
          <div>
            <img src={DesignIcon}/>
            <h4>DISEÑO GRÁFICO</h4>
            <p>Diseño de interfaz de Usuario, Experiencia de Usuario , Diseño responsivo, Prototype, Diseño de App Mobile, Research, Pruebas de usabilidad , Design System, UI documentation</p>
          </div>
        </div>      
      </section>
      <section className='skillSection'>
      <h1>SKILL</h1>
      <div className='imageSkills'>
       <div>
        <img src={PsImage}/>
        <img src={AiImage}/>
        <img src={PrImage}/>
        <img src={IdImage}/>
        <img src={XdImage}/>
        <img src={AeImage}/>
        </div>
       <div>
        <img src={FigmaImage}/>
        <img src={InImage}/>
        <img src={MiroImage}/>
        <img src={SublimeImage}/>
        <img src={NotionImage}/>
        <img src={SketchImage}/>
        </div>
       <div>
        <img src={VisualImage}/>
        <img src={JiraImage}/>
        </div>
      </div>

      </section>
      <section className='academicSection'>
        <div className='academicTitle'>
          <h1>FORMACIÓN ACADÉMICA</h1>
        </div>
        <div className='academicText'>
          <div>
            <h2>2014-2019</h2>
            <h4>Licenciatura en Diseño de la Comunicación Gráfica</h4>
            <p>Universidad Autónoma Metropolitana - Unidad Azcapotzalco </p>
          </div>
          <div className='academicTextRight'>
            <h2>ABRIL- SEPTIEMBRE 2018</h2>
            <h4>Intercambio Académico - Licenciatura en Diseño Gráfico</h4>
            <p>Escuela Superior Politécnica de Litoral en Guayaquil, Ecuador </p>
          </div>
          <div>
            <h2>MEDIA SUPERIOR 2011 - 2014 </h2>
            <h4>Técnica en Diseño de Modas</h4>
            <p>Centro de Estudios Tecnológicos Industrial y Servicio Nº9</p>
          </div> 
        </div>

      </section>
      <ExperienceCards/>
      <Projects/>
      <section className='contactSection'>
        <div className='contactTitle'>
          <h1>CONTÁCTAME</h1>
        </div>
        <div className='contactContainer'>
            <div className='contactEmail'><img src={EmailIcon}/>yesicamg18@hotmail.com</div>
            <div className='contactSocial'>
                <a href='https://www.behance.net/yesicamuoz18'><img src={BehanceIcon}/></a>
                <a href='https://github.com/YesiMg18'><img src={GithubIcon}/></a>
                <a href='https://www.linkedin.com/in/yesicamunoz/'><img src={LinkedinIcon}/></a>
                <a href='https://www.fiverr.com/yesicamuoz?up_rollout=true'><img src={FiverrIcon}/></a>
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
