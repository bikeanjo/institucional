import { Typography } from "@mui/material";
import styled from "styled-components";
import { Colors } from "../../styles/tokens/colors";

interface SubTitleProps {
  desktopOnly?: boolean;
  mobileCenter?: boolean;
  center?: boolean;
}

const SubTitle = styled(Typography)<SubTitleProps>(
  ({ theme, desktopOnly, mobileCenter = false, center = false }) => ({
    wordBreak: "break-word",
    color: Colors["Pink-50"],
    textAlign: "center",

    [theme.breakpoints.up("xs")]: {
      fontSize: "24px",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "0px 16px",
      display: desktopOnly && desktopOnly != undefined ? "none" : "flex",
      textAlign: mobileCenter || center ? "center" : "initial",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "32px",
      alignItems: "flex-start",
      width: center ? "center" : "fit-content",
      padding: "0px",
      display: desktopOnly || desktopOnly == undefined ? "flex" : "none",
      textAlign: center ? "center" : "initial",
    },
  }),
);

export default SubTitle;
