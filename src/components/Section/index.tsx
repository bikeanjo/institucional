import { Box, BoxProps } from "@mui/material";
import styled from "styled-components";

interface SectionTemplateProps extends BoxProps {
  inline?: boolean;
  borderColor?: string;
  backgroundColor?: string;
}

interface SectionProps extends SectionTemplateProps {
  children: React.ReactNode;
}

const SectionTemplate = styled(Box)<SectionTemplateProps>(
  ({ theme, inline, borderColor, backgroundColor }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    paddingTop: "32px",
    overflow: "visible",
    zIndex: 0,

    [theme.breakpoints.up("lg")]: {
      flexDirection: inline ? "row" : "column",
      width: "100%",
      marginTop: "40px",
    },

    "&::before": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "300%",
      height: "100%",
      zIndex: -1,
      background: backgroundColor ? backgroundColor : "transparent",
      borderTop: `2px solid ${borderColor ? borderColor : "transparent"}`,
      borderBottom: `2px solid ${borderColor ? borderColor : "transparent"}`,
      borderRadius: 0,
    },
  }),
);

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <SectionTemplate {...props} data-anchor-section>
      {children}
    </SectionTemplate>
  );
};

export default Section;
