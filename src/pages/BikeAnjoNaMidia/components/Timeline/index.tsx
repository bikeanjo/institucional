import { type ReactNode, useState, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import AccordionComponent from "./Accordion";
import TimelineComponent from "./TimelineComponent";
import { timelineData } from "./data";
import type { TimelineYear } from "./data";

function Timeline(): ReactNode {
  const availableYears = useMemo(
    () => timelineData.map((data) => data.year),
    [],
  );

  const [selectedYear, setSelectedYear] = useState<number>(availableYears[0]);

  const currentYearData = useMemo<TimelineYear | undefined>(
    () => timelineData.find((data) => data.year === selectedYear),
    [selectedYear],
  );

  const handleYearSelection = (year: number) => {
    setSelectedYear(year);
  };

  if (!currentYearData) return null;

  return (
    <>
      <Box
        sx={{
          width: "100%",
          heigth: "auto",
          border: "1px solid #C6C6C6",
          borderRadius: "8px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
          boxSizing: "border-box",
        }}
      >
        <TimelineComponent
          data={availableYears}
          onYearSelect={handleYearSelection}
        />

        <Box
          sx={{
            width: "100%",
            height: "auto",
            padding: { xs: "24px", md: "40px" },
            borderTop: "1px solid #C6C6C6",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "16px", md: "24px" },
            }}
          >
            <Typography>{currentYearData.description}</Typography>
            <AccordionComponent accordions={currentYearData.accordions} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Timeline;
