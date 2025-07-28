import styled from "styled-components";

interface GridItemProps {
  column?: boolean;
  gap?: string;
  center?: boolean;
  height?: string;
  padding?: string;
}

const GridItem = styled.div<GridItemProps>`
  display: flex;
  height: ${(props) => props.height};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  background-color: var(--mui-palette-secondary-main);
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
