import { SubTitle, Button } from "@components";
import { ContainerCard, Image, Text } from "./styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface CardProps {
  title: string;
  textDesktop: string;
  textMobile: string;
  button?: string;
  link?: string;
  color?: string;
  image: string;
}
export function Card({
  title,
  textDesktop,
  textMobile,
  button,
  link,
  color,
  image,
}: CardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <ContainerCard color={color}>
        <Image src={image} alt={title} />
        <SubTitle color={color} sx={{ fontWeight: "bold" }}>
          {title}
        </SubTitle>
        <Text>{isMobile ? textMobile : textDesktop}</Text>
        <div className="content">
          {button && (
            <Button
              to={link || "#"}
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
