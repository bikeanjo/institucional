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
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"16px"}
        width={"100%"}
      >
        {section.accordions.map((accordion) => (
          <Accordion
            key={accordion.id}
            sx={{
              width: "100%",
              border: "1px solid var(--mui-palette-G-Grey-30)",
              borderRadius: "8px",
              backgroundColor: "var(--mui-palette-G-Grey-20)",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{
                    color: "var(--mui-palette-Green-70)",
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
                color="var(--mui-palette-G-Grey-100)"
              >
                {accordion.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "var(--mui-palette-G-Grey-10)",
                padding: "24px",
                gap: "16px",
                borderTop: "1px solid var(--mui-palette-G-Grey-30)",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              {accordion.items.map((item) => (
                <Typography
                  key={item.id}
                  width={"100%"}
                  fontSize={"16px"}
                  whiteSpace={"pre-line"}
                  color={"var(--mui-palette-G-Grey-100)"}
                >
                  {item.text}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
}
export default Accordions;
