import styled from "styled-components";
import { BoxProps } from "@mui/material";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      up: (key: string) => string;
    };
  }
}

interface ContainerTemplateProps extends BoxProps {
  Hero?: {
    url: string;
    backgroundPositionDesktop: string;
    backgroundPositionMobile: string;
  };
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
  background-color: transparent;
  background-image: ${({ Hero }) =>
    Hero
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Hero.url})`
      : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/images/Home/placeholder/hero.webp)`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-position: ${({ Hero }) => Hero?.backgroundPositionMobile};

  ${({ theme }) => theme.breakpoints.up("lg")} {
    padding: 90px 100px 40px;
    height: calc(100vh - 80px);
    background-position: ${({ Hero }) => Hero?.backgroundPositionDesktop};
  }
`;

const Container = ({ children, ...props }: ContainerProps) => {
  return <ContainerTemplate {...props}>{children}</ContainerTemplate>;
};

export default Container;
