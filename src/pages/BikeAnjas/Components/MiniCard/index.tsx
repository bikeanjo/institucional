import type { JSX } from "react";
import { Card } from "./styles";
import { Button } from "@components";

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

        <div className="content">
          <p>{children}</p>
        </div>
        {!secondary && (
          <Button
            variantcolor="gray"
            fullWidthDesktop
            fullWidthMobile
            sx={{ height: "48px" }}
          >
            {textButton}
          </Button>
        )}
      </Card>
    </>
  );
}
