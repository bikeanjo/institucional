import React, { useEffect, PropsWithChildren } from "react";

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const imagePaths = [
      "/assets/header/ajude-como-instituicao.webp",
      "/assets/header/bika-anjas.webp",
      "/assets/header/bike-anjo-na-midia.webp",
      "/assets/header/como-funciona.webp",
      "/assets/header/dicas-para-bike-anjo.webp",
      "/assets/header/doe.webp",
      "/assets/header/escola-bike-anjo.webp",
      "/assets/header/faca-nosso-curso.webp",
      "/assets/header/header-image.webp",
      "/assets/header/pedala-ou-repassa.webp",
      "/assets/header/quem-somos.webp",
      "/assets/header/redes-sociais.webp",
      "/assets/header/voluntariado.webp",
    ];
    Object.values(imagePaths).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return <>{children}</>;
};

export default AppWrapper;
