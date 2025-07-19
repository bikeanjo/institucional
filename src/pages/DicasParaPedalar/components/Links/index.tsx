import { LinkItem, LinkList, Sub, Title, Wrapper } from "./styles";
import ChainIcon from "@assets/images/link.png";

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
    <Wrapper>
      <Title>Links de Apoio</Title>
      <Sub>
        Abaixo alguns links que podem te ajudar a dar os primeiros passos
      </Sub>
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
    </Wrapper>
  );
}
