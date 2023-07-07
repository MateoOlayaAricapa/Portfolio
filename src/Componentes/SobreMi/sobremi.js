import React from "react";
import "../../CSS/Sobremi/sobremi.css"

//Importando imagen
import PhotoPerfil from "../../Multimedia/Perfil.png";
import IconColombia from "../../Multimedia/colombia.png";

import archivoPDF from "../../Archivos/Hoja de vida.pdf";

//Esta componente tendrá información sobre la sección sobre mí
function SeccionSobremi(){

    return(<section id="section__aboutMe" className="containerAboutMe">
        
        <div className="containerAboutMe__photo">
            
            <div className="containerAboutMe__photo__img">
                <img src={PhotoPerfil} alt="Foto de perfil"/>
            </div>

            <div className="containerAboutMe__photo__data">
                
                <div className="containerAboutMe__photo__data__experience">
                    <h1>5</h1>
                    <h2>Años de estudio académico</h2>
                </div>

                <div className="containerAboutMe__photo__data__experience">
                    <h1>+5</h1>
                    <h2>Proyectos académicos</h2>
                </div>

            </div>

        </div>

        <div className="containerAboutMe__info">
            
            <div className="containerAboutMe__info__title">
                
                <h1>SOBRE MÍ</h1>
                <img src={IconColombia} alt="Icono país colombia"/>

            </div>

            <div className="containerAboutMe__info__text">
                <p> Soy Ingeniero multimedia egresado de la <span className="containerAboutMe__info__text__span">Universidad Autónoma de Occidente </span> 
                    que es altamente apasionado por la integración de la tecnología y el diseño 
                    creativo. Mi enfoque se centra en el desarrollo de aplicaciones e interfaces 
                    web interactivas como el diseño de experiencias centradas en el usuario. 
                    <br/><br/>
                    Por otro lado, busco encontrar una oportunidad laboral que me permita poner en
                    práctica todo el conocimiento aprendido en mi carrera, y de ese modo comenzar a 
                    obtener experiencia laboral para desarrollarme profesionalmente.</p>
            </div>

            <div className="containerAboutMe__info__buttons">
                <a className="containerAboutMe__info__buttons__download" href={archivoPDF} download>DESCARGAR CV</a>
                <a className="containerAboutMe__info__buttons__contact" href="#section__contacts">CONTÁCTAME</a>
            </div>

        </div>

    </section>);

}//Fin componente

export default SeccionSobremi;