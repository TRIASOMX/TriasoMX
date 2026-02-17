import React, { useRef, useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { TimelineDate } from "./timelineData";
interface TimelineBarProps {
  dates: TimelineDate[];
  activeIndex: number;
  onSelect: (index: number) => void;
}
const TimelineBar: React.FC<TimelineBarProps> = ({ dates, activeIndex, onSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasMoved = useRef(false);
  const centerOnIndex = useCallback(
    (index: number, smooth = true) => {
      const container = scrollRef.current;
      if (!container) return;
      const items = container.querySelectorAll<HTMLElement>("[data-timeline-dot]");
      const item = items[index];
      if (!item) return;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const containerCenter = container.offsetWidth / 2;
      container.scrollTo({
        left: itemCenter - containerCenter,
        behavior: smooth ? "smooth" : "auto",
      });
    },
    []
  );
  useEffect(() => {
    centerOnIndex(activeIndex, true);
  }, [activeIndex, centerOnIndex]);
  useEffect(() => {
    centerOnIndex(activeIndex, false);
  }, []);
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    hasMoved.current = false;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    document.body.style.userSelect = "none";
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const x = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    const walk = x - startX.current;
    if (Math.abs(walk) > 3) hasMoved.current = true;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };
  const handleMouseUp = () => {
    isDragging.current = false;
    document.body.style.userSelect = "";
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    hasMoved.current = false;
    startX.current = e.touches[0].pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft ?? 0);
    const walk = x - startX.current;
    if (Math.abs(walk) > 3) hasMoved.current = true;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };
  const handleDotClick = (index: number) => {
    if (hasMoved.current) return;
    onSelect(index);
  };
  const goPrev = () => onSelect(Math.max(0, activeIndex - 1));
  const goNext = () => onSelect(Math.min(dates.length - 1, activeIndex + 1));

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 px-3 py-5 sm:px-6">

        <button onClick={goPrev} className="timeline-nav-btn shrink-0" aria-label="Previous date">
          <ChevronLeft size={18} />
        </button>
        
        <div className="relative flex-1 overflow-hidden">
          <div className="timeline-fade-both">
            <div
              ref={scrollRef}
              className="flex items-center gap-0 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => { isDragging.current = false; }}
            >
     
              <div className="shrink-0" style={{ width: "calc(50% - 28px)" }} />
              {dates.map((d, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={d.id}
                    data-timeline-dot
                    className="flex flex-col items-center shrink-0 px-4 sm:px-6"
                    onClick={() => handleDotClick(i)}
                  >
                
                    <span
                      className="text-xs font-medium mb-2.5 transition-colors duration-300 select-none whitespace-nowrap font-display"
                      style={{
                        color: isActive
                          ? "hsl(var(--timeline-accent))"
                          : "hsl(var(--timeline-fg) / 0.5)",
                      }}
                    >
                      {d.label}
                    </span>
               
                    <div className="flex items-center">
                      {i > 0 && (
                        <div
                          className="h-px w-6 sm:w-10 transition-colors duration-300"
                          style={{
                            background:
                              i <= activeIndex
                                ? "#000000"
                                : "#000000",
                          }}
                        />
                      )}
                      <div className={`timeline-dot ${isActive ? "active" : ""}`} />
                      {i < dates.length - 1 && (
                        <div
                          className="h-px w-6 sm:w-10 transition-colors duration-300"
                          style={{
                            background:
                              i < activeIndex
                                ? "#000000"
                                : "#000000",
                          }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="shrink-0" style={{ width: "calc(50% - 28px)" }} />
            </div>
          </div>
        </div>
        <button onClick={goNext} className="timeline-nav-btn shrink-0" aria-label="Next date">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
export default TimelineBar;
