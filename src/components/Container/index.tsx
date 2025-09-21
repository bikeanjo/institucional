import { Box } from "@mui/material";
import styled from "styled-components";

interface ContainerTemplateProps {
  inline?: boolean;
}

interface ContainerProps
  extends ContainerTemplateProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "inline"> {
  children: React.ReactNode;
}

const ContainerTemplate = styled(Box)<ContainerTemplateProps>(
  ({ theme, inline }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "40px auto",
    position: "relative",
    marginTop: "40px",
    gap: "48px",
    padding: "20px",

    [theme.breakpoints.up("lg")]: {
      flexDirection: inline ? "row" : "column",
      width: "100%",
      padding: "0px 96px",
      marginTop: "80px",
      gap: "32px",
    },
  }),
);

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <ContainerTemplate {...props} data-anchor-section>
      {children}
    </ContainerTemplate>
  );
};

export default Container;
