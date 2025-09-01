import styled from "styled-components";
import { Colors } from "../../../../styles/tokens/colors";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      secondary: {
        main: string;
      };
    };
    breakpoints: {
      up: (key: string) => string;
    };
  }
}

interface ContainerProps {
  secondary?: boolean;
  carrousel?: boolean;
  gap?: string;
  height?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ secondary }) =>
    secondary ? Colors["Green-20"] : "transparent"};
  border: ${({ secondary }) => secondary && `2px solid ${Colors["Green-70"]}`};
  border-width: ${({ secondary }) => secondary && `2px 0px`};
  gap: ${({ gap }) => gap || "unset"};
  background-image: ${({ carrousel }) =>
    carrousel ? `url(/assets/images/Home/placeholder/hero.jpg)` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  ${({ theme }) => theme.breakpoints.up("xs")} {
    padding: 40px 0px;
    height: ${({ height }) => height || "auto"};
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    padding: ${({ carrousel }) => (carrousel ? "90px 202px 40px" : "64px 0px")};
    height: ${({ carrousel }) => carrousel && "calc(100vh - 80px)"};
  }
`;

export default Container;
