import { Box } from "@mui/material";
import SubTitle from "../../../Components/SubTitle";
import Title from "../../../Components/Title";
import { LinkItem, LinkList } from "./styles";
import ChainIcon from "@assets/images/link.png";

const links = [
  {
    label:
      "Como incidir em politicas públicas para promover o uso da bicicleta.",
    url: "#",
  },
  {
    label: "Empreendedorismo: Como mobilizar recursos e parceiros?",
    url: "#",
  },
];

export default function SupportLinksSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", lg: "1032px" },
        margin: "40px auto",
        position: "relative",
        marginTop: { xs: "40px", lg: "80px" },
        gap: { xs: "32px", lg: "20px" },
      }}
    >
      <Title>Links de Apoio</Title>
      <SubTitle>
        Abaixo alguns links que podem te ajudar na jornada como Bike Anjo
      </SubTitle>
      <LinkList>
        {links.map((item) => (
          <LinkItem key={item.label}>
            <img src={ChainIcon} alt="Chain Icon" />
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </LinkItem>
        ))}
      </LinkList>
    </Box>
  );
}
