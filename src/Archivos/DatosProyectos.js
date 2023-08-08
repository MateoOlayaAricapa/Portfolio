//Importando imágenes de fondo para los proyectos
import ImageJIC from "../Multimedia/JIC.png";
import ImageNF from "../Multimedia/NETFLIX.png";
import ImageRegimen from "../Multimedia/Régimen.png";
import ImageMatematicas from "../Multimedia/Matematicas.png";
import ImageRepositorio from "../Multimedia/Repositorio.png";
import ImageKazoku from "../Multimedia/Kazoku.png";

//Archivo que contiene los datos de los proyectos
export const DatosProyectos = [
    {title:"Aplicación de escritorio como repositorio multimedia con base de datos relacionales", 
    year:"2019", 
    urlVideo: "https://youtu.be/HOF60yD7qHA", 
    descripcion: "Este proyecto consiste en crear una aplicación que permitiera a un usuario buscar imágenes, videos y audios según sus preferencias. Además, se puede descargar, actualizar o eliminar estos contenidos a raíz de la base de datos relacional implementado en este proyecto.", 
    urlGitHub:"https://github.com/MateoOlayaAricapa/Repositorio_Multimedia.git", 
    tecnologies: ["Java","Rest API","MySQL", "SQL"]},
    {title:"Proyecto de diseño multimedia denominado Matemáticas Divertidas (UX/UI)", 
    year:"2022", 
    urlVideo: "https://youtu.be/jA8kxhghLiQ", 
    descripcion: "Proyecto que buscaba proveer una experiencia basada en un sistema multimedia interactivo que permitiera apoyar a los estudiantes de octavo y noveno grado de un instituto educativo colombiano. Adicionalmente, el desarrollo estaría enfocado únicamente hasta el diseño.", 
    urlGitHub:"https://github.com/MateoOlayaAricapa/Matematicas_Divertidas.git", 
    tecnologies: ["Metodologías","Diseño","UX/UI"]},
    {title:"Sitio Web JIC para servicios ofrecidos por jardines infantiles Colombia", 
    year:"2023", 
    urlVideo: "https://youtu.be/gPyj5vGeiJw", 
    descripcion: "Este proyecto tiene como objetivo desarrollar un sitio web donde se encuentre de forma confiable y detallada información de diferentes jardines infantiles que prestan sus servicios en una ciudad de Colombia. De este modo, los padres de familia podrán conocer jardines de sus preferencias y gustos.", 
    urlGitHub:"https://github.com/MateoOlayaAricapa/Proyecto_JIC.git", 
    tecnologies: ["React JS","Node.js", "MySQL", "HTML", "CSS", "Figma"]},
    {title:"Aplicación de escritorio Régimen Contributivo para cotizantes y beneficiarios", 
    year:"2023", 
    urlVideo: "https://youtu.be/78CeVQxZXuU", 
    descripcion: "Este proyecto tiene como objetivo desarrollar una aplicación en NetBeans que permita gestionar los procedimientos médicos de los cotizantes y sus beneficiarios en el régimen contributivo en Colombia.", 
    urlGitHub:"https://github.com/MateoOlayaAricapa/Proyecto_RegimenContributivo.git", 
    tecnologies: ["Java","MySQL","SQL", "Rest API"]},
    {title:"Modelos de aprendizaje automático para proyecto Big Data Netflix", 
    year:"2023", 
    urlVideo: "https://youtu.be/SWm3X4jj480", 
    descripcion: "Proyecto realizado en la especialización de Analítica de Big Data que buscaba desarrollar modelos de aprendizaje para solucionar una problemática hipotética presentada en la compañía de Netflix. Esta basaría su realización con la metología CRIPS-DM y un conjunto de datos disponibles de películas y series.", 
    urlGitHub:"https://github.com/MateoOlayaAricapa/BigData_Netflix.git", 
    tecnologies: ["Python","Big Data","CRIPS-DM"]},
    {title:"Sitio Web de venta comida ONLINE restaurante Kazoku Izakaya japonés", 
    year:"2023", 
    urlVideo: "https://youtu.be/EirXfLNhxFA", 
    descripcion: "Este proyecto abarca el desarrollo de un sitio web para un restaurante japonés ubicado en la ciudad de Cali, Colombia. Por otro lado, el objetivo es que se puedan realizar compras de platos de comida de manera ONLINE para un público especifíco.", 
    urlGitHub:"https://github.com/MateoOlayaAricapa/Proyecto_Kazoku.git", 
    tecnologies: ["React js", ".NET CORE", "PostgreSQL"]}
];

export const DatosTarjetaProyecto = [
    {tipoProyecto:"Base de datos",
    urlImagen: ImageRepositorio, 
    anho:"2019", 
    title:"Aplicación de escritorio como repositorio multimedia con base de datos", 
    descripcion:"Este proyecto consiste en crear una aplicación que permitiera a un usuario buscar imágenes, videos y audios según sus preferencias. Además, se puede descargar, actualizar o eliminar estos contenidos a raíz de la base de datos relacional implementado en este proyecto."},
    {tipoProyecto:"Diseño",
    urlImagen: ImageMatematicas,  
    anho:"2022", 
    title:"Proyecto de diseño multimedia denominado Matemáticas Divertidas", 
    descripcion:"Proyecto que buscaba proveer una experiencia basada en un sistema multimedia interactivo que permitiera apoyar a los estudiantes de octavo y noveno grado de un instituto educativo colombiano. Adicionalmente, el desarrollo estaría enfocado únicamente hasta el diseño."},
    {tipoProyecto:"Sitio Web",
    urlImagen: ImageJIC,  
    anho:"2023", 
    title:"Sitio Web JIC para servicios ofrecidos por jardines infantiles Colombia", 
    descripcion:"Este proyecto tiene como objetivo desarrollar un sitio web donde se encuentre de forma confiable y detallada información de diferentes jardines infantiles que prestan sus servicios en una ciudad de Colombia. De este modo, los padres de familia podrán conocer jardines de sus preferencias y gustos."},
    {tipoProyecto:"Aplicación", 
    urlImagen: ImageRegimen, 
    anho:"2023", 
    title:"Aplicación de escritorio Régimen Contributivo", 
    descripcion:"Este proyecto tiene como objetivo desarrollar una aplicación en NetBeans que permita gestionar los procedimientos médicos de los cotizantes y sus beneficiarios en el régimen contributivo en Colombia."},
    {tipoProyecto:"Big Data",
    urlImagen: ImageNF,  
    anho:"2023", 
    title:"Modelos de aprendizaje automático para proyecto Big Data Netflix", 
    descripcion:"Proyecto realizado en la especialización de Analítica de Big Data que buscaba desarrollar modelos de aprendizaje para solucionar una problemática hipotética presentada en la compañía de Netflix. Esta basaría su realización con la metología CRIPS-DM y un conjunto de datos disponibles de películas y series."},
    {tipoProyecto:"Sitio Web",
    urlImagen: ImageKazoku,  
    anho:"2023", 
    title:"Sitio Web de venta comida ONLINE restaurante Kazoku japonés", 
    descripcion:"Este proyecto abarca el desarrollo de un sitio web para un restaurante japonés ubicado en la ciudad de Cali, Colombia. Por otro lado, el objetivo es que se puedan realizar compras de platos de comida de manera ONLINE para un público especifíco."}
];