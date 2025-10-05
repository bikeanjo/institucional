import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import "material-icons/iconfont/material-icons.css";
import { Link } from "../Link";
import { Colors } from "@colors";

export interface NavMenuItem {
  label: string;
  bold?: boolean;
  submenu?: NavMenuItem[];
}

interface CustomMenuItem {
  title: string;
  url?: string;
  children?: CustomMenuItem[];
}

interface NavMenuProps {
  columns?: number;
  item: CustomMenuItem;
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
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {item.url ? (
            <Link to={item.url}>
              <Typography fontWeight={600}>{item.title}</Typography>
            </Link>
          ) : (
            <Box
              onClick={handleOpenMenu}
              sx={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
              {item.children && item.children.length > 0 && (
                <span className="material-icons">keyboard_arrow_down</span>
              )}
            </Box>
          )}
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
                backgroundColor: Colors["Green_20"],
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
                  backgroundColor: Colors["Green_20"],
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
                    color: Colors["Green_70"],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    "&:hover": {
                      backgroundColor: "transparent",
                      textDecoration: subItem.url ? "underline" : "none",
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
                    {subItem.url ? (
                      <Link to={subItem.url}>{subItem.title}</Link>
                    ) : (
                      subItem.title
                    )}
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
                        color: Colors["Green_70"],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        "&:hover": {
                          backgroundColor: "transparent",
                          textDecoration: lastItem.url ? "underline" : "none",
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
                        {lastItem.url ? (
                          <Link to={lastItem.url}>{lastItem.title}</Link>
                        ) : (
                          lastItem.title
                        )}
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
