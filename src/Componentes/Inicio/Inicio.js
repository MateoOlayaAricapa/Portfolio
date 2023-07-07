import React from "react";
import SeccionEncabezado from "../Encabezado/encabezado";
import SeccionIntroduccion from "../Introducción/introduccion";
import SeccionSobremi from "../SobreMi/sobremi";
import SeccionHabilidades from "../Habilidades/Habilidades";
import SeccionProyectos from "../Proyectos/Proyectos";
import SeccionEducacion from "../Educacion/Educacion";
import SeccionContactos from "../Contacto/Contacto";
import "../../CSS/Inicio/inicio.css";

//Esta componente llamará a otras componentes secundarias para el portfolio
function SeccionInicial(){

    return(<div className="containerMain">
        
        <SeccionEncabezado/>
        <SeccionIntroduccion/>
        <SeccionSobremi/>
        <SeccionHabilidades/>
        <SeccionProyectos/>
        <SeccionEducacion/>
        <SeccionContactos/>

    </div>);

}//Fin componente

export default SeccionInicial;