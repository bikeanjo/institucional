/* eslint-disable react-x/no-array-index-key */
import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  InputBase,
  Divider,
  Drawer,
  AccordionSummary,
  Accordion,
  AccordionDetails,
} from "@mui/material";
import "material-icons/iconfont/material-icons.css";
import logo from "../../../../assets/icons/logo-bike-anjo.svg";
import Login from "./Login";
import { NavMenu } from "./MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { menuItems } from "../../menuItems";

const Header: React.FC = () => {
  const icon: IconDefinition = faBars;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => () => {
    setOpen((prev) => !prev);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          borderBottomWidth: "1px",
          height: { xs: "54px", lg: "80px" },
          py: 2,
          px: 5,
          gap: { xs: "16px", lg: "32px" },
          backgroundColor: "white",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Box
            display={{ xs: "flex", lg: "none" }}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
            }}
            onClick={toggleDrawer()}
          >
            <FontAwesomeIcon icon={icon} fontSize={28} color="#4d5b7c" />
          </Box>
          <Box
            component="img"
            src={logo}
            alt="Logo Bike Anjo"
            sx={{ width: { xs: 40.42, lg: 51.06 }, height: { xs: 38, lg: 48 } }}
          />
        </Box>

        {/* Search */}
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            width: 403,
            height: "48px",
            backgroundColor: "#E2E8F0",
            borderRadius: "8px",
            py: 1.5,
            px: 2,
            gap: { xs: "16px", lg: 1.5 },
          }}
        >
          <span
            className="material-icons"
            style={{ fontSize: 24, color: "#486284", fontWeight: "bold" }}
          >
            search
          </span>
          <InputBase fullWidth />
        </Box>

        {/* Nav */}
        <Box
          component="nav"
          sx={{
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            gap: "32px",
            whiteSpace: "nowrap",
          }}
        >
          {menuItems.map((item, idx) => (
            <NavMenu key={idx + " menu-item"} item={item} />
          ))}
        </Box>

        <Box display="flex" flexDirection={"row"} alignItems={"center"}>
          {/* Botão Doar */}
          <Button
            sx={{
              width: { xs: 72, xl: 130 },
              height: { xs: 25, xl: 43 },
              backgroundColor: "#486284",
              borderRadius: "10px",
              padding: { xs: "0px", lg: "19px 48px" },
              fontWeight: 600,
              textTransform: "none",
              fontSize: { xs: "12px", lg: "16px" },
              color: "neutral-100",
            }}
          >
            Doe
          </Button>

          {/* Login */}
          <Login />
        </Box>
      </Toolbar>
      <Divider />
      <Drawer
        open={open}
        onClose={toggleDrawer()}
        anchor="top"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            top: "0px",
          },
        }}
      >
        <Box
          sx={{
            mt: "72px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            zIndex: "inherit",
          }}
        >
          <Box
            sx={{
              height: "54px",
              display: "flex",
              alignItems: "center",
              mx: "auto",
              width: "calc(100% - 48px)",
              backgroundColor: "#E2E8F0",
              py: 1.5,
              px: 2,
              borderRadius: "8px",
            }}
          >
            <Box
              className="material-icons"
              sx={{
                fontSize: 24,
                color: "#486284",
                fontWeight: "bold",
                zIndex: "inherit",
              }}
            >
              search
            </Box>
            <InputBase fullWidth />
          </Box>
          {menuItems.map((item, idx) => {
            return (
              <Accordion
                key={idx + " accordion-item"}
                elevation={0}
                disableGutters
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  "&:before": {
                    display: "none !important",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    Array.isArray(item.children) && item.children.length > 0 ? (
                      <ExpandMoreIcon sx={{ color: "#486284" }} />
                    ) : null
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    height: "54px",
                    padding: "0px 24px",
                    margin: 0,
                    backgroundColor: "transparent",
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
                  <Typography
                    component="span"
                    fontWeight={600}
                    fontSize={"16px"}
                    color="#486284"
                  >
                    {item.title}
                  </Typography>
                </AccordionSummary>
                {Array.isArray(item.children) && item.children.length > 0 && (
                  <AccordionDetails
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "8px 0px",
                      backgroundColor: "transparent",
                      color: "#486284",
                    }}
                  >
                    <Box
                      sx={{
                        background: "#EDEDED",
                        padding: "0px 24px",
                        display: "flex",
                        alignContent: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      {item.children.map((subItem, subIdx) => (
                        <React.Fragment key={subIdx + " accordion-sub-item"}>
                          <Box
                            sx={{
                              height: "54px",
                              display: "flex",
                              alignContent: "center",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                          >
                            <Typography
                              component="span"
                              fontWeight={600}
                              fontSize={"16px"}
                              color="#486284"
                            >
                              {subItem.title}
                            </Typography>
                          </Box>
                          {Array.isArray(subItem.children) &&
                            subItem.children.length > 0 &&
                            subItem.children.map((lastItem, lastIdx) => (
                              <Box
                                key={lastIdx + " accordion-last-item"}
                                sx={{
                                  height: "54px",
                                  display: "flex",
                                  padding: "0px 24px",
                                  alignContent: "center",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                }}
                              >
                                <Typography
                                  component="span"
                                  fontSize={"16px"}
                                  color="#486284"
                                >
                                  {lastItem.title}
                                </Typography>
                              </Box>
                            ))}
                        </React.Fragment>
                      ))}
                    </Box>
                  </AccordionDetails>
                )}
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
