import React from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";
import "material-icons/iconfont/material-icons.css";
import { Link } from "react-router-dom";
import { Colors } from "../../../../styles/tokens/colors";

const menuItemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "transparent",
  },
};

export default function Login() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", textAlign: "center" }}>
        <IconButton
          onClick={handleOpenMenu}
          sx={{
            ml: 2,
            "&:hover": {
              backgroundColor: Colors["Green-20"],
            },
            "&:active": {
              backgroundColor: Colors["Green-20"],
            },
          }}
          TouchRippleProps={{
            style: { color: Colors["Green-20"] },
          }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Box
            component="span"
            className="material-icons-outlined"
            sx={{ fontSize: { xs: 35, xl: 50 }, color: Colors["Green-70"] }}
          >
            account_circle
          </Box>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              backgroundColor: Colors["Green-70"],
              width: 249,
              py: 5,
              px: 4,
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                width: 18,
                height: 18,
                right: 24,
                top: 0,
                backgroundColor: Colors["Green-70"],
                transform: "translateY(-20%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: 65, vertical: 90 }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
          <Typography color={"neutral-100"}>
            Já faz parte da Bike Anjo?
          </Typography>
        </Box>

        <MenuItem sx={menuItemStyle}>
          <Button
            component={Link}
            to=""
            sx={{
              width: 185,
              height: 39,
              borderRadius: "4px",
              p: 1.25,
              backgroundColor: "neutral-100",
              textTransform: "none",
              fontSize: "16px",
              color: Colors["Green-70"],
            }}
          >
            Faça Login
          </Button>
        </MenuItem>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 1 }}>
          <Typography color={"neutral-100"}>Ainda não tem cadastro?</Typography>
        </Box>

        <MenuItem sx={menuItemStyle}>
          <Button
            component={Link}
            to=""
            sx={() => ({
              width: 185,
              height: 39,
              borderRadius: "4px",
              p: 1.25,
              backgroundColor: Colors["Green-20"],
              textTransform: "none",
              fontSize: "16px",
              color: Colors["Green-70"],
            })}
          >
            Crie uma Conta
          </Button>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
