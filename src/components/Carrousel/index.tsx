import { JSX, useEffect, useRef, useState } from "react";
import { BoxProps } from "@mui/material/Box";
import { Container, Controls } from "./style";
import React from "react";

type CarrouselProps = React.PropsWithChildren<
  {
    config?: {
      gap?: number;
      width?: number;
      itensPerView?: number;
      fullWidth?: boolean;
    };
  } & BoxProps
>;

const Carrousel = ({
  children,
  config,
  ...props
}: CarrouselProps): JSX.Element => {
  const carrousel = useRef<HTMLDivElement | null>(null);

  const [gap, setGap] = useState(config?.gap ?? 0);
  const [width] = useState(config?.width ?? 50);
  const [itensPerView, setItensPerView] = useState(config?.itensPerView ?? 1);
  const [fullWidth] = useState(config?.fullWidth ?? false);

  const turnLeft = () => {
    if (carrousel.current) {
      const cardSize = fullWidth
        ? carrousel.current.clientWidth / itensPerView
        : width;
      carrousel.current.scrollLeft -= (cardSize + gap) * itensPerView;
    }
  };

  const turnRight = () => {
    if (carrousel.current) {
      const cardSize = fullWidth
        ? carrousel.current.clientWidth / itensPerView
        : width;
      carrousel.current.scrollLeft += (cardSize + gap) * itensPerView;
    }
  };

  useEffect(() => {
    if (carrousel.current) {
      carrousel.current.style.gap = gap.toString() + "px";
    }
  }, [carrousel, gap]);

  useEffect(() => {
    if (fullWidth) {
      if (!carrousel.current?.children) return;
      Array.from(carrousel.current?.children).forEach((child) => {
        (child as HTMLElement).style.width = "100%";
        setItensPerView(1);
        setGap(0);
      });
    }
  }, [fullWidth]);

  return (
    <>
      <Container ref={carrousel} {...props}>
        {children}
      </Container>
      <Controls>
        <span className="material-icons left" onClick={turnLeft}>
          arrow_back_ios_new
        </span>
        <span className="material-icons right" onClick={turnRight}>
          arrow_forward_ios
        </span>
      </Controls>
    </>
  );
};

export default Carrousel;
