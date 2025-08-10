import type { ReactNode } from "react";
import { Container, HeroCard, Image, CardButton } from "./styles";
import ImgCarousel from "../../../../assets/images/img-carousel.png";

interface CardProps {
  title: string;
  children: ReactNode;
  button?: string;
}

export function HeroCardSection({
  title,
  children,
  button,
}: CardProps): ReactNode {
  return (
    <>
      <Container>
        <HeroCard>
          <Image src={ImgCarousel} alt="lala" />
          <h2>{title}</h2>
          <p>{children}</p>
          {button && <CardButton>{button}</CardButton>}
        </HeroCard>
      </Container>
    </>
  );
}
