import styled from "styled-components";

interface HeaderProps {
  secondary?: boolean;
  gap?: string;
  padding?: string;
  height?: string;
}

const Header = styled.div<HeaderProps>(({ theme, secondary, gap, height }) => ({
  width: "100%",
  paddingBottom: "32px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  backgroundColor: secondary
    ? "var(--mui-palette-secondary-main)"
    : "transparent",
  gap: gap || "0",
  alignItems: "center",

  "& h2": {
    color: "#486284",
    fontWeight: 600,
    lineHeight: "100%",
    margin: "0 0 4px",
    [theme.breakpoints.up("xs")]: {
      fontSize: "32px",
      width: "fit-content",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "48px",
      width: "1032px",
    },
  },

  [theme.breakpoints.up("xs")]: {
    height: "200px",
  },

  [theme.breakpoints.up("lg")]: {
    height: height || "232px",
  },
}));

export default Header;
