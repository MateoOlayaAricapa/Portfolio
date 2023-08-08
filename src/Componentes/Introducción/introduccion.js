import React from "react";
import "../../CSS/Introduccion/introduccion.css";

//Importando imágenes
import IconLinkedin from "../../Multimedia/social.png";
import IconGitHub from "../../Multimedia/github.png";
import PhotoEmploye from "../../Multimedia/ImagenPerfilInicial.png";

//Importando archivo pdf
import archivoPDF from "../../Archivos/Hoja de vida.pdf";

//Esta componente regresará un div que contiene toda la información de introducción
function SeccionIntroduccion(){

    return(<section id="section__intro" className="containerIntro">
        
        <div className="containerIntro__text">
            
           <div className="containerIntro__text__title">
            
                <div className="containerIntro__text__title__h3">
                    <h3>HOLA, BIENVENIDO A MI PORTFOLIO!</h3>
                </div>

                <div className="containerIntro__text__title__h1">
                    <h1>SOY <span>MATEO</span> OLAYA, UN INGENIERO MULTIMEDIA</h1>
                </div>

                <div className="containerIntro__text__title__p">
                    <p>Soy un <span>ingeniero multimedia</span> que es altamente 
                        apasionado por la integración de la tecnología con el diseño creativo.</p>
                </div>

           </div>

           <div className="containerIntro__text__buttons">
                <a href={archivoPDF} className="containerIntro__text__href--download" type="button" download>DESCARGAR CV</a>
                <a href="https://www.linkedin.com/in/mateoolayaaricapa/" className="containerIntro__text__buttons--social" target="_blank" rel="noreferrer">
                    <img src={IconLinkedin} alt="icono que representa la plataforma de linkedin"/>
                </a>
                <a href="https://github.com/MateoOlayaAricapa" className="containerIntro__text__buttons--social" target="_blank" rel="noreferrer">
                    <img src={IconGitHub} alt="icono que representa la plataforma de GitHub"/>
                </a>
           </div>

        </div>

        <div className="containerIntro__image">
           
           <img src={PhotoEmploye} alt="Foto perfil del trabajador"/>

        </div>

    </section>);

}//Fin componente

export default SeccionIntroduccion;