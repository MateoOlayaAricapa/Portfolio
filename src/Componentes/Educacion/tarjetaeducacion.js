import React from "react";
import "../../CSS/Educacion/tarjetaeducacion.css";

//Importando logo universidad
import LogoUniversity from "../../Multimedia/Logo-uao.png";

//Esta componente contiene información detallada de una educación realizada
function TarjetaEducacion({TipoEducacion, AñoEducacion, NombreCarrera, DescripcionEducacion}){

    return(<div className="containerInfoEducacion">
        
        <div className="containerInfoEducacion__imgUniversity">
            <img src={LogoUniversity} alt="Logo que representa la universidad Autonóma"/>
        </div>

        <div className="containerInfoEducacion__info">
            
            <div className="containerInfoEducacion__info__Important">
                
                <div className="containerInfoEducacion__info__Important__nameUniversity">
                    <h2>Universidad Autonóma de Occidente</h2>
                </div>

                <div className="containerInfoEducacion__info__Important__typeEducation">
                    <h3>{TipoEducacion}</h3>
                </div>

                <div className="containerInfoEducacion__info__Important__years">
                    <h3>{AñoEducacion}</h3>
                </div>

            </div>

            <div className="containerInfoEducacion__info__Title">
                <h1>{NombreCarrera}</h1>
            </div>

            <div className="containerInfoEducacion__info__description">
                <p>{DescripcionEducacion}</p>
            </div>

        </div>

    </div>);

}//Fin componente

export default TarjetaEducacion;