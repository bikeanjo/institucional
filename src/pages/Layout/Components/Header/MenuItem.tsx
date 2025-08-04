import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import "material-icons/iconfont/material-icons.css";

export interface NavMenuItem {
  label: string;
  bold?: boolean;
  submenu?: NavMenuItem[];
}

interface NavMenuProps {
  columns?: number;
  item:
    | {
        title: string;
        children: (
          | {
              title: string;
              children: {
                title: string;
              }[];
            }
          | {
              title: string;
              children?: undefined;
            }
        )[];
      }
    | {
        title: string;
        children?: undefined;
      };
}

export const NavMenu: React.FC<NavMenuProps> = ({ columns, item }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <Box
          onClick={handleOpenMenu}
          sx={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <Typography fontWeight={600}>{item.title}</Typography>
          <span className="material-icons">keyboard_arrow_down</span>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          MenuListProps={{
            disablePadding: true,
            sx: {
              ...(columns && columns > 1
                ? {
                    display: "grid",
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    columnGap: "32px",
                    rowGap: "16px",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }),
            },
          }}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                backgroundColor: "#F5F5F5",
                borderRadius: "8px",
                p: "16px 24px 24px 24px",
                mt: "70px",

                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  width: 18,
                  height: 18,
                  left: 24,
                  top: 0,
                  backgroundColor: "#F5F5F5",
                  transform: "translateY(-20%) rotate(45deg)",
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
          anchorOrigin={{ horizontal: "left", vertical: "top" }}
        >
          {Array.isArray(item.children) &&
            item.children.length > 0 &&
            item.children.map((subItem) => (
              <React.Fragment key={subItem.title}>
                <MenuItem
                  onClick={handleCloseMenu}
                  sx={{
                    p: 0,
                    fontWeight: 600,
                    color: "#262626",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "80px",
                    }}
                  >
                    {subItem.title}
                  </Box>
                </MenuItem>
                {Array.isArray(subItem.children) &&
                  subItem.children.length > 0 &&
                  subItem.children.map((lastItem) => (
                    <MenuItem
                      key={lastItem.title}
                      onClick={handleCloseMenu}
                      sx={{
                        p: 0,
                        fontWeight: 400,
                        color: "#262626",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        "&:hover": {
                          backgroundColor: "transparent",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "80px",
                        }}
                      >
                        {lastItem.title}
                      </Box>
                    </MenuItem>
                  ))}
              </React.Fragment>
            ))}
        </Menu>
      </Box>
    </React.Fragment>
  );
};
