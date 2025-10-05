import { Typography } from "@mui/material";
import styled from "styled-components";
import { Colors } from "@colors";

interface SubTitleProps {
  desktopOnly?: boolean;
  mobileCenter?: boolean;
  center?: boolean;
  color?: string;
}

const SubTitle = styled(Typography)<SubTitleProps>(
  ({ theme, desktopOnly, mobileCenter = false, center = false, color }) => ({
    wordBreak: "break-word",
    color: color ? color : Colors["Pink_50"],
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
