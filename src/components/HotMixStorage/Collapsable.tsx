import Accordion from "../unitComponents/Accordion";

const Collapsable = () => {
  const faqItems = [
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
      title: "Sistema automatizado de almacenamiento de datos",
      content:
        "El sistema almacena automáticamente los datos de la mezcla en caliente entregada, indicando la hora de entrega, el peso, la temperatura de la mezcla y la identificación del camión mediante un código de barras o la introducción de datos por teclado.",
    },

    {
      title: "Motores y componentes eléctricos de Siemens",
      content:
        "Reliable Siemens motors and electrical parts ensure durability and consistent performance.",
    },
    {
      title:
        "Sensor sónico para medir el nivel de la mezcla caliente dentro del silo:",
      content:
        "Controla con precisión los niveles de la mezcla caliente en tiempo real, lo que permite optimizar el almacenamiento y evitar desbordamientos.",
    },
    {
      title: "Alarma visual y audible para nivel máximo de mezcla",
      content:
        "Alarmas visuales y audibles que alertan al operador y al personal cuando el silo está lleno.",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-2 justify-center">
      <Accordion items={faqItems} />
    </div>
  );
};

export default Collapsable;
