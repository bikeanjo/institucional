import { Typography } from "@mui/material";
import styled from "styled-components";

const Title = styled(Typography)(({ theme }) => ({
  color: "var(--mui-palette-title-main)",
  fontWeight: 600,
  display: "flex",

  [theme.breakpoints.up("xs")]: {
    fontSize: "32px",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "48px",
    alignItems: "flex-start",
    width: "fit-content",
  },
}));

export default Title;
