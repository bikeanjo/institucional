import { Box, BoxProps } from "@mui/material";
import { JSX } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MenuItem, menuItems } from "../../pages/Layout/menuItems";
import { Colors } from "../../styles/tokens/colors";
import { Link } from "react-router-dom";
import { faHouse } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const BreadCrumbContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",

  "& div, a": {
    display: "flex",
    padding: "16px 0",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    [theme.breakpoints.up("lg")]: {
      padding: "32px 0 16px 0",
    },
  },

  "& .link": {
    color: Colors["G-Grey-70"],
  },

  "& .leaf": {
    color: Colors["G-Grey-100"],
    textDecoration: "underline",
    fontWeight: 700,
    textDecorationThickness: "12%",
  },

  "& .home, .icon": {
    color: Colors["Blue-60"],
    textDecoration: "none",
  },

  [theme.breakpoints.up("lg")]: {
    width: "fit-content",
    padding: "0px 96px",
  },
}));

function BreadCrumb(): JSX.Element {
  const location = useLocation();

  const paths = findPaths(location.pathname, menuItems, []);

  return (
    <BreadCrumbContainer>
      <Link to="/" className="home">
        <FontAwesomeIcon icon={faHouse} style={{ fontSize: "18px" }} /> Inicial
      </Link>
      {paths?.map((path) => (
        <div key={path.title}>
          <p className="icon">
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "18px" }}
            />
          </p>
          <p className={path.url ? "leaf" : "link"}>{path.title}</p>
        </div>
      ))}
    </BreadCrumbContainer>
  );
}

interface IPath {
  title?: string;
  url?: string;
}

function findPaths(
  url: string | undefined,
  menuItems: MenuItem[],
  results: IPath[] = [],
): IPath[] | null {
  for (const item of menuItems) {
    const currentResults: IPath[] = [
      ...results,
      { title: item.title, url: item.url },
    ];

    if (item.url === url) {
      return currentResults;
    }

    if (item.children) {
      const result = findPaths(url, item.children, currentResults);
      if (result) {
        return result;
      }
    }
  }

  return null;
}

export default BreadCrumb;
