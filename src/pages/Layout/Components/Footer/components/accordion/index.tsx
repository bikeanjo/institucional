import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MuiAccordion,
  Typography,
} from "@mui/material";
import { useEffect, useState, type ReactNode } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Accordion = ({
  title,
  gridItem,
  children,
}: {
  title: string;
  gridItem: string;
  children: ReactNode;
}) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [expanded, setExpanded] = useState(false);

  // Atualiza dinamicamente o estado quando a tela muda
  useEffect(() => {
    setExpanded(isLargeScreen);
  }, [isLargeScreen]);

  const handleChange = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <MuiAccordion
      elevation={0}
      disableGutters
      expanded={expanded}
      onChange={handleChange}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        gridArea: gridItem,
        backgroundColor: "transparent",
        "&:before": {
          display: "none !important",
        },
      }}
    >
      <AccordionSummary
        expandIcon={isLargeScreen ? null : <ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          padding: 0,
          margin: 0,
          backgroundColor: "#F8F8F8",
          color: "#656565",
          minHeight: 0,
          "&.Mui-expanded": {
            minHeight: "unset",
          },
          "& .MuiAccordionSummary-content.Mui-expanded": {
            margin: 0,
          },
        }}
        slotProps={{ content: { sx: { margin: 0 } } }}
      >
        <Typography component="span" fontWeight={600} fontSize={"15px"}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "8px 0px",
          backgroundColor: "#F8F8F8",
          color: "#656565",
          gap: "16px",
        }}
      >
        {children}
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
