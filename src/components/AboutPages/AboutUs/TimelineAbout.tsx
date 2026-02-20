import React, { useState } from "react";
import { timelineData } from "./timelineData";
import TimelineBar from "./timelineBar";
import TimelineContent from "./timelineContent";
import { timelineDataRock } from "./timelineDataRock"

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexRock, setActiveIndexRock] = useState(0);

  return (
    <div className="min-h-screen">

      <div className="max-w-7xl mx-auto px-8 py-10">
        <h1 className="uppercase text-2xl lg:text-5xl md:text-5xl font-bold">Asphalt plants</h1>
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


      <div className="max-w-7xl mx-auto px-8 py-10">
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
      />

      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col space-y-5 ">
          <p>As is common for innovative companies with strong sales, smaller competitors have periodically emerged, capturing limited sales with standard-looking equipment that lacks quality and overall long-term performance. We are aware of this through their clients, who often seek corrections or upgrades when purchasing additional equipment—and frequently turn to us for those solutions.
          </p>
          <p>As innovation advances across the industry, international brands have entered the Mexican market and captured part of the demand. In response, we have consistently stayed ahead by developing higher-quality, higher-performance equipment. Continuous investment in engineering and manufacturing has allowed us to deliver asphalt plants that exceed standard market solutions and maintain our technological lead.
          </p>
          <p>Clients who purchase our equipment consistently remain satisfied. Many operate multiple units—some running up to five asphalt plants or crushers from Triaso.
          </p>
          <p>Our equipment is designed for demanding operating regimes of up to 20 hours per day. While double-shift operation is uncommon in asphalt plants, it is standard in crushing applications. Our crushers are built to reliably withstand continuous double-shift operation, meeting the expectations of mining clients.
          </p>
          <p>We have developed our service and maintenance department as a priority, ensuring fast response times for our clients, including international operations.
          </p>
          <p>We understand that crushers and asphalt plants are critical assets in construction and mining. The productivity of multiple crews and downstream processes depends on their reliability. For this reason, we take full responsibility for minimizing downtime.
          </p>
          <p>As an additional advantage, our equipment integrates components from well-known brands with readily available supply through North American vendors, simplifying maintenance and reducing lead times.
          </p>
          <p>This approach has resulted in long-term client loyalty and repeat purchases. Our growth relies primarily on satisfied clients and their recommendations.
          </p>
          <p>While Mexico remains our main market, we have delivered equipment worldwide, including Central America, South America, Canada, the United States, North Africa, the Caribbean, Mauritius, Hawaii, Australia, Pakistan, and other regions.
          </p>
        </div>
      </div>

      <div className=" py-10">
        <div className="max-w-[2000px] relative flex mx-auto h-[30vh] bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/contraflujo.webp)" }}>

          <div className="absolute inset-0 bg-black/60 w-full"></div>

          <div className="flex flex-col w-full max-w-7xl mx-auto px-8 justify-center items-start ">

            <h1 className="relative font-bold text-white text-xl md:text-4xl lg:text-4xl uppercase">Infrastructure</h1>

            <div className="flex relative ">
              <div className="w-[5.7rem] lg:w-[10.4rem] border border-[#f33500]"></div>
              <div className="w-[5.7rem] lg:w-[10.4rem] border border-white"></div>
            </div>

          </div>

        </div>

        <div className="max-w-7xl mx-auto px-8 space-y-5 pt-5">
          <p>Through sustained effort and continuous growth, our manufacturing facility has expanded to a total area of 18,600 m², fully walled and paved, with 5,000 m² of constructed buildings. The plant is located southwest of Durango City, in one of the region’s fastest-growing industrial zones, directly accessible from a four-lane boulevard with full street lighting.
          </p>
          <p>Our offices are fully integrated within the main manufacturing plant. This layout allows direct and constant interaction between production personnel and administrative, engineering, design, and sales teams, enabling fast communication and efficient development processes.
          </p>
          <p>Our office staff consists of approximately twenty professionals, including executives, engineers, designers, sales personnel, and administrative staff.
          </p>
          <p>Depending on workload, the manufacturing plant employs a minimum of fifty people, increasing to up to 250 during peak production periods. This team includes engineers, skilled technicians, welders, helpers, and support personnel. Our installation technicians and operator trainers are also based here while awaiting field assignments.
          </p>
          <p>The main plant is equipped for heavy industrial manufacturing, including cutting and welding areas, plasma cutting, CNC machining centers, electrical and electronic assembly, electrostatic painting, and related processes.
          </p>
          <p>Additional areas include warehouses, a small iron melting facility, storage zones, and maneuvering yards.
          </p>
          <p>We operate with a full range of industrial equipment required to meet high manufacturing standards, including CNC machining centers, plasma cutting tables, microwire welding systems, cutting equipment, electrostatic painting booths, iron melting equipment, rolling machines, benders, shears, band saws, drill presses, punching machines, material handling tools, forklifts, and cranes.
          </p>
          <p>This level of integration, experience, and manufacturing capability has positioned us as the most knowledgeable and experienced manufacturer of asphalt plants and rock crushers in Mexico.
          </p>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Index;