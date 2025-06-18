import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import "material-icons/iconfont/material-icons.css";

interface NavMenuItem {
  label: string;
  bold?: boolean;
  submenu?: NavMenuItem[];
}

interface NavMenuProps {
  label: string;
  items: NavMenuItem[];
  columns?: number;
}

export const NavMenu: React.FC<NavMenuProps> = ({ label, items, columns }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const open = Boolean(anchorEl);
  const openSubmenu = Boolean(submenuAnchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSubmenuAnchorEl(null);
  };

  const handleOpenSubmenu = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setSubmenuAnchorEl(event.currentTarget);
  };
  const handleCloseSubmenu = () => {
    setSubmenuAnchorEl(null);
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
          <Typography fontWeight={600}>{label}</Typography>
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
          {items.map((item) => {
            const hasSubmenu = item.label === "Conteúdo";

            return (
              <MenuItem
                key={item.label}
                onClick={hasSubmenu ? handleOpenSubmenu : handleCloseMenu}
                sx={{
                  p: 0,
                  fontWeight: item.bold ? 600 : 400,
                  color: "#262626",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "#D9D9D9",
                  },
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "80px" }}
                >
                  {item.label}
                  {hasSubmenu && (
                    <span className="material-icons" style={{ fontSize: 18 }}>
                      keyboard_arrow_right
                    </span>
                  )}
                </Box>
              </MenuItem>
            );
          })}
        </Menu>

        <Menu
          anchorEl={submenuAnchorEl}
          open={openSubmenu}
          onClose={handleCloseSubmenu}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                backgroundColor: "#D9D9D9",
                borderRadius: "8px",
                p: "16px 24px 24px 24px",
              },
            },
          }}
          MenuListProps={{
            disablePadding: true,
            sx: {
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            },
          }}
        >
          {[
            "Blog",
            "Matérias",
            "Dicas para pedalar",
            "Dicas para BikeAnjo",
          ].map((subItem) => (
            <MenuItem
              key={subItem}
              onClick={handleCloseMenu}
              sx={{
                p: 0,
                color: "#262626",
                justifyContent: "flex-start",
                "&:hover": { backgroundColor: "#F5F5F5" },
              }}
            >
              {subItem}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </React.Fragment>
  );
};
