import React, { useState } from "react";
import "../../CSS/Proyectos/tarjetaproyectos.css";

//Importando imagen
import IconSelect from "../../Multimedia/Seleccionar.png";

//Esta componente creará una tarjeta con la información de un proyecto
function TarjetaProyecto({setVentanaP, setp1, setp2, setp3, setp4, setp5, setp6, v1, v2, v3, v4, v5, v6, datostarjeta}){

    const [hoverCursor, setHoverCursor] = useState(false);

    //Esta función ejecutará una serie de operaciones cuando sea clickeada
    function OperacionesTarjeta(){
        setVentanaP(true);
        setp1(v1);
        setp2(v2);
        setp3(v3);
        setp4(v4);
        setp5(v5);
        setp6(v6);
    }//Fin función

    return(<div className="containerInfoCard" onMouseEnter={()=> setHoverCursor(true)} onMouseLeave={()=> setHoverCursor(false)} onClick={()=> OperacionesTarjeta()}>
        
        <div className="containerInfoCard__img">
            <img className="containerInfoCard__img__main" src={datostarjeta.urlImagen} alt=""/>
            {hoverCursor && <div className="containerInfoCard__img__difu">
                    <img src={IconSelect} alt=""/>
                </div>}
        </div>

        <div className="containerInfoCard__importantData">
            
            <div className="containerInfoCard__importantData__name">
                <h2>{datostarjeta.tipoProyecto}</h2>
            </div>

            <div className="containerInfoCard__importantData__type">
                <h5>Proyecto</h5>
            </div>

            <div className="containerInfoCard__importantData__year">
                <h5>{datostarjeta.anho}</h5>
            </div>

        </div>

        <div className="containerInfoCard__title">
            <h2>{datostarjeta.title}</h2>
        </div>

        <div className="containerInfoCard__description">
            <p>{datostarjeta.descripcion}</p>
        </div>

    </div>);

}//Fin componente

export default TarjetaProyecto;