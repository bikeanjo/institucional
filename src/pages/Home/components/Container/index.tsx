import styled from "styled-components";

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
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.palette.secondary.main : "transparent"};
  gap: ${({ gap }) => gap || "unset"};

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
