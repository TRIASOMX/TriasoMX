import React from "react";
import Accordion from "../unitComponents/Accordion";

const Collapsable = () => {
  const faqItems = [
    {
      title: "Integración de PLC y HMI",
      content:
        "Cuando funciona sin consola de control, el silo se maneja a través de un controlador lógico programable (PLC) y una interfaz hombre-máquina (HMI) de Proface, lo que permite un control y una supervisión fluidos. El sistema facilita la gestión de la interfaz y garantiza un manejo preciso de todas las funciones del silo.",
    },
    {
      title: "Visualización en tiempo real",
      content:
        "Todas las funciones del silo —incluidos los datos de temperatura de la mezcla y de pesaje— se muestran claramente en la interfaz HMI para garantizar una transparencia operativa total. Esta información también se envía a una base de datos en la nube en tiempo real, lo que permite la supervisión remota a través de una aplicación, en cualquier momento y desde cualquier lugar.",
    },
    {
      title: "Mayor eficiencia en la carga y descarga:",
      content:
        "Equipado con células de carga para medir con precisión tanto la mezcla caliente almacenada como la suministrada. El sistema se integra con el PLC para el registro de datos en tiempo real y un control preciso del peso.",
    },
    {
      title: "Historial de descargas",
      content:
        "Realiza un seguimiento de un número ilimitado de camiones y almacena todos los datos relevantes para su futura consulta y análisis. Los datos están disponibles en cualquier momento para generar informes y comparativas de rendimiento.",
    },
    {
      title: "Sistema automatizado de almacenamiento de datos",
      content:
        "El sistema almacena automáticamente los datos de la mezcla en caliente entregada, indicando la hora de entrega, el peso, la temperatura de la mezcla y la identificación del camión mediante un código de barras o la introducción de datos por teclado.",
    },
    {
      title: "Reductores y poleas de acero Browning Gear",
      content:
        "Los sistemas de transmisión están equipados con reductores Browning de gran tamaño y alta resistencia, así como con poleas de acero montadas en el cubo, lo que garantiza una transmisión de potencia suave y eficiente.",
    },
    {
      title: "Motores y componentes eléctricos de Siemens",
      content:
        "Reliable Siemens motors and electrical parts ensure durability and consistent performance.",
    },
    {
      title: "Sensor sónico para medir el nivel de la mezcla caliente dentro del silo:",
      content:
        "Controla con precisión los niveles de la mezcla caliente en tiempo real, lo que permite optimizar el almacenamiento y evitar desbordamientos.",
    },
    {
      title: "Alarma visual y audible para nivel máximo de mezcla",
      content:
      "Alarmas visuales y audibles que alertan al operador y al personal cuando el silo está lleno."
    },
    {
      title:"Sensor sónico para indicar el nivel de mezcla dentro del silo",
      content:
      "Visualización en tiempo real del nivel de mezcla asfáltica en la consola del operador y dispositivos moviles.",
    },
    {
      title:"Configuración versátil",
      content:
      "Funciona sin problemas en una cabina de control dedicada o bajo un techo de protección."
    },
    {
      title:"Ajustes rápidos",
      content:
      "Permite realizar ajustes rápidos en los parámetros de control u operación para adaptarse a los requerimientos del proyecto."
    }
  ];
  return (
    <div className="w-full flex flex-col gap-2 justify-center">
      <Accordion items={faqItems} />
    </div>
  );
};

export default Collapsable;
