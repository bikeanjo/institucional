import styled from "styled-components";
import { Colors } from "../../../../styles/tokens/colors";
import { BoxProps } from "@mui/material";

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

interface ContainerTemplateProps extends BoxProps {
  secondary?: boolean;
  carrousel?: boolean;
  gap?: string;
  height?: string;
}

interface ContainerProps extends ContainerTemplateProps {
  children: React.ReactNode;
}

const ContainerTemplate = styled.div<ContainerTemplateProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;
  justify-content: center;
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
    height: ${({ height }) => height || "auto"};
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    padding: ${({ carrousel }) =>
      carrousel ? "90px 202px 40px" : "40px 20px"};
    height: ${({ carrousel }) => carrousel && "calc(100vh - 80px)"};
  }
`;

const Container = ({ children, ...props }: ContainerProps) => {
  return <ContainerTemplate {...props}>{children}</ContainerTemplate>;
};

export default Container;
