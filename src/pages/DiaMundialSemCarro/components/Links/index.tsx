import { Colors } from "@colors";
import { LinkItem, LinkList } from "./styles";
import LinkIcon from "../../../../components/Icons/link-icon";

const links = [
  { label: "Modelo para empresa", url: "#" },
  {
    label: "Modelo para prefeitura",
    url: "#",
  },
  { label: "Release do Bike Anjo no Dia Mundial Sem Carro", url: "#" },
];

export default function LinksList() {
  return (
    <LinkList>
      {links.map((item) => (
        <LinkItem key={item.label}>
          <LinkIcon color={Colors["Green_70"]} />
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.label}
          </a>
        </LinkItem>
      ))}
    </LinkList>
  );
}
