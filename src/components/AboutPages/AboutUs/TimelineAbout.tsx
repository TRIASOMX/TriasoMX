import { useState } from "react";
import { timelineData } from "./timelineData";
import TimelineBar from "./timelineBar";
import TimelineContent from "./timelineContent";
// import { timelineDataRock } from "./timelineDataRock"

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [activeIndexRock, setActiveIndexRock] = useState(0);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-10">
        <h1 className="uppercase text-xl md:text-3xl font-bold">
          Plantas de asfalto
        </h1>
      </div>

      <TimelineBar
        dates={timelineData}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />

      <TimelineContent
        dates={timelineData}
        activeIndex={activeIndex}
        onSlideChange={setActiveIndex}
      />

      {/* <div className="max-w-7xl mx-auto px-8 py-10">
        <h1 className="uppercase text-2xl lg:text-5xl md:text-5xl font-bold">Rock Crushers</h1>
      </div>

      <TimelineBar
        dates={timelineDataRock}
        activeIndex={activeIndexRock}
        onSelect={setActiveIndexRock}
      />

      <TimelineContent
        dates={timelineDataRock}
        activeIndex={activeIndexRock}
        onSlideChange={setActiveIndexRock}
      /> */}

      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col space-y-5 text-sm md:text-base">
          <p>
            Como es común en empresas innovadoras con fuertes ventas, han
            surgido periódicamente competidores más pequeños, que captan ventas
            limitadas con equipos de apariencia estándar pero que carecen de
            calidad y desempeño a largo plazo. Nos enteramos de esto a través de
            sus propios clientes, quienes con frecuencia buscan correcciones o
            mejoras al adquirir equipo adicional, y suelen recurrir a nosotros
            para esas soluciones.
          </p>
          <p>
            A medida que la innovación avanza en la industria, marcas
            internacionales han entrado al mercado mexicano y captado parte de
            la demanda. En respuesta, nos hemos mantenido consistentemente a la
            vanguardia, desarrollando equipos de mayor calidad y desempeño. La
            inversión continua en ingeniería y manufactura nos ha permitido
            entregar plantas de asfalto que superan las soluciones estándar del
            mercado y mantener nuestro liderazgo tecnológico.
          </p>
          <p>
            Los clientes que adquieren nuestro equipo se mantienen
            consistentemente satisfechos. Muchos operan múltiples unidades;
            algunos llegan a operar hasta cinco plantas de asfalto o
            trituradoras de Triaso.
          </p>
          <p>
            Nuestro equipo está diseñado para regímenes de operación exigentes
            de hasta 20 horas al día. Si bien la operación en doble turno no es
            común en plantas de asfalto, sí es estándar en aplicaciones de
            trituración. Nuestras trituradoras están construidas para soportar
            de manera confiable la operación continua en doble turno,
            cumpliendo con las expectativas de los clientes mineros.
          </p>
          <p>
            Hemos desarrollado nuestro departamento de servicio y mantenimiento
            como una prioridad, garantizando tiempos de respuesta rápidos para
            nuestros clientes, incluyendo operaciones internacionales.
          </p>
          <p>
            Entendemos que las trituradoras y las plantas de asfalto son activos
            críticos en la construcción y la minería. La productividad de
            múltiples cuadrillas y procesos posteriores depende de su
            confiabilidad. Por esta razón, asumimos la plena responsabilidad de
            minimizar el tiempo de inactividad.
          </p>
          <p>
            Como ventaja adicional, nuestro equipo integra componentes de
            marcas reconocidas con suministro fácilmente disponible a través de
            proveedores norteamericanos, lo que simplifica el mantenimiento y
            reduce los tiempos de entrega.
          </p>
          <p>
            Este enfoque se ha traducido en la lealtad a largo plazo de
            nuestros clientes y en compras recurrentes. Nuestro crecimiento
            depende principalmente de clientes satisfechos y de sus
            recomendaciones.
          </p>
          <p>
            Aunque México sigue siendo nuestro mercado principal, hemos
            entregado equipo en todo el mundo, incluyendo Centroamérica,
            Sudamérica, Canadá, Estados Unidos, el norte de África, el Caribe,
            Mauricio, Hawái, Australia, Pakistán y otras regiones.
          </p>
        </div>
      </div>

      <div className=" py-10">
        <div
          className="max-w-[2000px] relative flex mx-auto h-[15vh] md:h-[30vh] bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/contraflujo.webp)" }}
        >
          <div className="absolute inset-0 bg-black/60 w-full"></div>

          <div className="flex flex-col w-full max-w-7xl mx-auto px-8 justify-center items-start ">
            <h1 className="relative font-bold text-white text-xl md:text-3xl uppercase">
              Infraestructura
            </h1>

            <div className="flex relative ">
              <div className="w-[5.7rem] lg:w-[10.4rem] border border-[#f33500]"></div>
              <div className="w-[5.7rem] lg:w-[10.4rem] border border-white"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 space-y-5 pt-5 text-sm md:text-base">
          <p>
            Gracias a un esfuerzo sostenido y a un crecimiento continuo, nuestra
            planta de manufactura se ha expandido hasta un área total de 18,600
            m², completamente bardeada y pavimentada, con 5,000 m² de
            construcción. La planta está ubicada al suroeste de la ciudad de
            Durango, en una de las zonas industriales de más rápido crecimiento
            de la región, con acceso directo desde un bulevar de cuatro
            carriles con alumbrado público completo.
          </p>
          <p>
            Nuestras oficinas están totalmente integradas dentro de la planta
            de manufactura principal. Esta disposición permite una interacción
            directa y constante entre el personal de producción y los equipos
            administrativo, de ingeniería, diseño y ventas, lo que facilita una
            comunicación rápida y procesos de desarrollo eficientes.
          </p>
          <p>
            Nuestro personal de oficina está conformado por aproximadamente
            veinte profesionales, incluyendo directivos, ingenieros,
            diseñadores, personal de ventas y personal administrativo.
          </p>
          <p>
            Dependiendo de la carga de trabajo, la planta de manufactura emplea
            un mínimo de cincuenta personas, cifra que puede llegar hasta 250
            durante los periodos de mayor producción. Este equipo incluye
            ingenieros, técnicos especializados, soldadores, ayudantes y
            personal de apoyo. Nuestros técnicos de instalación e instructores
            de operadores también tienen su base aquí mientras esperan
            asignaciones en campo.
          </p>
          <p>
            La planta principal está equipada para manufactura industrial
            pesada, e incluye áreas de corte y soldadura, corte por plasma,
            centros de maquinado CNC, ensamble eléctrico y electrónico, pintura
            electrostática y procesos relacionados.
          </p>
          <p>
            Otras áreas incluyen almacenes, una pequeña fundidora de hierro,
            zonas de almacenamiento y patios de maniobras.
          </p>
          <p>
            Contamos con una amplia gama de equipo industrial necesario para
            cumplir con altos estándares de manufactura, incluyendo centros de
            maquinado CNC, mesas de corte por plasma, sistemas de soldadura por
            microalambre, equipo de corte, cabinas de pintura electrostática,
            equipo de fundición de hierro, roladoras, dobladoras, cizallas,
            sierras de cinta, taladros de banco, punzonadoras, herramientas de
            manejo de materiales, montacargas y grúas.
          </p>
          <p>
            Este nivel de integración, experiencia y capacidad de manufactura
            nos ha posicionado como el fabricante de plantas de asfalto y
            trituradoras de roca con mayor conocimiento y experiencia en
            México.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Index;
