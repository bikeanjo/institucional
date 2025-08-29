import type { JSX } from "react";
import { AccordionWrapper } from "./styles";
import { QuestionAccordion } from "../../../DicasParaBikeAnjo/components/Accordion";
import Title from "../../components/Title";
import SubTitle from "../../../Components/SubTitle";
import Container from "../../../Components/Container";
import { Colors } from "../../../../styles/tokens/colors";

const accordionItems = [
  {
    title: "O que é a Bike Anjo?",
    content:
      "A Bike Anjo é uma rede de ciclistas voluntárias e voluntários que acreditam no poder da bicicleta para transformar cidades e vidas. Atuamos ensinando a pedalar, acompanhando no trânsito e promovendo atividades educativas e de mobilização por todo o Brasil.",
  },
  {
    title: "Como posso aprender a pedalar com a Bike Anjo?",
    content:
      "Sim! Valorizamos e respeitamos a diversidade. Qualquer pessoa, de qualquer idade, gênero ou experiência, é bem-vinda para aprender, ensinar ou apoiar. Temos inclusive projetos específicos para mulheres, periferias e muito mais.",
  },
  {
    title: "Quando ocorrem as atividades?",
    content:
      "As atividades são organizadas localmente e variam de acordo com a cidade. Acompanhe as redes sociais locais ou fale com a articulação da sua cidade para saber da agenda.",
  },
  {
    title: "E se eu não encontrar ninguém disponível na minha cidade?",
    content:
      "Nossa rede é feita por voluntárias/os. Pode ser que demore um pouco em cidades com menos anjos ativos. Mas você pode ajudar indicando o projeto, divulgando localmente e até iniciando uma articulação por aí!",
  },
  {
    title: "Crianças também podem aprender a pedalar?",
    content:
      "Sim! Temos atividades voltadas para todas as idades. Crianças são bem-vindas, desde que acompanhadas por responsáveis. Temos oficinas lúdicas e acolhedoras especialmente para elas.",
  },
  {
    title: "Não tenho bicicleta. Posso participar mesmo assim?",
    content:
      "Sim, idealmente quem aprende ou ensina deve ter acesso a uma bicicleta. Em alguns locais, há bikes emprestadas para eventos. Vale combinar com antecedência com a pessoa voluntária ou mandar mensagem para nossas articulações.",
  },
  {
    title: "Preciso pagar alguma coisa?",
    content:
      "Não precisa! Tudo na Bike Anjo é feito de forma voluntária e gratuita – tanto pra quem quer aprender quanto pra quem quer ensinar ou colaborar de outras formas. Acreditamos em troca, afeto e construção coletiva. Se quiser e puder, pode apoiar com doações, mas participar da rede não tem custo nenhum.",
  },
  {
    title: "Tem limite de vezes pra pedir ajuda?",
    content:
      "Nenhum! Pode pedir ajuda quantas vezes quiser ou precisar – seja pra praticar, aprender uma nova rota ou ganhar confiança no trânsito. O importante é você se sentir segura e acolhida no seu ritmo. O mesmo serve para eventos, pode ir em quantos você quiser!",
  },
  {
    title: "Nunca ensinei ninguém. Posso ser Bike Anjo?",
    content:
      "Pode sim! Há formações específicas que preparam você para atuar, mesmo que nunca tenha ensinado antes, ao concluir o curso de formação com presença mínima e entrega das atividades, você recebe um certificado digital de participação, reconhecido dentro da rede. Também é possível colaborar em áreas como comunicação, organização de eventos, apoio administrativo e mais.",
  },
  {
    title: "Como instituições ou empresas podem se tornar parceiras?",
    content:
      "Parcerias são sempre bem-vindas! Atendemos projetos com escolas, empresas e comunidades. Entre na pagina Contato ou nós mande um e-mail em: contato@bikeanjo.com",
  },
  {
    title: "Tenho uma dúvida que não está aqui. Com quem falo?",
    content:
      "Você pode especificar sua dúvida no nosso Contato e caso seja em relação a sua região, você pode entrar em contato com as articulações locais",
  },
];

function FAQ(): JSX.Element {
  return (
    <Container>
      <Title color={Colors["Pink-50"]}>Conheça a Bike Anjo</Title>
      <SubTitle center>
        Abaixos respondemos algumas das principais duvidas sobre a Bike Anjo, e
        você sempre pode entrar em contato conosco caso precise!
      </SubTitle>
      <AccordionWrapper>
        {accordionItems.map((item) => (
          <QuestionAccordion
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
      </AccordionWrapper>
    </Container>
  );
}

export default FAQ;
