import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  TimelineContainer,
  ScrollableContainer,
  HorizontalTimelineContainer,
  ItemContainer,
  YearAndDotContainer,
  Years,
  Dot,
  NavButton,
  Line,
} from "./styles";

interface TimelineProps {
  data: number[];
  onYearSelect: (year: number) => void;
}

const Timeline: React.FC<TimelineProps> = ({ data, onYearSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    onYearSelect(data[index]);
  };

  const handleNavigation = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(data.length - 1, activeIndex + 1);

    setActiveIndex(newIndex);
    onYearSelect(data[newIndex]);
  };

  return (
    <TimelineContainer>
      <NavButton
        onClick={() => handleNavigation("left")}
        disableRipple
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <ChevronLeft sx={{ fontSize: "46px" }} />
      </NavButton>

      <ScrollableContainer ref={scrollRef}>
        <HorizontalTimelineContainer>
          {data.map((year, index) => {
            const isActive = index === activeIndex;
            return (
              <ItemContainer
                key={year}
                ref={(el: HTMLDivElement | null) => {
                  itemRefs.current[index] = el;
                }}
              >
                <YearAndDotContainer>
                  <Years
                    $isActive={isActive}
                    onClick={() => handleSelect(index)}
                  >
                    {year}
                  </Years>
                  <Dot
                    $isActive={isActive}
                    onClick={() => handleSelect(index)}
                  />
                </YearAndDotContainer>
                <Line />
              </ItemContainer>
            );
          })}
        </HorizontalTimelineContainer>
      </ScrollableContainer>

      <NavButton
        onClick={() => handleNavigation("right")}
        disableRipple
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <ChevronRight sx={{ fontSize: "46px" }} />
      </NavButton>
    </TimelineContainer>
  );
};

export default Timeline;
