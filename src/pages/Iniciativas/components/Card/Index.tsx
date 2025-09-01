import SubTitle from "@components/SubTitle";
import { ContainerCard, Image, Text, CardButton } from "./styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "../../../Layout/Components/Link";

interface CardProps {
  title: string;
  textDesktop: string;
  textMobile: string;
  button?: string;
  link?: string;
  color?: string;
}
export function Card({
  title,
  textDesktop,
  textMobile,
  button,
  link,
  color,
}: CardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <ContainerCard color={color}>
        <Image src="assets/images/bike-anjo-kid.jpg" />
        <SubTitle color={color}>{title}</SubTitle>
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
