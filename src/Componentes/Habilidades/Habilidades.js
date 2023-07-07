import React from "react";
import "../../CSS/Habilidades/habilidades.css";
import TarjetaHabilidad from "./tarjetahabilidades";

//Importando imágenes
import IconReact from "../../Multimedia/LogoReact.png";
import IconHTML from "../../Multimedia/html-5.png";
import IconCSS from "../../Multimedia/css-3.png";
import IconJS from "../../Multimedia/js.png";
import IconJava from "../../Multimedia/java.png";
import IconPython from "../../Multimedia/piton.png";
import IconSQL from "../../Multimedia/base-de-datos.png";
import IconMySQL from "../../Multimedia/mysql.png";
import Iconilustrator from "../../Multimedia/ilustrador.png";
import IconPremier from "../../Multimedia/premier.png";
import Icongit from "../../Multimedia/github.png";
import IconRest from "../../Multimedia/api.png";

//Componente que tendrá las habilidades del trabajador
function SeccionHabilidades(){

    const skills = [{url:IconReact, titulo:"React JS", widthImagen:"7em"},
    {url:IconHTML, titulo:"HTML", widthImagen:"4em"},
    {url:IconCSS, titulo:"CSS", widthImagen:"4em"},
    {url:IconJS, titulo:"JavaScript", widthImagen:"4em"},
    {url:IconJava, titulo:"Java", widthImagen:"4em"},
    {url:IconPython, titulo:"Python", widthImagen:"4em"},
    {url:IconSQL, titulo:"SQL", widthImagen:"4em"},
    {url:IconMySQL, titulo:"MySQL", widthImagen:"4em"},
    {url:Iconilustrator, titulo:"Ilustrator", widthImagen:"4em"},
    {url:IconPremier, titulo:"Adobe Premier", widthImagen:"4em"},
    {url:Icongit, titulo:"GitHub", widthImagen:"4em"},
    {url:IconRest, titulo:"Rest API", widthImagen:"4em"}];

    return(<section id="section__skills" className="containerSkills">
        
        <h1>MIS HABILIDADES</h1>

        <div className="containerSkills_cards">
            
            {skills.map((dato, i) => <TarjetaHabilidad key={i} ArchivoImagen={dato.url} TituloHabilidad={dato.titulo} widthImagen={dato.widthImagen}/>)}

        </div>

    </section>);

}//Fin componente

export default SeccionHabilidades;