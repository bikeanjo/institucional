/* eslint-disable react-x/no-array-index-key */
import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import {
  faInstagram,
  faFacebookF,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "./socialIcon";
import "material-icons/iconfont/material-icons.css";
import Accordion from "./components/accordion";
import { MenuItem, menuItems } from "../../menuItems";
import { Link } from "../Link";
import { Link as RouterLink } from "react-router";
import { Colors } from "@colors";
import styled from "styled-components";

const Footer: React.FC = () => {
  const gridNames: Record<string, string> = {
    "Ofereça Ajuda": "offer",
    "Receba Ajuda": "receive",
    Iniciativas: "iniciatives",
    "Sobre Nós": "about",
    Contato: "contato",
  };

  const SocialLink = styled(RouterLink)`
    text-decoration: none;
    color: ${Colors["Green_70"]};
    width: 100%;
    display: flex;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  `;

  const isFirstOrderTree = (items: MenuItem): boolean => {
    if (!items.children) {
      return true;
    }
    if (items.children.some((child) => child.children)) {
      return false;
    }
    return true;
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: Colors["G_Grey_10"],
        color: Colors["G_Grey_60"],
        padding: { xs: "16px 24px 0px 24px", lg: "40px 96px 0px 96px" },
        fontWeight: 700,
        borderTop: `2px solid ${Colors["Green_70"]}`,
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
            src={"/assets/icons/logo-bike-anjo-laranjo.webp"}
            alt="Logo"
            gridArea="img"
          />
          <Typography
            width={{ xs: "100%", lg: 293 }}
            fontSize={"18px"}
            gridArea="texto"
            color={Colors["G_Grey_100"]}
            textAlign={{ xs: "center", lg: "start" }}
          >
            Junte-se a uma comunidade que acredita na transformação por meio da
            bicicleta!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Box
              display={"flex"}
              height={"33.6px"}
              gap={{ xs: "8px", lg: "16px" }}
              gridArea="rede"
              justifyContent={{ xs: "end", lg: "start" }}
            >
              <SocialIcon
                icon={faInstagram}
                title="instagram"
                url="https://instagram.com/bikeanjo"
                external
              />
              <SocialIcon
                icon={faFacebookF}
                title="facebook"
                url="https://facebook.com/bikeanjo"
                external
              />
              <SocialIcon
                icon={faYoutube}
                title="youtube"
                url="https://youtube.com/@bikeanjo"
                external
              />
              <Box
                sx={{
                  display: { xs: "none", lg: "flex" },
                }}
              >
                <SocialIcon
                  icon={faLinkedinIn}
                  title="linkedin"
                  url="https://linkedin.com/company/bikeanjo"
                  external
                />
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", lg: "none" },
                }}
              >
                <SocialIcon
                  icon={faPlus}
                  url="/social-media"
                  title="redes-sociais"
                />
              </Box>
            </Box>
            <SocialLink to="/social-media">Veja todas as Redes</SocialLink>
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
                  'receive iniciatives contato'
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
              {Array.isArray(item.children) && item.children.length > 0 ? (
                <React.Fragment>
                  {item.children.map((subItem, subIdx) => (
                    <React.Fragment key={subIdx + " submenu-item"}>
                      <Typography
                        fontWeight={isFirstOrderTree(item) ? 400 : 600}
                        fontSize={"15px"}
                      >
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
              ) : (
                <></>
              )}
            </Accordion>
          ))}
        </Box>
      </Box>
      <Divider
        sx={{
          my: { xs: 1, lg: 4 },
          borderWidth: "1px",
          borderColor: Colors["G_Grey_30"],
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
