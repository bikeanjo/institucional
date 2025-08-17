import type { ReactNode } from "react";
import { ContainerCard, Title, Image, Text, CardButton } from "./styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface CardProps {
  title: string;
  textDesktop: string;
  textMobile: string;
  button?: string;
}
export function Card({
  title,
  textDesktop,
  textMobile,
  button,
}: CardProps): ReactNode {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <ContainerCard>
        <Title>{title}</Title>
        <Image />
        <Text>{isMobile ? textMobile : textDesktop}</Text>
        <div className="content">
          {button && <CardButton>{button}</CardButton>}
        </div>
      </ContainerCard>
    </>
  );
}
