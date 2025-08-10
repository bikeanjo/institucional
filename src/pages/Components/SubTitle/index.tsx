import { Typography } from "@mui/material";
import styled from "styled-components";

interface SubTitleProps {
  desktopOnly?: boolean;
  mobileCenter?: boolean;
}

const SubTitle = styled(Typography)<SubTitleProps>(
  ({ theme, desktopOnly, mobileCenter = false }) => ({
    fontWeight: 600,
    wordBreak: "break-word",
    color: "black",

    [theme.breakpoints.up("xs")]: {
      fontSize: "24px",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "0px 16px",
      display: desktopOnly && desktopOnly != undefined ? "none" : "flex",
      textAlign: mobileCenter ? "center" : "initial",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "32px",
      alignItems: "flex-start",
      width: "fit-content",
      padding: "0px",
      display: desktopOnly || desktopOnly == undefined ? "flex" : "none",
      textAlign: "initial",
    },
  }),
);

export default SubTitle;
