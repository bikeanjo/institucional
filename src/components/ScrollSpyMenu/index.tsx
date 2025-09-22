import { Box, Button as MuiButton } from "@mui/material";
import { JSX, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styles/tokens/colors";

const HEADER_HEIGHT = 76;

const ScrollSpyMenu = (): JSX.Element | null => {
  const [anchorElements, setAnchorElements] = useState<Element[]>([]);
  const linksToSections = useRef(new Map<Element, Element>());

  useEffect(() => {
    const links: Element[] = [];
    const sections = Array.from(
      document.querySelectorAll("[data-anchor-section]"),
    );

    sections.forEach((section) => {
      const linkElements = section
        ? Array.from(section.querySelectorAll("[data-anchor-link]"))
        : [];

      linkElements.forEach((link: Element) => {
        linksToSections.current.set(link, section);
        links.push(link);
      });
    });

    setAnchorElements(links);
  }, []);

  return anchorElements.length > 0 ? (
    <Container>
      {anchorElements.map((el) => (
        <Button
          key={el.textContent}
          type="button"
          onClick={() => {
            const top =
              linksToSections.current.get(el)?.getBoundingClientRect().top ?? 0;
            window.scrollTo({
              behavior: "smooth",
              top: top + window.pageYOffset - HEADER_HEIGHT,
            });
          }}
        >
          {el.textContent}
        </Button>
      ))}
    </Container>
  ) : null;
};

const Button = styled(MuiButton)(() => ({
  border: `2px solid ${Colors["Blue-60"]}`,
  padding: "8px 16px",
  minWidth: "max-content",
  borderRadius: "30px",
  fontSize: "16px",
  fontWeight: 400,
  textTransform: "unset",
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: Colors["G-White"],
  border: `solid ${Colors["G-Grey-20"]}`,
  borderWidth: "2px 0px",
  gap: "24px",
  padding: "12px 20px",

  [theme.breakpoints.up("lg")]: {
    padding: "12px 0px 12px 96px",
  },
}));

export default ScrollSpyMenu;
