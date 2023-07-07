import React, { useState } from "react";
import "../../CSS/Proyectos/proyectos.css";
import TarjetaProyecto from "./tarjetaproyecto";
import VentanaProyecto from "./ventanaproyectos";

//Importando arreglo tipo Json que tiene datos de proyectos
import { DatosProyectos, DatosTarjetaProyecto } from "../../Archivos/DatosProyectos";

//Componente que conserva información sobre los proyectos realizados
function SeccionProyectos(){

    const [VentanaPopup, setVentanaPopup] = useState(false);

    //Estados para cada ventana creada para un proyecto
    const [proyectone, setproyectone] = useState(false);
    const [proyecttwo, setproyecttwo] = useState(false);
    const [proyecthree, setproyecthree] = useState(false);
    const [proyectfour, setproyectfour] = useState(false);
    const [proyectfive, setproyectfive] = useState(false);

    var datoproyecto = {};

    //Esta condición evaluará cuál tarjeta fue seleccionada para pasar información del proyecto a la ventana (popup)
    if(proyectone){

        datoproyecto = DatosProyectos[0];

    }else if(proyecttwo){

        datoproyecto = DatosProyectos[1];

    }else if(proyecthree){

        datoproyecto = DatosProyectos[2];

    }else if(proyectfour){

        datoproyecto = DatosProyectos[3];

    }else if(proyectfive){

        datoproyecto = DatosProyectos[4];

    }//Fin condición

    return(<section id="section__proyects" className="containerProyects">

        {VentanaPopup && <VentanaProyecto setVentanaP={setVentanaPopup} datosProyecto={datoproyecto}/>}

        <h1>MIS PROYECTOS</h1>

        <div className="containerProyects__cards">
            
            <TarjetaProyecto setVentanaP={setVentanaPopup} 
            setp1={setproyectone} setp2={setproyecttwo} setp3={setproyecthree} setp4={setproyectfour} setp5={setproyectfive} 
            v1={true} v2={false} v3={false} v4={false} v5={false} datostarjeta={DatosTarjetaProyecto[0]}/>

            <TarjetaProyecto setVentanaP={setVentanaPopup}
            setp1={setproyectone} setp2={setproyecttwo} setp3={setproyecthree} setp4={setproyectfour} setp5={setproyectfive} 
            v1={false} v2={true} v3={false} v4={false} v5={false} datostarjeta={DatosTarjetaProyecto[1]}/>

            <TarjetaProyecto setVentanaP={setVentanaPopup}
            setp1={setproyectone} setp2={setproyecttwo} setp3={setproyecthree} setp4={setproyectfour} setp5={setproyectfive} 
            v1={false} v2={false} v3={true} v4={false} v5={false} datostarjeta={DatosTarjetaProyecto[2]}/>

            <TarjetaProyecto setVentanaP={setVentanaPopup}
            setp1={setproyectone} setp2={setproyecttwo} setp3={setproyecthree} setp4={setproyectfour} setp5={setproyectfive} 
            v1={false} v2={false} v3={false} v4={true} v5={false} datostarjeta={DatosTarjetaProyecto[3]}/>

            <TarjetaProyecto setVentanaP={setVentanaPopup}
            setp1={setproyectone} setp2={setproyecttwo} setp3={setproyecthree} setp4={setproyectfour} setp5={setproyectfive} 
            v1={false} v2={false} v3={false} v4={false} v5={true} datostarjeta={DatosTarjetaProyecto[4]}/>

        </div>
        
    </section>);

}//Fin componente

export default SeccionProyectos;