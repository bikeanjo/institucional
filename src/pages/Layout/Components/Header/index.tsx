/* eslint-disable react-x/no-array-index-key */
import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Divider,
  Drawer,
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Autocomplete,
  TextField,
} from "@mui/material";
import { createFilterOptions } from "@mui/material/Autocomplete";
import "material-icons/iconfont/material-icons.css";
import logo from "../../../../assets/icons/logo-bike-anjo.png";
import Login from "./Login";
import { NavMenu } from "./MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { menuItems, type MenuItem } from "../../menuItems";
import { Link } from "../Link";
import { Link as ButtonLink, useNavigate } from "react-router-dom";
import { Colors } from "../../../../styles/tokens/colors";

const Header: React.FC = () => {
  const icon: IconDefinition = faBars;
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const navigate = useNavigate();

  const filterOptions = createFilterOptions<{
    label: string;
    id: number;
    url: string;
  }>();

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleCloseDrawer = () => {
    setOpen(false);
    setExpanded(false);
  };

  const toggleDrawer = () => () => {
    setOpen((prev) => !prev);
  };

  function extractOptions(menu: MenuItem[], startId = 1) {
    let options: { label: string; id: number; url: string }[] = [];
    let id = startId;

    for (const item of menu) {
      if (item.url && item.url.trim() !== "") {
        options.push({ label: item.title, id: id++, url: item.url });
      }
      if (item.children) {
        const { options: childOptions, lastId } = extractOptions(
          item.children,
          id,
        );
        options = options.concat(childOptions);
        id = lastId;
      }
    }
    return { options, lastId: id };
  }

  const { options: extractedOptions } = extractOptions(menuItems);

  const options = extractedOptions.sort((a, b) =>
    a.label.localeCompare(b.label, "pt-BR", { sensitivity: "base" }),
  );

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
            <FontAwesomeIcon
              icon={icon}
              fontSize={28}
              color={Colors["Green-70"]}
            />
          </Box>
          <Link to="/">
            <Box component="img" src={logo} alt="Logo Bike Anjo" />
          </Link>
        </Box>

        {/* Search */}
        <Autocomplete
          disablePortal
          options={options}
          filterOptions={filterOptions}
          popupIcon={null}
          onChange={(_, value) => {
            if (value?.url) {
              void navigate(value.url);
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Buscar..."
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <>
                    <span
                      className="material-icons"
                      style={{
                        fontSize: 24,
                        color: Colors["Green-70"],
                        fontWeight: "bold",
                      }}
                    >
                      search
                    </span>
                    {params.InputProps.startAdornment}
                  </>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { border: "none" },
                  backgroundColor: "#E2E8F0",
                  borderRadius: "8px",
                  height: "48px",
                  paddingLeft: "8px",
                },
              }}
            />
          )}
          renderOption={(props, option) => <li {...props}>{option.label}</li>}
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
            border: "none",
          }}
        />

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
            component={ButtonLink}
            to="/doacao"
            sx={{
              width: { xs: 72, xl: 130 },
              height: { xs: 25, xl: 43 },
              backgroundColor: Colors["Orange-50"],
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
        onClose={handleCloseDrawer}
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
          <Autocomplete
            disablePortal
            options={options}
            filterOptions={filterOptions}
            popupIcon={null}
            onChange={(_, value) => {
              if (value?.url) {
                void navigate(value.url);
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Buscar..."
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <>
                      <span
                        className="material-icons"
                        style={{
                          fontSize: 24,
                          color: Colors["Green-70"],
                          fontWeight: "bold",
                        }}
                      >
                        search
                      </span>
                      {params.InputProps.startAdornment}
                    </>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { border: "none" },
                    backgroundColor: "#E2E8F0",
                    borderRadius: "8px",
                    height: "48px",
                    paddingLeft: "8px",
                  },
                }}
              />
            )}
            renderOption={(props, option) => <li {...props}>{option.label}</li>}
            sx={{
              display: { xs: "flex", lg: "none" },
              alignItems: "center",
              width: "96%",
              height: "48px",
              backgroundColor: "#E2E8F0",
              borderRadius: "8px",
              py: 1.5,
              px: 2,
              gap: { xs: "16px", lg: 1.5 },
              border: "none",
              margin: "auto",
            }}
          />
          {menuItems.map((item, idx) => {
            return (
              <Accordion
                expanded={expanded === `panel-${idx}`}
                onChange={handleChange(`panel-${idx}`)}
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
                      <ExpandMoreIcon sx={{ color: Colors["Green-70"] }} />
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
                    color={Colors["Green-70"]}
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
                      color: Colors["Green-70"],
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
                              color={Colors["Green-70"]}
                            >
                              {subItem.url ? (
                                <Link
                                  to={subItem.url}
                                  onClick={handleCloseDrawer}
                                >
                                  {subItem.title}
                                </Link>
                              ) : (
                                subItem.title
                              )}
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
                                  color={Colors["Green-70"]}
                                >
                                  {lastItem.url ? (
                                    <Link
                                      to={lastItem.url}
                                      onClick={handleCloseDrawer}
                                    >
                                      {lastItem.title}
                                    </Link>
                                  ) : (
                                    lastItem.title
                                  )}
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
