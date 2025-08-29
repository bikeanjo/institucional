import styled from "styled-components";
import { Colors } from "../../../../../../styles/tokens/colors";

interface GridItemProps {
  column?: boolean;
  gap?: string;
  center?: boolean;
  height?: string;
  padding?: string;
  color?: string;
}

const GridItem = styled.div<GridItemProps>`
  display: flex;
  height: ${(props) => props.height};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  background-color: ${Colors["Pink-10"]};
  border: 2px solid
    ${(props) => (props.color ? props.color : Colors["Pink-50"])};
  border-radius: 1rem;
  justify-content: center;
  color: black;
  gap: ${(props) => props.gap};

  ${({ theme }) => theme.breakpoints.up("xs")} {
    align-items: ${(props) => (props.center ? "center" : "baseline")};
    padding: ${(props) => props.padding};
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    justify-content: center;
    align-items: ${(props) => (props.center ? "center" : "baseline")};
    padding: 20px 36px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    justify-content: start;
    align-items: baseline;
    padding: 20px 36px;
  }
`;

export default GridItem;
