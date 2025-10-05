import Title from "@components/Title";
import Text from "@components/Text";
import { LinkItem, LinkList } from "./styles";
import Section from "@components/Section";

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
    <Section>
      <Title alignItems="flex-start">Links de Apoio</Title>
      <Text>
        Abaixo alguns links que podem te ajudar na jornada como Bike Anjo.
      </Text>
      <LinkList>
        {links.map((item) => (
          <LinkItem key={item.label}>
            <img src={"/assets/icons/link-icon.webp"} alt="Chain Icon" />
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </LinkItem>
        ))}
      </LinkList>
    </Section>
  );
}
