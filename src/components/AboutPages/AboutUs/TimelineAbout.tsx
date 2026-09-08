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
            Como toda empresa innovadora y con altas ventas, hemos sufrido la
            aparición y reaparición de pequeños competidores que han logrado
            ganarnos algunas pocas ventas con equipos de mediana y engañosa
            apariencia, pero de baja calidad, baja productividad y altos costos
            de operación. Esto lo sabemos por sus mismos clientes, que cuando
            vuelven a comprar otro equipo corrigen y generalmente lo compran con
            nosotros.
          </p>
          <p>
            Los clientes que han comprado nuestros equipos siempre se mantienen
            satisfechos. Tenemos algunos que tienen hasta cinco plantas de
            asfalto y/o trituradoras Triaso.
          </p>
          <p>
            Nuestros equipos están diseñados de forma sobrada y para un régimen
            de trabajo de 20 hrs diarias. En las plantas de asfalto es muy raro
            el doble turno, pero sí es muy común en las trituradoras de piedra.
            Nuestras trituradoras cumplen perfectamente con el demandante doble
            turno que acostumbran nuestros clientes de la industria minera.
          </p>
          <p>
            Hemos desarrollado con gran prioridad nuestra área de mantenimiento
            y refacciones para atender a nuestros clientes de forma inmediata,
            incluyendo a los que se encuentran en otros países.
          </p>
          <p>
            Sabemos que las trituradoras y las plantas de asfalto son equipos
            críticos en una construcción. De ellos depende la producción de
            muchos otros equipos y de todo el personal. Cumplimos con esta gran
            responsabilidad para evitar los paros al mínimo.
          </p>
          <p>
            Como prestación adicional de nuestros equipos, les colocamos muchos
            componentes de marcas conocidas y de fácil suministro por vendedores
            locales, con lo que su mantenimiento es aún más sencillo.
          </p>
          <p>
            Sabemos que todo esto mantiene a los clientes leales a nuestra
            marca, y que contamos con su recomendación para lograr otras ventas.
            Por sobre todo, nuestra empresa depende de clientes contentos.
          </p>
          <p>
            A la fecha nuestro mercado principal sigue siendo México, pero hemos
            vendido equipos en todo el mundo; Centroamérica, Sudamérica, Canada,
            Estados Unidos, el norte de África, el Caribe, Islas Mauricio,
            Hawaii, Australia, Pakistán, etc.
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
            Gracias a tanto trabajo hemos crecido, y actualmente nuestra fábrica
            cuenta con 18,600 M2 de terreno bardeado y pavimentado y 5,000 M2 de
            construcciones. Ubicada al suroeste de la ciudad de Durango en la
            zona de mayor crecimiento de la ciudad, con frente a uno de los
            bulevares con más desarrollo, de cuatro carriles y buen alumbrado
            público.
          </p>
          <p>
            Nuestras oficinas están totalmente integradas a la nave principal de
            fabricación, con lo que hay un contacto directo del personal de
            producción con el personal administrativo, de ingeniería y diseño, y
            de ventas. Lo que permite una comunicación y desarrollos muy ágiles.
          </p>
          <p>
            En las oficinas trabajamos 20 personas, entre directivos,
            diseñadores, vendedores y administrativos.
          </p>
          <p>
            En el resto de la fábrica trabaja un mínimo de 50 personas cuando la
            carga de trabajo es baja, llegando hasta 250 personas cuando tenemos
            mucho que fabricar. Este personal se compone de ingenieros, técnicos
            especializados, soldadores, ayudantes y personal de apoyo. Aquí
            también permanecen en espera de ser llamados a campo nuestros
            técnicos instaladores y operadores capacitadores.
          </p>
          <p>
            En la nave principal tenemos corte y soldadura general, corte con
            plasma, centro de maquinado CNC, montaje eléctrico-electrónico,
            pintura electrostática, etc.
          </p>
          <p>
            Tenemos todo el equipo necesario para realizar la manufactura con
            los estándares de calidad más altos: Tornos y máquinas herramientas
            CNC, mesas de corte por plasma, soldadoras de microalambre, equipos
            de corte, cabina de pintura electrostática, equipo de fundición,
            roladoras, dobladoras, cizallas, sierra-cintas, taladros de
            pedestal, punzonadoras, herramienta, montacargas, grúas, etc.
          </p>
          <p>
            Contamos con un avanzado y ágil departamento de ingeniería y diseño,
            único en México en plantas de asfalto y trituradoras, y a la altura
            de los mejores a nivel mundial. Está integrado por ingenieros
            especializados y experimentados, además de equipo de cómputo y
            software avanzado para diseño y simulaciones de trabajo en
            condiciones reales. Con ésto y una fase de pruebas propia evitamos
            la muy común práctica en la industria de experimentar con los
            clientes.
          </p>
          <p>
            Nadie sabe más de plantas de asfalto y de trituradoras de roca en
            México que nosotros.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Index;
