import SubTitle from "@components/SubTitle";
import { ContainerCard, Image, Text } from "./styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@components/Button";

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
        <Image src="assets/images/bike-anjo-kid.webp" />
        <SubTitle color={color}>{title}</SubTitle>
        <Text>{isMobile ? textMobile : textDesktop}</Text>
        <div className="content">
          {button && link && (
            <Button
              to={link}
              variantcolor="gray"
              fullWidthDesktop
              fullWidthMobile
              sx={{ height: "48px" }}
            >
              {button}
            </Button>
          )}
        </div>
      </ContainerCard>
    </>
  );
}
