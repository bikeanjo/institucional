import type { JSX } from "react";
import { Container, HeroCard, Image, CardButton } from "./styles";

interface CardProps {
  title: string;
  children: JSX.Element;
  button?: string;
}

export function HeroCardSection({
  title,
  children,
  button,
}: CardProps): JSX.Element {
  return (
    <>
      <Container>
        <HeroCard>
          <Image src={"/assets/images/img-carousel.png"} alt="lala" />
          <h2>{title}</h2>
          <p>{children}</p>
          {button && <CardButton>{button}</CardButton>}
        </HeroCard>
      </Container>
    </>
  );
}
