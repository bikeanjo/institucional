import type { ReactNode } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { AccordionData } from "../data";

function AccordionComponent({
  accordions,
}: {
  accordions: AccordionData[];
}): ReactNode {
  return (
    <>
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.id}
          sx={{
            border: "2px solid #C6C6C6",
            borderRadius: "2px",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{ color: "#4d7a18", width: "40px", height: "40px" }}
              />
            }
            aria-controls="ExpandMoreIcon"
            id="panel1"
            sx={{
              backgroundColor: "#E0E0E0",
              borderRadius: "2px",
            }}
          >
            <Typography
              component="span"
              fontSize={"18px"}
              fontWeight={"700"}
              color="#161616"
            >
              {accordion.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f4f4f4",
              borderTop: "2px solid #d0d0d0",
              borderBottomLeftRadius: "2px",
              borderBottomRightRadius: "2px",
              padding: "16px",
              gap: { xs: "8px", md: "24px" },
            }}
          >
            {accordion.items.map((item) => (
              <Box
                key={item.id}
                sx={{
                  width: "100%",
                  height: "auto",
                  padding: "10px 16px",
                  backgroundColor: "#fff",
                  border: "2px solid #4d7a18",
                  borderRadius: "8px",
                  gap: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: "16px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "fit-content",
                      backgroundColor: "#4d7a18",
                      borderRadius: "30px",
                      padding: "8px 16px",
                    }}
                  >
                    <Typography
                      fontSize={"14px"}
                      fontWeight={"700"}
                      color="#fff"
                    >
                      {item.month}
                    </Typography>
                  </Box>
                  <Typography
                    fontSize={"18px"}
                    fontWeight={"700"}
                    color="#161616"
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Button
                  component="a"
                  href={item.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<img src={"/assets/images/link-icon.svg"} />}
                  sx={{
                    textTransform: "none",
                    color: "#4d7a18",
                    textDecoration: "underline",
                    "&:hover": {
                      backgroundColor: "inherit",
                      boxShadow: "none",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {item.link.text}
                </Button>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
export default AccordionComponent;
