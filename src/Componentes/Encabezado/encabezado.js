import React from "react";
import "../../CSS/Encabezado/encabezado.css";

//Esta componente regresará un div que contiene el encabezado del portfolio
function SeccionEncabezado(){

    return(<div className="containerHeader">
        
        <a className="containerHeader__a" href="#section__intro">INICIO</a>
        <a className="containerHeader__a" href="#section__aboutMe">SOBRE MÍ</a>
        <a className="containerHeader__a" href="#section__skills">HABILIDADES</a>
        <a className="containerHeader__a" href="#section__proyects">PROYECTOS</a>
        <a className="containerHeader__a" href="#section__education">EDUCACIÓN</a>
        <a className="containerHeader__a" href="#section__contacts">CONTACTOS</a>

    </div>);

}//Fin componente

export default SeccionEncabezado;