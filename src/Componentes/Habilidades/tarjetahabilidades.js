import React from "react";
import "../../CSS/Habilidades/tarjetahabilidad.css";

//Esta componente tendrá el diseño de las tarjetas para las habilidades
function TarjetaHabilidad({ArchivoImagen, TituloHabilidad, widthImagen}){

    return(<div className="containerCardSkill">
        
        <div className="containerCardSkill__img">
            <img style={{width:widthImagen}} src={ArchivoImagen} alt=""/>
        </div>
        
        <h1>{TituloHabilidad}</h1>

    </div>);

}//Fin componente

export default TarjetaHabilidad;