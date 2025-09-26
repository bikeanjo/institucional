import React, { useState, useRef, useEffect } from "react";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import {
  TimelineContainer,
  NavigationContainer,
  Button,
  ScrollContainer,
  ScrollContent,
  YearsContainer,
  Years,
  Dot,
  Ball,
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
      <NavigationContainer>
        <Button
          onClick={() => handleNavigation("left")}
          disableRipple
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <ArrowBackIosNewRounded sx={{ fontSize: "28px" }} />
        </Button>

        <ScrollContainer ref={scrollRef}>
          {data.map((year, index) => {
            const isActive = index === activeIndex;
            return (
              <ScrollContent
                key={year}
                ref={(el: HTMLDivElement | null) => {
                  itemRefs.current[index] = el;
                }}
              >
                <YearsContainer>
                  <Years
                    $isActive={isActive}
                    onClick={() => handleSelect(index)}
                  >
                    {year}
                  </Years>
                  <Dot>
                    <Ball
                      $isActive={isActive}
                      onClick={() => handleSelect(index)}
                    />
                  </Dot>
                </YearsContainer>
              </ScrollContent>
            );
          })}
        </ScrollContainer>

        <Button
          onClick={() => handleNavigation("right")}
          disableRipple
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <ArrowForwardIosRounded sx={{ fontSize: "28px" }} />
        </Button>
      </NavigationContainer>
    </TimelineContainer>
  );
};

export default Timeline;
