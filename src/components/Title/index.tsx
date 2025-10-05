import { Typography, TypographyOwnProps } from "@mui/material";
import styled from "styled-components";
import { Colors } from "@colors";
import { JSX } from "react";

interface TitleContainerProps extends TypographyOwnProps {
  pink?: boolean;
  green?: boolean;
  color?: string;
  center?: boolean;
}

interface TitleProps
  extends TitleContainerProps,
    Omit<React.HTMLAttributes<HTMLParagraphElement>, "children" | "color"> {
  children: string;
}

const TitleContainer = styled(Typography)<TitleContainerProps>(
  ({ theme, pink, green, color, center }) => ({
    color: color ? color : Colors["Pink_50"],
    fontWeight: 600,
    display: "flex",

    ...(pink && { color: "var(--mui-palette-Pink_50)" }),
    ...(green && !pink && { color: "var(--mui-palette-Green_70)" }),

    [theme.breakpoints.up("xs")]: {
      fontSize: "24px",
      lineHeight: "120%",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "0px 16px",
    },

    [theme.breakpoints.up("lg")]: {
      padding: "0px",
      fontSize: "40px",
      lineHeight: "120%",
      alignItems: "flex-start",
      margin: center ? "0px auto" : "unset",
      width: "fit-content",
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
