import type { ReactNode } from "react";
import {
  Timeline,
  BoxContent,
  Content,
  Title,
  Text,
  ContainerDot,
  Dot,
  Ball,
} from "./styles";

function TimelineCourse(): ReactNode {
  return (
    <>
      <Timeline>
        <BoxContent padding="left">
          <ContainerDot side="left">
            <Dot>
              <Ball />
            </Dot>
          </ContainerDot>

          <Content>
            <Title>1. Divulgação e chamada</Title>
            <Text>Anúncio do programa e abertura das inscrições.</Text>
          </Content>
        </BoxContent>

        <BoxContent left padding="right">
          <ContainerDot side="right">
            <Dot>
              <Ball />
            </Dot>
          </ContainerDot>
          <Content>
            <Title>2. Inscrição + formulário</Title>
            <Text>
              Preenchimento do formulário de interesse (Google Forms).
            </Text>
          </Content>
        </BoxContent>

        <BoxContent padding="left">
          <ContainerDot side="left">
            <Dot>
              <Ball />
            </Dot>
          </ContainerDot>
          <Content>
            <Title>3. Entrevista online</Title>
            <Text>Bate-papo para conhecermos melhor os candidates.</Text>
          </Content>
        </BoxContent>

        <BoxContent left padding="right">
          <ContainerDot side="right">
            <Dot>
              <Ball />
            </Dot>
          </ContainerDot>
          <Content>
            <Title>4. Participação no curso</Title>
            <Text>Aulas ao vivo e atividades complementares.</Text>
          </Content>
        </BoxContent>

        <BoxContent padding="left">
          <ContainerDot side="left">
            <Dot>
              <Ball />
            </Dot>
          </ContainerDot>
          <Content>
            <Title>5. Formatura com certificado</Title>
            <Text>Celebração e entrega dos certificados de conclusão.</Text>
          </Content>
        </BoxContent>
      </Timeline>
    </>
  );
}
export default TimelineCourse;
