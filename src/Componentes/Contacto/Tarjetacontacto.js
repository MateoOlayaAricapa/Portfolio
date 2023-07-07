import React from "react";
import "../../CSS/Contactos/tarjetacontacto.css";

//Componente que contiene la información de un contacto
function TarjetaContacto({IconoContacto, NombreContacto, TituloContacto}){

    return(<div className="containerCardContact">
        
        <div className="containerCardContact__img">
            <img src={IconoContacto} alt="Icono que representa un contacto"/>
        </div>

        <h3>{NombreContacto}</h3>
        
        <div className="containerCardContact__title">
            <h4>{TituloContacto}</h4>
        </div>

    </div>);

}//Fin componente

export default TarjetaContacto;