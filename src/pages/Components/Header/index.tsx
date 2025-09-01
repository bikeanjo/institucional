import styled from "styled-components";
import genericImage from "../../../assets/header/header-image.webp";
import { Colors } from "../../../styles/tokens/colors";

interface HeaderProps {
  secondary?: boolean;
  gap?: string;
  padding?: string;
  height?: string;
  Hero?: string;
}

const Header = styled.div<HeaderProps>(
  ({ theme, secondary, gap, height, Hero }) => ({
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
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 35%, transparent 65%, rgba(0, 0, 0, 0.7) 100%), url(${Hero ? Hero : genericImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 20%",

    "& h2": {
      color: Colors["G-White"],
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
      height: height || "320px",
    },
  }),
);

export default Header;
