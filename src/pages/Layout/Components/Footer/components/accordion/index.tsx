import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MuiAccordion,
  Typography,
} from "@mui/material";
import { useEffect, useState, type JSX } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Colors } from "@colors";
import { Link as RouterLink } from "react-router";
import styled from "styled-components";

const Accordion = ({
  title,
  gridItem,
  children,
  contato,
}: {
  title: string;
  gridItem: string;
  children: JSX.Element;
  contato: boolean;
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

  const Link = styled(RouterLink)`
    text-decoration: none;
    color: ${Colors["G_Grey_100"]};
    width: 100%;
  `;

  return (
    <MuiAccordion
      elevation={0}
      disableGutters
      expanded={expanded}
      onChange={handleChange}
      sx={{
        display: { xs: "flex", lg: "flex" },
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
        expandIcon={
          isLargeScreen || contato ? null : (
            <ExpandMoreIcon
              sx={{
                color: Colors["G_Grey_70"],
                marginRight: "24px",
              }}
            />
          )
        }
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          padding: 0,
          margin: 0,
          backgroundColor: Colors["G_Grey_10"],
          color: Colors["G_Grey_100"],
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
        <Link to={contato ? "/contato" : "#"}>
          <Typography
            component="span"
            fontWeight={600}
            fontSize={"16px"}
            sx={{
              color: {
                xs: Colors["G_Grey_100"],
                lg: contato ? Colors["Green_70"] : Colors["G_Grey_100"],
              },
            }}
          >
            {title}
          </Typography>
        </Link>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: contato ? "none" : "flex",
          flexDirection: "column",
          padding: "8px 0px",
          backgroundColor: Colors["G_Grey_10"],
          color: Colors["G_Grey_100"],
          gap: "16px",
        }}
      >
        {children}
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
