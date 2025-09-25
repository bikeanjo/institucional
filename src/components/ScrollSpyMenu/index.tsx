import { Box, Button as MuiButton } from "@mui/material";
import { JSX, useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styles/tokens/colors";

const HEADER_HEIGHT = 76;

interface AnchorElementsProps {
  link: Element | null;
  section: Element;
}

const ScrollSpyMenu = (): JSX.Element | null => {
  const [anchorElements, setAnchorElements] = useState<AnchorElementsProps[]>(
    [],
  );
  const [activeSectionId, setActiveSectionId] = useState<string>("");

  useEffect(() => {
    console.log(activeSectionId);
  }, [activeSectionId]);

  useEffect(() => {
    const links: AnchorElementsProps[] = [];
    const sections = Array.from(
      document.querySelectorAll("[data-anchor-section]"),
    );
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        console.log("---------------------------------------------");
        entries.forEach((section) => {
          if (section.isIntersecting) {
            setActiveSectionId(section.target.id);
          }
        });
      },
      { threshold: [0.5] },
    );

    sections.forEach((section) => {
      links.push({
        link: section.querySelector("[data-anchor-link]"),
        section,
      });

      sectionObserver.observe(section);
    });

    setAnchorElements(links);

    return () => {
      sections.forEach((section) => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  return anchorElements.length > 0 ? (
    <Container>
      {anchorElements.map(({ link, section }) => (
        <Button
          key={link?.textContent}
          type="button"
          className={section.id == activeSectionId ? "active" : ""}
          onClick={() => {
            const top = section?.getBoundingClientRect().top ?? 0;
            window.scrollTo({
              behavior: "smooth",
              top: top + window.pageYOffset - HEADER_HEIGHT,
            });
          }}
        >
          {link?.textContent}
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

  "&.active": {
    backgroundColor: Colors["Blue-60"],
    color: Colors["G-White"],
  },
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
  overflow: "scroll",

  [theme.breakpoints.up("lg")]: {
    padding: "12px 0px 12px 96px",
  },
}));

export default ScrollSpyMenu;
