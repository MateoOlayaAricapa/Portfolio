import React from "react";
import TarjetaEducacion from "./tarjetaeducacion";
import "../../CSS/Educacion/educacion.css";

//Componente que conserva información sobre la educación
function SeccionEducacion(){

    return(<section id="section__education" className="containerEducation">
        
        <h1 className="containerEducation__h1">MI EDUCACIÓN</h1>

        <div className="containerEducation__cards">
            
            <TarjetaEducacion TipoEducacion={"Carrera universitaria"} 
            AñoEducacion={"2016 - 2022"} 
            NombreCarrera={"Ingeniería Multimedia"} 
            DescripcionEducacion={"Carrera de ingenieria que integra las habilidades de diseño, la informática, la electrónica y las telecomunicaciones para crear sistemas interactivos. Además de considerar la implementación de tecnologías de la información, el uso de hardware/software, desarrollo de contenidos digitales y la creación de experiencias centradas en el usuario."}/>
            
            <TarjetaEducacion TipoEducacion={"Especialización"} 
            AñoEducacion={"En proceso"} 
            NombreCarrera={"Analítica de Big Data"} 
            DescripcionEducacion={"Esta especialización permite el uso de técnicas de gestión, análisis y visualización de datos para la generación de modelos descriptivos, predictivos, y prescriptivos que soporte la toma de decisiones, y de esa modo generar valor en ámbitos organizacionales."}/>

        </div>

    </section>)

}//Fin componente

export default SeccionEducacion;