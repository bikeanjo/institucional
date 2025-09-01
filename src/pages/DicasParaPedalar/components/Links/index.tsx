import { Box } from "@mui/material";
import SubTitle from "@components/SubTitle";
import Title from "@components/Title";
import { LinkItem, LinkList } from "./styles";

const links = [
  { label: "Como escolher sua bicicleta", url: "#" },
  {
    label: "Dicas para pedalar no trânsito com confiança e segurança",
    url: "#",
  },
  { label: "Como ir de bicicleta ao trabalho", url: "#" },
  { label: "Legislação para ciclista", url: "#" },
  { label: "Mecânica básica para bicicleta", url: "#" },
  { label: "Como remendar pneu furado", url: "#" },
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
        padding: "20px",
      }}
    >
      <Title>Links de Apoio</Title>
      <SubTitle>
        Abaixo alguns links que podem te ajudar a dar os primeiros passos
      </SubTitle>
      <LinkList>
        {links.map((item) => (
          <LinkItem key={item.label}>
            <img src={"/assets/images/link.png"} alt="Chain Icon" />
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </LinkItem>
        ))}
      </LinkList>
    </Box>
  );
}
