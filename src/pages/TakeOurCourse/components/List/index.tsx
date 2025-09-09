import type { ReactNode } from "react";
import { Box } from "@mui/material";
import { ListContainer, Item, Icon, Text } from "./styles";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

function ListComponent(): ReactNode {
  return (
    <>
      <Box margin={"0 auto"}>
        <ListContainer>
          <Item>
            <Icon>
              <TaskAltIcon />
            </Icon>
            <Text>Capacitação online, gratuita e com certificação oficial</Text>
          </Item>
          <Item>
            <Icon>
              <TaskAltIcon />
            </Icon>
            <Text> Curso ao vivo (via Google Meet) + conteúdo gravado </Text>
          </Item>
          <Item>
            <Icon>
              <TaskAltIcon />
            </Icon>
            <Text> 4 encontros aos sábados + formatura </Text>
          </Item>
          <Item>
            <Icon>
              <TaskAltIcon />
            </Icon>
            <Text>
              Abordagem em mobilidade urbana, inclusão, mecânica básica e mais
            </Text>
          </Item>
          <Item>
            <Icon>
              <TaskAltIcon />
            </Icon>
            <Text>
              Voltado para quem já atua ou deseja atuar como pessoa voluntária
            </Text>
          </Item>
        </ListContainer>
      </Box>
    </>
  );
}
export default ListComponent;
