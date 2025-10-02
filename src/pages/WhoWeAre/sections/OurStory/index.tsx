import { type ReactNode, useState, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import Title from "@components/Title";
import SubTitle from "@components/SubTitle";
import Text from "@components/Text";
import Button from "@components/Button";
import TimelineComponent from "../../../BikeAnjoInTheMedia/components/Timeline/TimelineComponent";
import { timelineData, type TimelineYear } from "./data";
import { Link } from "react-router-dom";
import Section from "@components/Section";

function OurStory(): ReactNode {
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
    <Section>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "8px", md: "16px" },
        }}
      >
        <Title variant="h2" pink>
          Nossa História
        </Title>
        <SubTitle variant="h3">Conheça nossa trajetória até agora</SubTitle>
      </Box>
      <Box
        sx={{
          width: "100%",
          heigth: "auto",
          border: "1px solid var(--mui-palette-G-Grey-30)",
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
            borderTop: "1px solid var(--mui-palette-G-Grey-30)",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            backgroundColor: "var(--mui-palette-G-White)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "16px", md: "24px" },
            }}
          >
            {currentYearData.description.split("\n\n").map((paragraph) => (
              <Typography key={paragraph} variant="body1">
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "24px", md: "32px" },
        }}
      >
        <Text variant="body1">
          São mais de dez anos realizando sonhos e transformando a cidade. Você
          pode participar dessa missão:
        </Text>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "8px",
          }}
        >
          <Button component={Link} to="/doacao" fullWidthMobile>
            Doe
          </Button>
          <Button component={Link} to="/voluntariado" fullWidthMobile>
            Voluntarie-se
          </Button>
        </Box>
      </Box>
    </Section>
  );
}

export default OurStory;
