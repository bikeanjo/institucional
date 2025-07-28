import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Logo from "../../../../assets/icons/logo-bike-anjo.svg";
import {
  faInstagram,
  faFacebookF,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { SocialIcon } from "./socialIcon";
import "material-icons/iconfont/material-icons.css";
import Accordion from "./components/accordion";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#F8F8F8",
        color: "#656565",
        padding: { xs: "16px 24px 0px 24px", lg: "40px 96px 0px 96px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box
          display={"grid"}
          gap={{ xs: "16px", lg: "32px" }}
          height="fit-content"
          gridTemplateAreas={{
            xs: `
                  'img rede'
                  'texto texto'
                `,
            lg: `
                  'img'
                  'texto'
                  'rede'
                `,
          }}
          gridTemplateColumns={{
            xs: "1fr 1fr",
            lg: "1fr",
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            width={{ xs: 54, lg: 90 }}
            gridArea="img"
          />
          <Typography
            width={{ xs: "100%", lg: 293 }}
            fontSize={"16px"}
            fontWeight={500}
            gridArea="texto"
            textAlign={{ xs: "center", lg: "start" }}
          >
            Junte-se a uma comunidade que acredita na transformação por meio da
            bicicleta!
          </Typography>
          <Box
            display={"flex"}
            height={"33.6px"}
            gap={{ xs: "8px", lg: "16px" }}
            gridArea="rede"
            justifyContent={{ xs: "end", lg: "start" }}
          >
            <SocialIcon icon={faInstagram} url="" />
            <SocialIcon icon={faFacebookF} url="" />
            <SocialIcon icon={faYoutube} url="" />
            <SocialIcon icon={faLinkedinIn} url="" />
          </Box>
        </Box>
        <Box
          display={"grid"}
          height="fit-content"
          gridTemplateAreas={{
            xs: `
                  'offer receive'
                  'about iniciatives'
                `,
            lg: `
                  'offer iniciatives about'
                  'receive iniciatives about'
                `,
          }}
          gridTemplateColumns={{
            xs: "1fr 1fr",
            lg: "auto auto auto",
          }}
          gap={{ xs: "4px", lg: "24px" }}
          justifyContent={"center"}
          my={{ xs: "16px", lg: "0px" }}
        >
          <Accordion title="Ofereça Ajuda" gridItem="offer">
            <Typography fontWeight={600} fontSize={"15px"}>
              Como Pessoa
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Doe
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Seja Voluntário
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Faça nossa preparação
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Dicas para Bike Anjo
            </Typography>
            <Typography fontWeight={600} fontSize={"15px"}>
              Ajude como Instituição
            </Typography>
          </Accordion>
          <Accordion title="Receba Ajuda" gridItem="receive">
            <Typography fontWeight={400} fontSize={"15px"}>
              Como Nós Ajudamos
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Dicas para Pedalar
            </Typography>
          </Accordion>
          <Accordion title="Iniciativas" gridItem="iniciatives">
            <Typography fontWeight={600} fontSize={"15px"}>
              Projetos
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Escola Bike Anjo
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Bike Anjas
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Pedala ou Repassa
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              De Bike ao Trabalho
            </Typography>
            <Typography fontWeight={600} fontSize={"15px"}>
              Campanhas
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Dia Mundial Sem Carro
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Bicicleta nos Planos
            </Typography>
            <Typography fontWeight={600} fontSize={"15px"}>
              Anjos na Sua Cidade
            </Typography>
            <Typography fontWeight={600} fontSize={"15px"}>
              Veja Todas as Iniciativas
            </Typography>
          </Accordion>
          <Accordion title="Sobre Nós" gridItem="about">
            <Typography fontWeight={400} fontSize={"15px"}>
              Como Funciona
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Quem Somos
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Redes Sociais
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Blog
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Bike Anjo na Mídia
            </Typography>
          </Accordion>
        </Box>
      </Box>
      <Divider
        sx={{
          my: { xs: 1, lg: 4 },
          borderWidth: "1px",
          borderColor: "#656565",
        }}
      />
      <Typography
        fontWeight={600}
        fontSize={{ xs: "16px", lg: "24px" }}
        pb={{ xs: "16px", lg: "40px" }}
      >
        Bike Anjo 2025 | Feito no Brasil
      </Typography>
    </Box>
  );
};
export default Footer;
