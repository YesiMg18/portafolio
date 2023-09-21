import * as React from "react";
import CrehanaHome from "../assets/crehana_1.png";
import Eliya from "../assets/eliya.png";
import LandingCrehana from "../assets/landing_crehana.png";
import Skrambla from "../assets/skrambla.png";
import CrehanaHome2 from "../assets/crehana_2.png";
import Volindo from "../assets/volindo-app 1.png";
import Landing from "../assets/landing_2.png";
import Machinery from "../assets/machinery.png";
import LogoBehance from "../assets/behance_logo.png";
import './Projects.scss'


export const Projects = () =>{
    
    return (
        <div>
            <section className="projectsSection">
                <div className="projectsTitle">
                    <h1>PROYECTOS</h1>
                </div>
                <div className="projectsContainer">
                    <div className="projectsCard">
                        <img src={CrehanaHome}/>
                        <p>Rediseño de Homepage Crehana - V3</p>
                    </div>
                    <div className="projectsCard">
                        <img src={Eliya}/>
                        <p>Eccomerce Web Design - Eliya</p>
                    </div>
                    <div className="projectsCard">
                        <img src={LandingCrehana}/>
                        <p>Landing Campaña Publicitaria</p>
                    </div>
                    <div className="projectsCard">
                        <img src={Skrambla}/>
                        <p>App Iternario de Viajes Skrambla</p>
                    </div>
                    <div className="projectsCard">
                        <img src={CrehanaHome2}/>
                        <p>Rediseño de Homepage Crehana - V3</p>
                    </div>
                    <div className="projectsCard">
                        <img src={Volindo}/>
                        <p>App de Reservaciones Volindo</p>
                    </div>
                    <div className="projectsCard">
                        <img src={Landing}/>
                        <p>Landing Green Card</p>
                    </div>
                    <div className="projectsCard">
                        <img src={Machinery}/>
                        <p>Website Machinery Partner</p>
                    </div>
                </div>
                <div className="buttonContainer">
                    <a href='https://www.behance.net/yesicamuoz18'><img src={LogoBehance}/>Ver otros Proyectos</a>
                </div>
            </section>  
        </div>
    )
}

export default Projects;