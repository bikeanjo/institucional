import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ChevronLeft } from "@mui/icons-material";
import { Colors } from "@colors";
import { ReactNode } from "react";

export function QuestionAccordion({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      disableGutters
      elevation={0}
      square
      sx={{
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <AccordionSummary
        expandIcon={
          <ChevronLeft
            sx={{
              color: Colors["Green_70"],
              fontSize: 40,
              transition: "transform 0.3s",
              transform:
                expanded === "panel1" ? "rotate(-90deg)" : "rotate(-90deg)",
            }}
          />
        }
        sx={{
          backgroundColor: Colors["G_Grey_20"],
          color: Colors["G_Grey_100"],
          padding: "16px",
          minHeight: "auto",
          "&.Mui-expanded": { minHeight: "auto" },
          "& .MuiAccordionSummary-content": { margin: 0 },
          "& .MuiAccordionSummary-content.Mui-expanded": { margin: 0 },
        }}
      >
        <Typography
          sx={{
            margin: 0,
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: Colors["G_Grey_10"],
          color: Colors["G_Grey_100"],
          padding: "16px",
        }}
      >
        {typeof content === "string" ? (
          <Typography
            sx={{
              margin: 0,
              fontSize: "16px",
              fontWeight: 600,
              whiteSpace: "pre-line",
            }}
          >
            {content}
          </Typography>
        ) : (
          content
        )}
      </AccordionDetails>
    </Accordion>
  );
}
