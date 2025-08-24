import { ContainerCard, Title, Image, Text, CardButton } from "./styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  textDesktop: string;
  textMobile: string;
  button?: string;
  link?: string;
}
export function Card({
  title,
  textDesktop,
  textMobile,
  button,
  link,
}: CardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <ContainerCard>
        <Title>{title}</Title>
        <Image />
        <Text>{isMobile ? textMobile : textDesktop}</Text>
        <div className="content">
          {button && link && (
            <Link to={link}>
              <CardButton>{button}</CardButton>
            </Link>
          )}
        </div>
      </ContainerCard>
    </>
  );
}
