import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Colors } from "../../../../styles/tokens/colors";
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
          expanded === "panel1" ? (
            <RemoveIcon
              sx={{
                backgroundColor: "transparent",
                color: Colors["G-Grey-100"],
                border: `2px solid ${Colors["G-Grey-100"]}`,
                borderRadius: "50%",
                fontSize: 20,
              }}
            />
          ) : (
            <AddIcon
              sx={{
                backgroundColor: "transparent",
                color: Colors["G-Grey-100"],
                border: `2px solid ${Colors["G-Grey-100"]}`,
                borderRadius: "50%",
                fontSize: 20,
              }}
            />
          )
        }
        sx={{
          backgroundColor: Colors["G-Grey-20"],
          color: Colors["G-Grey-100"],
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
          backgroundColor: Colors["G-Grey-10"],
          color: Colors["G-Grey-100"],
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
