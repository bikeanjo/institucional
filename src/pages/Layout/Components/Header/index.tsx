/* eslint-disable react-x/no-array-index-key */
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Drawer,
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Autocomplete,
  TextField,
  FilterOptionsState,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { createFilterOptions } from "@mui/material/Autocomplete";
import "material-icons/iconfont/material-icons.css";
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
import Button from "@components/Button";

const Header: React.FC = () => {
  const icon: IconDefinition = faBars;
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [focused, setFocused] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [openDesktopAutocomplete, setOpenDesktopAutocomplete] = useState(false);
  const [openMobileAutocomplete, setOpenMobileAutocomplete] = useState(false);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    if (isDesktop && open) {
      setOpen(false);
      setExpanded(false);
    }
  }, [isDesktop, open]);

  const filterOptions = (
    options: { label: string; id: number; url: string }[],
    state: FilterOptionsState<{ label: string; id: number; url: string }>,
  ) => {
    const defaultFilter = createFilterOptions<{
      label: string;
      id: number;
      url: string;
    }>({ limit: 3 });

    const filtered = defaultFilter(options, state);

    if (filtered.length < options.length) {
      filtered.push({
        label: "Ver mais resultados",
        id: -1,
        url: "/buscar",
      });
    }

    return filtered;
  };

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
          borderBottom: `2px solid ${Colors["Green-70"]}`,
          height: { xs: "54px", lg: "80px" },
          py: 2,
          px: 5,
          gap: { xs: "16px", lg: "32px" },
          backgroundColor: "G-White",
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
            <Box
              component="img"
              src={"/assets/icons/logo-bike-anjo.webp"}
              alt="Logo Bike Anjo"
            />
          </Link>
        </Box>

        {/* Search */}
        <Autocomplete
          disablePortal
          options={options}
          filterOptions={filterOptions}
          open={openDesktopAutocomplete}
          popupIcon={null}
          onChange={(_, value) => {
            if (!value) return;
            if (value?.id === -1) {
              void navigate(`/buscar?q=${searchValue}}`);
            } else if (value?.url) {
              void navigate(value.url);
            }
            setOpenDesktopAutocomplete(false);
          }}
          onClose={() => setOpenDesktopAutocomplete(false)}
          slotProps={{
            popper: {
              sx: {
                "& .MuiAutocomplete-paper": {
                  border: `2px solid ${Colors["Green-70"]}`,
                  borderTop: "none",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                },
                "& .MuiAutocomplete-listbox": {
                  padding: 0,
                  "& li": {
                    borderBottom: `2px solid ${Colors["Green-20"]}`,
                    "&:hover": {
                      backgroundColor: Colors["Green-20"],
                    },
                    "&.Mui-focused": {
                      backgroundColor: Colors["Green-20"],
                    },
                    "&[aria-selected='true']": {
                      backgroundColor: Colors["Green-20"],
                    },
                  },
                  "& li:first-of-type": {
                    borderTop: `2px solid ${Colors["Green-20"]}`,
                  },
                },
              },
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={
                focused
                  ? "Digitando palavra chave..."
                  : "Pesquise páginas, tópicos ou áreas..."
              }
              onClick={() => setOpenDesktopAutocomplete((prev) => !prev)}
              onFocus={() => setFocused(true)}
              onBlur={() => {
                setFocused(false);
                setOpenDesktopAutocomplete(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (searchValue.trim()) {
                    void navigate(`/buscar?q=${searchValue}`);
                  }
                  setOpenDesktopAutocomplete(false);
                }
              }}
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
                width: openDesktopAutocomplete ? 400 : 200,
                transition: "width 0.3s ease",
                "& input": {
                  color: Colors["Green-70"],
                },
                "& input::placeholder": {
                  color: Colors["Green-70"],
                  opacity: 1,
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: `2px solid ${Colors["Green-70"]}`,
                    borderBottom: openDesktopAutocomplete
                      ? "none"
                      : `2px solid ${Colors["Green-70"]}`,
                    borderRadius: "8px",
                    borderBottomLeftRadius: openDesktopAutocomplete ? 0 : "8px",
                    borderBottomRightRadius: openDesktopAutocomplete
                      ? 0
                      : "8px",
                  },
                  backgroundColor: "G-White",
                  height: "48px",
                  paddingLeft: "8px",
                  "&:hover fieldset": {
                    borderColor: Colors["Green-70"],
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: Colors["Green-70"],
                  },
                },
              }}
            />
          )}
          renderOption={(props, option) => {
            if (option.id === -1) {
              return (
                <li
                  {...props}
                  style={{
                    fontWeight: 600,
                    color: Colors["Green-70"],
                    cursor: "pointer",
                  }}
                >
                  Ver mais resultados
                </li>
              );
            }
            return (
              <li
                {...props}
                style={{
                  fontWeight: 400,
                  color: Colors["Green-70"],
                  cursor: "pointer",
                }}
              >
                <Link to={option.url}>{option.label}</Link>
              </li>
            );
          }}
          PaperComponent={(props) => (
            <Box
              {...props}
              sx={{
                backgroundColor: "G-White",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
                border: `2px solid ${Colors["Green-70"]}`,
                borderTop: "none",
                overflow: "hidden",
                minWidth: "400px",
              }}
            />
          )}
          sx={{
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            width: "100%",
            height: "48px",
            backgroundColor: "G-White",
            borderRadius: "8px",
            py: 1.5,
            px: 2,
            gap: { xs: "16px", lg: 1.5 },
            border: "none",
          }}
          fullWidth
        />

        {/* Nav */}
        <Box
          component="nav"
          sx={{
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            gap: "32px",
            whiteSpace: "nowrap",
            color: Colors["Green-70"],
          }}
        >
          {menuItems.map((item, idx) => (
            <NavMenu key={idx + " menu-item"} item={item} />
          ))}
        </Box>

        <Box display="flex" flexDirection={"row"} alignItems={"center"}>
          {/* Botão Doar */}
          <Button
            variantcolor="orange"
            component={ButtonLink}
            to="/doacao"
            aria-label="Ir para página de doação"
            sx={{
              width: { xs: 77, xl: 120 },
              height: { xs: 48, xl: 48 },
            }}
          >
            Doe
          </Button>

          {/* Login */}
          <Login />
        </Box>
      </Toolbar>
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
            open={openMobileAutocomplete}
            onOpen={() => setOpenMobileAutocomplete(true)}
            onClose={() => setOpenMobileAutocomplete(false)}
            popupIcon={null}
            onChange={(_, value) => {
              if (!value) return;
              if (value?.id === -1) {
                void navigate(`/buscar?q=${searchValue}}`);
              } else if (value?.url) {
                void navigate(value.url);
              }
              setOpenMobileAutocomplete(false);
              handleCloseDrawer();
            }}
            slotProps={{
              popper: {
                sx: {
                  "& .MuiAutocomplete-paper": {
                    border: `2px solid ${Colors["Green-70"]}`,
                    borderTop: "none",
                    borderBottomLeftRadius: "8px",
                    borderBottomRightRadius: "8px",
                  },
                  "& .MuiAutocomplete-listbox": {
                    padding: 0,
                    "& li": {
                      borderBottom: `2px solid ${Colors["Green-20"]}`,
                      "&:hover": {
                        backgroundColor: Colors["Green-20"],
                      },
                      "&.Mui-focused": {
                        backgroundColor: Colors["Green-20"],
                      },
                      "&[aria-selected='true']": {
                        backgroundColor: Colors["Green-20"],
                      },
                    },
                    "& li:first-of-type": {
                      borderTop: `2px solid ${Colors["Green-20"]}`,
                    },
                  },
                },
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={
                  focused
                    ? "Digitando palavra chave..."
                    : "Pesquise páginas, tópicos ou áreas..."
                }
                onFocus={() => setFocused(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (searchValue.trim()) {
                      void navigate(`/buscar?q=${searchValue}`);
                    }
                    setOpenMobileAutocomplete(false);
                    handleCloseDrawer();
                  }
                }}
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
                  "& input": {
                    color: Colors["Green-70"],
                  },
                  "& input::placeholder": {
                    color: Colors["Green-70"],
                    opacity: 1,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: `2px solid ${Colors["Green-70"]}`,
                      borderBottom: openMobileAutocomplete
                        ? "none"
                        : `2px solid ${Colors["Green-70"]}`,
                      borderRadius: "8px",
                      borderBottomLeftRadius: openMobileAutocomplete
                        ? 0
                        : "8px",
                      borderBottomRightRadius: openMobileAutocomplete
                        ? 0
                        : "8px",
                    },
                    backgroundColor: "G-White",
                    height: "48px",
                    paddingLeft: "8px",
                    "&:hover fieldset": {
                      borderColor: Colors["Green-70"],
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: Colors["Green-70"],
                    },
                  },
                }}
              />
            )}
            renderOption={(props, option) => {
              if (option.id === -1) {
                return (
                  <li
                    {...props}
                    style={{
                      fontWeight: 600,
                      color: Colors["Green-70"],
                      cursor: "pointer",
                    }}
                  >
                    Ver mais resultados
                  </li>
                );
              }
              return (
                <li
                  {...props}
                  style={{
                    fontWeight: 400,
                    color: Colors["Green-70"],
                    cursor: "pointer",
                  }}
                >
                  <Link to={option.url}>{option.label}</Link>
                </li>
              );
            }}
            PaperComponent={(props) => (
              <Box
                {...props}
                sx={{
                  backgroundColor: "G-White",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  border: `2px solid ${Colors["Green-70"]}`,
                  borderTop: "none",
                  overflow: "hidden",
                }}
              />
            )}
            sx={{
              display: { xs: "flex", lg: "none" },
              alignItems: "center",
              width: "96%",
              height: "48px",
              backgroundColor: "G-White",
              py: 1.5,
              px: 2,
              gap: { xs: "16px", lg: 1.5 },
              margin: "8px auto 16px auto",
            }}
          />
          {menuItems.map((item, idx) => {
            if (Array.isArray(item.children) && item.children.length > 0) {
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
                    borderTop:
                      idx === 0
                        ? `2px solid ${Colors["Green-20"]}`
                        : `1px solid ${Colors["Green-20"]}`,
                    borderBottom: `1px solid ${Colors["Green-20"]}`,
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      Array.isArray(item.children) &&
                      item.children.length > 0 ? (
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
                          background: "G-White",
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
            }

            return (
              <Box
                key={idx + " menu-item"}
                sx={{
                  borderTop:
                    idx === 0
                      ? `2px solid ${Colors["Green-20"]}`
                      : `1px solid ${Colors["Green-20"]}`,
                  borderBottom: `1px solid ${Colors["Green-20"]}`,
                  height: "54px",
                  display: "flex",
                  alignItems: "center",
                  px: "24px",
                }}
              >
                <Typography
                  component="span"
                  fontWeight={600}
                  fontSize={"16px"}
                  color={Colors["Green-70"]}
                >
                  {item.url ? (
                    <Link to={item.url} onClick={handleCloseDrawer}>
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
