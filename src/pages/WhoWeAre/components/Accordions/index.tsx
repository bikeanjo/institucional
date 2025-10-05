import type { ReactNode } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionInfos } from "./data";

interface Props {
  id: string;
}

function Accordions({ id }: Props): ReactNode {
  const section = AccordionInfos.find((sec) => sec.id === id);

  if (!section) return null;

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
        {section.accordions.map((accordion) => (
          <Accordion
            key={accordion.id}
            sx={{
              border: "1px solid var(--mui-palette-G_Grey_30)",
              borderRadius: "8px",
              backgroundColor: "var(--mui-palette-G_Grey_20)",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{
                    color: "var(--mui-palette-Green_70)",
                    width: "40px",
                    height: "40px",
                  }}
                />
              }
              aria-controls="ExpandMoreIcon"
            >
              <Typography
                component="span"
                fontSize={"18px"}
                fontWeight={"700"}
                color="var(--mui-palette-G_Grey_100)"
              >
                {accordion.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "var(--mui-palette-G_Grey_10)",
                padding: "24px",
                gap: "16px",
                borderTop: "1px solid var(--mui-palette-G_Grey_30)",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              {accordion.items.map((item) => (
                <Box
                  key={item.id}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={"16px"}
                >
                  <Box
                    sx={{
                      width: "8px",
                      border: "2px solid item.colorTag",
                      backgroundColor: item.colorTag,
                      borderRadius: "4px",
                    }}
                  />
                  <Typography
                    width={"100%"}
                    fontSize={"16px"}
                    color={"var(--mui-palette-G_Grey_100)"}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
}
export default Accordions;
