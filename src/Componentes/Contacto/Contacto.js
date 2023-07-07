import React from "react";
import TarjetaContacto from "./Tarjetacontacto";
import "../../CSS/Contactos/contactos.css";

//Importando imágenes
import Photo from "../../Multimedia/FotoPerfilSecundario.png";
import IconCorreo from "../../Multimedia/correo-electronico.png";
import IconTelefono from "../../Multimedia/Telefono.png";
import IconLinkedIn from "../../Multimedia/social.png";

//Componente que conserva información sobre contactos
function SeccionContactos(){

    return(<section id="section__contacts" className="containerContacts">

        <h1>CONTÁCTAME</h1>

        <div className="containerContacts__photoName">
            <img src={Photo} alt="Foto de perfil del trabajador"/>
            <h2>Mateo Olaya Aricapa</h2>
        </div>

        <div className="containerContacts__info">
            
            <TarjetaContacto IconoContacto={IconTelefono} 
            NombreContacto={"Celular"} 
            TituloContacto={"(+57) 3146393646"}/>
            
            <TarjetaContacto IconoContacto={IconCorreo} 
            NombreContacto={"Correo"} 
            TituloContacto={"mateo.olaya.aricapa@gmail.com"}/>

            <TarjetaContacto IconoContacto={IconLinkedIn} 
            NombreContacto={"LinkedIn"} 
            TituloContacto={"MateoOlayaAricapa"}/>
            
        </div>


    </section>);

}//Fin componente

export default SeccionContactos;