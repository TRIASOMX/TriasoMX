import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { TimelineDate } from "./timelineData";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

interface TimelineContentProps {
  dates: TimelineDate[];
  activeIndex: number;
  onSlideChange: (index: number) => void;
}
const TimelineContent: React.FC<TimelineContentProps> = ({
  dates,
  activeIndex,
  onSlideChange,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== activeIndex) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);
  return (
    <div className="w-full">

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          autoHeight={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            onSlideChange(swiper.activeIndex);
          }}
          className="w-full"
          speed={400}
        >
          {dates.map((dateItem) => (
            <SwiperSlide key={dateItem.id}>
              <div className="px-4 sm:px-8 py-8 sm:py-12 max-w-5xl mx-auto animate-fade-in">

                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
                    {dateItem.label}
                  </h2>
                </div>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                  {dateItem.events.map((event, idx) => (
                    <div
                      key={event.id}
                      className="group relative rounded-xl border border-border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <h3 className="text-lg font-semibold font-display mb-2">
                        {event.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>

                      {event.image && (
                        <div className="mt-4 aspect-[16/9] overflow-hidden rounded-lg bg-muted">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default TimelineContent;