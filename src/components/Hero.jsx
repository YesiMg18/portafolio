import * as React from "react";
import ImageProfile from "../assets/foto_hero.png"
import './Hero.scss'




export const HeroPrincipal = () =>{
    return (
        <div>
            <section className="heroSection">
                <div className="heroImage">
                    <img src={ImageProfile}/>
                </div>
                <div className="heroText">
                    <h1>Hola soy Yesica</h1>
                    <p className="subtitleText">Diseñadora  UX/UI y Front-end jr developer</p>
                    <hr></hr>
                    <p>Actualmente me encuentro trabajando como diseñadora UX/UI en diferentes proyectos utilizando la creatividad como herramienta integral para el diseño de website, eccomerce , landing pages, LMD, dashboards, aplicaciones móviles. Me considero una persona jovial y innovadora ,que promueve el trabajo en equipo para crear ideas y soluciones con el fin de obtener los mejores resultados posibles. Actualmente me encuentro estudiando desarrollo front-end como un complemento de mi carrera profesional .</p>
                </div>
            </section>
        </div>
    )
}

export default HeroPrincipal;