import SubTitle from "@components/SubTitle";
import Title from "@components/Title";
import { LinkItem, LinkList } from "./styles";

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
    <>
      <Title>Links de Apoio</Title>
      <SubTitle>
        Abaixo alguns links que podem te ajudar na jornada como Bike Anjo
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
    </>
  );
}
