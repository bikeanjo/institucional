import { Title, Text, Section } from "@components";
import { LinkItem, LinkList } from "./styles";
import LinkIcon from "@components/Icons/link-icon";

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
    <Section>
      <Title>Links de Apoio</Title>
      <Text alignItems="flex-start">
        Abaixo alguns links que podem te ajudar a dar os primeiros passos.
      </Text>
      <LinkList>
        {links.map((item) => (
          <LinkItem key={item.label}>
            <LinkIcon />
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </LinkItem>
        ))}
      </LinkList>
    </Section>
  );
}
