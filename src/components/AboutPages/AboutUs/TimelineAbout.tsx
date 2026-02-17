import React, { useState } from "react";
import { timelineData } from "./timelineData";
import TimelineBar from "./timelineBar";
import TimelineContent from "./timelineContent";

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    </div>
  );
};

export default Index;