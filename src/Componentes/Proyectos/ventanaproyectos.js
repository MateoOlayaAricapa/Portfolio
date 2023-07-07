import React from "react";
import ReactPlayer from "react-player";
import "../../CSS/Proyectos/ventanaproyecto.css";

//Importando iconos
import IconClose from "../../Multimedia/Cerrar.png";
import IconLink from "../../Multimedia/enlace.png";

//Esta componente renderizará una ventana emergente para mostrar info importante de proyectos
function VentanaProyecto({setVentanaP, datosProyecto}){

    const tecnologies = datosProyecto.tecnologies;

    return(<div className="containerPopupProyects">
        
        <div className="containerPopupProyects__info">
            
            <div className="containerPopupProyects__info__buttonClose">
                <button onClick={() => setVentanaP(false)} type="button">
                    <img src={IconClose} alt="Icono que representa cerrar ventana"/>
                </button>
            </div>

            <div className="containerPopupProyects__info__title">
                <h1>{datosProyecto.title}</h1>
            </div>

            <div className="containerPopupProyects__info__video">
                <ReactPlayer 
                url={datosProyecto.urlVideo}
                controls
                width='100%'/>
            </div>

            <div className="containerPopupProyects__info__titledescription">
                
                <div className="containerPopupProyects__info__titledescription__title">
                    <h1>Descripción proyecto</h1>
                </div>

                <div className="containerPopupProyects__info__titledescription__year">
                    <h4>{datosProyecto.year}</h4>
                </div>

            </div>

            <div className="containerPopupProyects__info__textdescription">
                <p>{datosProyecto.descripcion}</p>
            </div>

            <div className="containerPopupProyects__info__tecnologies">
                
                {tecnologies.map((item, i) => <div key={i} className="containerPopupProyects__info__tecnologies__card">
                    <h2>{item}</h2>
                </div>)}

                <a href={datosProyecto.urlGitHub} target="_blank" rel="noreferrer">
                    <img src={IconLink} alt="Icono que representa link"/>
                    GitHub
                </a>
            
            </div>

        </div>

    </div>)

}//Fin componente

export default VentanaProyecto;