import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export function QuestionAccordion({
  title,
  content,
}: {
  title: string;
  content: string;
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
          expanded === "panel1" ? (
            <RemoveIcon
              sx={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #fff",
                borderRadius: "50%",
                fontSize: 20,
              }}
            />
          ) : (
            <AddIcon
              sx={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #fff",
                borderRadius: "50%",
                fontSize: 20,
              }}
            />
          )
        }
        sx={{
          backgroundColor: "#787878",
          color: "#fff",
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
          backgroundColor: "#f8f8f8",
          color: "#787878",
          padding: "16px",
        }}
      >
        <Typography
          sx={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          {content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
