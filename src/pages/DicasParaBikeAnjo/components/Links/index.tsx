import { LinkItem, LinkList, Sub, Title, Wrapper } from "./styles";
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
    <Wrapper>
      <Title>Links de Apoio</Title>
      <Sub>
        Abaixo alguns links que podem te ajudar na jornada como Bike Anjo
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
