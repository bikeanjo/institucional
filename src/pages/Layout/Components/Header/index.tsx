import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  InputBase,
  Divider,
} from "@mui/material";
import "material-icons/iconfont/material-icons.css";
import logo from "../../../../assets/icons/logo-bike-anjo.svg";
import Login from "./Login";
import { NavMenu } from "./MenuItem";

const Header: React.FC = () => {
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
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo Bike Anjo"
          sx={{ width: { xs: 40.42, lg: 51.06 }, height: { xs: 38, lg: 48 } }}
        />

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
          <NavMenu
            label="Ofereça Ajuda"
            items={[
              { label: "Como Pessoa", bold: true },
              { label: "Doe", bold: false },
              { label: "Seja Voluntário", bold: false },
              { label: "Faça nossa preparação", bold: false },
              { label: "Ajude como Instituição", bold: true },
            ]}
          />

          <Typography fontWeight={600} sx={{ cursor: "pointer" }}>
            Receba Ajuda
          </Typography>

          <NavMenu
            label="Iniciativas"
            columns={2}
            items={[
              { label: "Projetos", bold: true },
              { label: "Escola Bike Anjo", bold: false },
              { label: "Bike Anjas", bold: false },
              { label: "Pedala ou Repassa", bold: false },
              { label: "De Bike para o Trabalho", bold: false },
              { label: "Campanhas", bold: true },
              { label: "Dia Mundial Sem Carro", bold: false },
              { label: "Bicicleta nos Planos", bold: false },
              { label: "Eventos", bold: true },
              { label: "Veja todas as Iniciativas", bold: true },
            ]}
          />

          <NavMenu
            label="Sobre Nós"
            items={[
              { label: "Redes Sociais", bold: false },
              { label: "Como Funciona", bold: false },
              { label: "Conteúdo", bold: false },
              { label: "Quem somos", bold: false },
              { label: "Nossos valores", bold: false },
              { label: "Onde estamos", bold: false },
              { label: "Transparência", bold: false },
            ]}
          />

          <Typography fontWeight={600} sx={{ cursor: "pointer" }}>
            Contato
          </Typography>
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
    </AppBar>
  );
};

export default Header;
