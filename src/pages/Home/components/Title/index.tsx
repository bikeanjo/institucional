import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { JSX } from "react";

interface TitleContainerProps {
  carrousel?: boolean;
  pink?: boolean;
  green?: boolean;
}

interface TitleProps
  extends TitleContainerProps,
    Omit<React.HTMLAttributes<HTMLParagraphElement>, "children" | "color"> {
  children: string;
}

const TitleContainer = styled(Typography)<TitleContainerProps>(
  ({ theme, carrousel, pink, green, color }) => ({
    color: color ? color : "var(--mui-palette-title-main)",
    fontWeight: 600,
    textAlign: "center",

    ...(pink && { color: "#E1216D" }),
    ...(green && !pink && { color: "#4D7A18" }),

    [theme.breakpoints.up("xs")]: {
      fontSize: carrousel ? "24px" : "32px",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "64px",
    },
  }),
);

const Title = ({ children, ...props }: TitleProps): JSX.Element => {
  return (
    <TitleContainer {...props} data-anchor-link>
      {children}
    </TitleContainer>
  );
};

export default Title;
