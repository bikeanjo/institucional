import styled from "styled-components";
import { Colors } from "../../../../../../styles/tokens/colors";
import { Box, BoxProps } from "@mui/material";

interface GridItemContainerProps extends BoxProps {
  gap?: string;
  height?: string;
  padding?: string;
  color?:
    | {
        xs?: string;
        lg?: string;
      }
    | string;
  backgroundColor?:
    | {
        xs?: string;
        lg?: string;
      }
    | string;
}

interface GridItemProps extends GridItemContainerProps {
  children: React.ReactNode;
}

const ContainerGridItem = styled(Box)<GridItemContainerProps>`
  display: flex;
  height: ${(props) => props.height};
  background-color: ${(props) =>
    props.backgroundColor
      ? typeof props.backgroundColor == "string"
        ? props.backgroundColor
        : props.backgroundColor.xs
      : Colors["Pink_10"]};
  border: 2px solid
    ${(props) =>
      props.color
        ? typeof props.color == "string"
          ? props.color
          : props.color.xs
        : Colors["Pink_50"]};
  border-radius: 1rem;
  color: black;
  gap: ${(props) => props.gap};

  ${({ theme }) => theme.breakpoints.up("lg")} {
    padding: 20px 36px;

    border: 2px solid
      ${(props) =>
        props.color
          ? typeof props.color == "string"
            ? props.color
            : props.color.lg
          : Colors["Pink_50"]};
    background-color: ${(props) =>
      props.backgroundColor
        ? typeof props.backgroundColor == "string"
          ? props.backgroundColor
          : props.backgroundColor.lg
        : Colors["Pink_10"]};
  }
`;

const GridItem = ({ children, ...props }: GridItemProps) => {
  return <ContainerGridItem {...props}>{children}</ContainerGridItem>;
};

export default GridItem;
