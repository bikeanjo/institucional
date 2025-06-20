import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Logo from "../../../../assets/icons/logo-bike-anjo.svg";
import {
  faInstagram,
  faFacebookF,
  faTiktok,
  faYoutube,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { SocialIcon } from "./socialIcon";
import "material-icons/iconfont/material-icons.css";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{ px: 12, pt: 5, pb: 8, bgcolor: "#F8F8F8", color: "#656565" }}
    >
      <Box display="flex" sx={{ justifyContent: "space-between" }}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"293"}
          gap={"32px"}
        >
          <img src={Logo} alt="Logo" width={90} />
          <Typography width={293} fontSize={"15px"} fontWeight={500}>
            Junte-se a uma comunidade que acredita na transformação por meio da
            bicicleta!
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"263.6px"}
            height={"33.6px"}
            gap={"10px"}
          >
            <SocialIcon icon={faFacebookF} url="" />
            <SocialIcon icon={faInstagram} url="" />
            <SocialIcon icon={faLinkedinIn} url="" />
            <SocialIcon icon={faTiktok} url="" />
            <SocialIcon icon={faXTwitter} url="" />
            <SocialIcon icon={faYoutube} url="" />
          </Box>
        </Box>
        <Box display={"flex"} gap={"24px"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={166}
            gap={"16px"}
          >
            <Typography fontWeight={600} fontSize={"15px"}>
              Ofereça Ajuda
            </Typography>
            <Typography fontWeight={600} fontSize={"15px"}>
              Como Pessoa
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Seja Voluntário
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Doe
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Faça nossa preparação
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Divulgue
            </Typography>
            <Typography fontWeight={600} fontSize={"15px"}>
              Ajude como Instituição
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={166}
            gap={"16px"}
          >
            <Typography fontWeight={600} fontSize={"15px"}>
              Receba Ajuda
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={180}
            gap={"16px"}
          >
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
              Eventos
            </Typography>
            <Typography fontWeight={600} fontSize={"15px"}>
              Veja Todas as Iniciativas
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={166}
            height={159}
            gap={"16px"}
          >
            <Typography fontWeight={600} fontSize={"15px"}>
              Sobre Nós
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Como Funciona
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Quem Somos
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                height: 32,
              }}
            >
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{
                  lineHeight: 1,
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Conteúdo
              </Typography>
              <span
                className="material-icons"
                style={{
                  fontSize: 20,
                  lineHeight: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  userSelect: "none",
                }}
              >
                keyboard_arrow_down
              </span>
            </Box>
            <Typography fontWeight={400} fontSize={"15px"}>
              Premios
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                height: 32,
              }}
            >
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{
                  lineHeight: 1,
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Transparência
              </Typography>
              <span
                className="material-icons"
                style={{
                  fontSize: 20,
                  lineHeight: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  userSelect: "none",
                }}
              >
                keyboard_arrow_down
              </span>
            </Box>
            <Typography fontWeight={400} fontSize={"15px"}>
              Valores
            </Typography>
            <Typography fontWeight={400} fontSize={"15px"}>
              Matérias
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{
          my: 4,
          borderWidth: "1px",
          borderColor: "#656565",
        }}
      />
      <Typography fontWeight={600} fontSize={"24px"}>
        Bike Anjo 2025 | Feito no Brasil
      </Typography>
    </Box>
  );
};
export default Footer;
