/* eslint-disable react-x/no-array-index-key */
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
import { menuItems } from "../../menuItems";
import { Link } from "../Link";

const Footer: React.FC = () => {
  const gridNames: Record<string, string> = {
    "Ofereça Ajuda": "offer",
    "Receba Ajuda": "receive",
    Iniciativas: "iniciatives",
    "Sobre Nós": "about",
    Contato: "contato",
  };

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
                  'contato contato'
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
          {menuItems.map((item, idx) => (
            <Accordion
              title={item.title}
              gridItem={gridNames[item.title]}
              key={idx + " menu-item"}
              contato={item.title === "Contato"}
            >
              {Array.isArray(item.children) && item.children.length > 0 && (
                <React.Fragment>
                  {item.children.map((subItem, subIdx) => (
                    <React.Fragment key={subIdx + " submenu-item"}>
                      <Typography fontWeight={600} fontSize={"15px"}>
                        {subItem.url ? (
                          <Link to={subItem.url}>{subItem.title}</Link>
                        ) : (
                          subItem.title
                        )}
                      </Typography>
                      {Array.isArray(subItem.children) &&
                        subItem.children.length > 0 &&
                        subItem.children.map((lastItem, lastIdx) => (
                          <Typography
                            fontWeight={400}
                            fontSize={"15px"}
                            key={lastIdx + " submenu-item"}
                          >
                            {lastItem.url ? (
                              <Link to={lastItem.url}>{lastItem.title}</Link>
                            ) : (
                              lastItem.title
                            )}
                          </Typography>
                        ))}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              )}
            </Accordion>
          ))}
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
