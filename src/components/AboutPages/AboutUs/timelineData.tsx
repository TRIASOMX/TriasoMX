import img1 from "../../../assets/images/About/Timeline/Asphalt/1.webp"
import img2 from "../../../assets/images/About/Timeline/Asphalt/2.webp"
import img3 from "../../../assets/images/About/Timeline/Asphalt/3.webp"
import img4 from "../../../assets/images/About/Timeline/Asphalt/4.webp"
import img5 from "../../../assets/images/About/Timeline/Asphalt/5.webp"
import img6 from "../../../assets/images/About/Timeline/Asphalt/6.webp"
import img7 from "../../../assets/images/About/Timeline/Asphalt/7.webp"
import img8 from "../../../assets/images/About/Timeline/Asphalt/8.webp"
import img9 from "../../../assets/images/About/Timeline/Asphalt/9.webp"
import img10 from "../../../assets/images/About/Timeline/Asphalt/10.webp"
import img11 from "../../../assets/images/About/Timeline/Asphalt/11.webp"
import img12 from "../../../assets/images/About/Timeline/Asphalt/12.webp"
import img13 from "../../../assets/images/About/Timeline/Asphalt/13.webp"
import img14 from "../../../assets/images/About/Timeline/Asphalt/14.webp"
import img15 from "../../../assets/images/About/Timeline/Asphalt/15.webp"
import img16 from "../../../assets/images/About/Timeline/Asphalt/16.webp"
import img17 from "../../../assets/images/About/Timeline/Asphalt/17.webp"
import img18 from "../../../assets/images/About/Timeline/Asphalt/18.webp"
import img19 from "../../../assets/images/About/Timeline/Asphalt/19.webp"
import img20 from "../../../assets/images/About/Timeline/Asphalt/20.webp"
import img21 from "../../../assets/images/About/Timeline/Asphalt/21.webp"
import img22 from "../../../assets/images/About/Timeline/Asphalt/22.webp"
import img23 from "../../../assets/images/About/Timeline/Asphalt/23.webp"
import img24 from "../../../assets/images/About/Timeline/Asphalt/24.webp"
import img25 from "../../../assets/images/About/Timeline/Asphalt/25.webp"
import img26 from "../../../assets/images/About/Timeline/Asphalt/26.webp"
import img27 from "../../../assets/images/About/Timeline/Asphalt/27.webp"
import img28 from "../../../assets/images/About/Timeline/Asphalt/28.webp"
import img29 from "../../../assets/images/About/Timeline/Asphalt/29.webp"
import img30 from "../../../assets/images/OSHand.webp"


export interface TimelineEvent {
    id: string;
    title?: string;
    description?: string;
    category?: string;
    image?: any;
}
export interface TimelineDate {
    id: string;
    date: string;
    label: string;
    events: TimelineEvent[];
}
export const timelineData: TimelineDate[] = [
    {
        id:"d16",
        date:"1997",
        label:"1997",
        events:[{
            id:"e30", description:"Se produjo la primera planta de asfalto de la compañía.", image: img1.src
        }]
    },

    {
        id: "d1",
        date: "2006",
        label: "2006",
        events: [
            { id: "e1", description: "Presentamos nuestro diseño de quemador de llama abierta." , image: img2.src },
            {id: "e31", image:img3.src}
        ],
    },
    {
        id: "d2",
        date: "2011",
        label: "2011",
        events: [
            { id: "e2", description: "Presentamos nuestro tambor de contraflujo combinado con una casa de bolsas tipo pulse-jet.", image: img4.src },
        ],
    },
    {
        id: "d3",
        date: "2012",
        label: "2012",
        events: [
            { id: "e4", description: "Presentamos nuestro elevador curvo, un diseño distintivo que reducía la altura de descarga de los camiones y ofrecía claras ventajas operativas. Sin embargo, debido a sus mayores requerimientos de mantenimiento, el diseño fue descontinuado posteriormente.", image: img5.src },
        ],
    },
    {
        id: "d4",
        date: "2013",
        label: "2013",
        events: [
            { id: "e5", description: "Lanzamos nuestra planta de mezcla en frío para aplicaciones en los sectores de construcción, industrial y minero.", image:img6.src },
            { id: "e6", description: "Implementamos un sistema de paletas ajustables en nuestro tambor de contraflujo.", image:img7.src },
        ],
    },
    {
        id: "d5",
        date: "2014",
        label: "2014",
        events: [
            { id: "e8", description: "Implementamos un sistema de control computarizado opcional en nuestros tanques de asfalto para el monitoreo de inventario y la prevención de pérdidas.", image: img9.src },
            { id: "e9", description: "Incorporamos puertos de muestreo de emisiones en la chimenea de escape para permitir la verificación de emisiones conforme a la normativa ambiental.", image: img8.src },
        ],
    },
    {
        id: "d6",
        date: "2015",
        label: "2015",
        events: [
            { id: "e10", description: "Cambiamos las casas de bolsas de nuestras plantas de contraflujo en México de sistemas pulse-jet a sistemas de aire reverso. Actualmente ofrecemos ambas configuraciones según la preferencia del cliente.", image: img11.src },
            { id: "e11", description: "Presentamos dos modelos de plantas de asfalto de flujo paralelo —Basic y Plus— para atender distintos requerimientos de desempeño y niveles de presupuesto.", image: img10.src },
            { id: "e12", description: "Construimos nuestro primer silo de almacenamiento de mezcla caliente, comenzando con la configuración más compleja: un diseño autoerigible.", image: img12.src }
        ],
    },
    {
        id: "d7",
        date: "2016",
        label: "2016",
        events: [
            { id: "e10", description: "Actualizamos el extractor de gases para reducir el ruido, mejorar la eficiencia y utilizar transmisión directa para un menor mantenimiento.", image: img14.src },
            { id: "e11", description: "Cambiamos el color de nuestras plantas de amarillo a arena y aislamos completamente todos los tambores, recubriéndolos con lámina de acero inoxidable.", image: img13.src },
            { id: "e12", description: "Rediseñamos por completo nuestra planta de mezcla en frío, dándole una apariencia mucho más moderna.", image: img15.src }
        ],
    },
    {
        id: "d8",
        date: "2017",
        label: "2017",
        events: [
            { id: "e13", description: "Presentamos un mezclador pugmill externo (mezclador de paletas) como configuración opcional para plantas con tambor de contraflujo.", image: img17.src },
            { id: "e14", description: "Presentamos nuestro quemador actual “Total Air”, equipado con un precalentador de combustible para quemar de forma eficiente combustibles de mayor viscosidad.", image: img16.src },
        ],
    },
    {
        id: "d9",
        date: "2018",
        label: "2018",
        events: [
            { id: "e15", description: "Construimos nuestro primer sistema de incorporación de hule de neumático en polvo para asfalto, permitiendo la producción de mezclas asfálticas con hule. Esta tecnología apoya el reciclaje de neumáticos y la reducción de residuos, aunque su adopción en el mercado sigue siendo limitada.", image: img18.src },
            { id: "e16", description: "Para reducir el consumo de combustible, sellamos por completo las entradas de aire no deseadas a lo largo del tambor.", image: img19.src },
        ],
    },
    {
        id: "d10",
        date: "2019",
        label: "2019",
        events: [{ id: "e17", description: "Desarrollamos internamente un software de control para la operación optimizada de la planta, programado con Siemens TIA Portal y una interfaz de operador basada en LabVIEW.", image: img20.src }]
    },
    {
        id: "d11",
        date: "2021",
        label: "2021",
        events: [{ id: "e18", description: "Descontinuamos los modelos Basic y Plus y migramos a un sistema de configuración modular por menú, con componentes cotizados de forma individual, lo que permite a los clientes definir su planta de acuerdo con su presupuesto y requerimientos.", image: img21.src }]
    },
    {
        id: "d12",
        date: "2022",
        label: "2022",
        events: [{ id: "e19", description: "Continuamos ampliando este menú de opciones para atender aplicaciones específicas, incluyendo plantas galvanizadas para instalaciones costeras, rotación de tambor a velocidad variable y tanques de asfalto con suministro auxiliar directo al tambor.", image: img22.src }]
    },
    {
        id: "d13",
        date: "2023",
        label: "2023",
        events: [{ id: "e20", description: "Aumentamos el tamaño de componentes clave para mantener la capacidad de producción con una humedad de agregado del 3 % en lugar del 5 %.", image: img23.src }]
    },
    {
        id: "d14",
        date: "2024",
        label: "2024",
        events: [{ id: "e21", description: "Aumentamos el dimensionamiento de la casa de bolsas para cumplir con el estándar estadounidense de 175 ACFM por tonelada de producción.", image: img24.src }]
    },

    {
        id: "d15",
        date: "2025",
        label: "2025",
        events:[{
            id:"e22",
            title:"Presentamos nuestro quemador más reciente:",
            description: "Ionización de combustible asistida por plasma para una combustión más eficiente y limpia, con autorregulación del exceso de oxígeno que elimina el ajuste manual de la carburación del combustible, y silenciador de quemador para una operación silenciosa que cumple con estrictos requerimientos de bajo ruido.",
            image: img25.src
        },
        {
         id: "e23", description: "Boquillas supersónicas en la casa de bolsas que permiten una alta relación aire-tela de 8:1.", image: img29.src
        },
        {
            id:"e24", description:"Actualizamos el extractor de gases para reducir el ruido mediante un diseño de aspas más aerodinámico, cumpliendo con estrictos requerimientos de bajo ruido.", image: img26.src
        },
        {
            id:"e25", description:"Modificaciones al sistema de RAP para una capacidad de incorporación de hasta el 50 %.", image: img27.src
        },
        {
            id:"e26", description:"Incorporación de aspas aerodinámicas que reducen el ruido del sistema de escape, permitiendo que la planta de asfalto opere en zonas urbanas o en sitios con normativas estrictas de ruido."
        },
        {
            id:"e27", description:"Variadores de velocidad para los sistemas de rotación del tambor, que permiten un control total del tiempo de exposición al calor dentro del tambor, favoreciendo una mayor incorporación de RAP u otros requerimientos del diseño de mezcla.", image: img28.src
        },
        {
            id:"e28",
            title:"Triaso Relief, nuevo sistema de control y supervisión.",
            description:"Ofrece una forma práctica y eficiente de gestionar la operación del equipo industrial. Con monitoreo y automatización avanzados, simplifica el control de procesos clave como la temperatura, la dosificación de materiales y las tasas de producción. Diseñado para adaptarse a distintas configuraciones, garantiza un desempeño confiable mientras prioriza la seguridad y la facilidad de uso.",
            image: img30.src
        },
        {
            id:"e29",
            description:"Actualmente, nuestras plantas consumen menos combustible que las mejores plantas de la competencia. La calidad de nuestra mezcla asfáltica también está entre las mejores del mercado, y se mantiene homogénea durante todo el día, sin importar la tasa de producción (tph). Además, cumplimos con la normativa ambiental contra la contaminación. Nuestra planta de contraflujo con casa de bolsas puede operar en zonas con las regulaciones ambientales más estrictas."
        }
    ]
    }

];