import type { JSX } from "react";
import { Card, Image, AcessButton } from "./styles";

interface MiniCardProps {
  title: string;
  children: JSX.Element;
  textButton?: string;
  secondary?: boolean;
}

export function MiniCard({
  title,
  children,
  textButton,
  secondary = false,
}: MiniCardProps): JSX.Element {
  return (
    <>
      <Card $secondary={secondary}>
        <div className="titleCard">
          <h2>{title}</h2>
        </div>

        <Image />

        <div className="content">
          <p>{children}</p>
        </div>
        {!secondary && <AcessButton>{textButton}</AcessButton>}
      </Card>
    </>
  );
}
