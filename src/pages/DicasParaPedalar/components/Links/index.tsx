import SubTitle from "@components/SubTitle";
import Title from "@components/Title";
import { LinkItem, LinkList } from "./styles";
import Section from "@components/Section";
import { Colors } from "../../../../styles/tokens/colors";

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
      <SubTitle color={Colors["G-Grey-100"]}>
        Abaixo alguns links que podem te ajudar a dar os primeiros passos
      </SubTitle>
      <LinkList>
        {links.map((item) => (
          <LinkItem key={item.label}>
            <img src={"/assets/images/link-icon.webp"} alt="Chain Icon" />
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </LinkItem>
        ))}
      </LinkList>
    </Section>
  );
}
