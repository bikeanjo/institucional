import React, { useEffect, PropsWithChildren } from "react";

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const imagePaths = [
      "/assets/header/ajude-como-instituicao.webp",
      "/assets/header/bike-anjas.webp",
      "/assets/header/bike-anjo-na-midia.webp",
      "/assets/header/como-funciona.webp",
      "/assets/header/como-nos-ajudamos.webp",
      "/assets/header/contato.webp",
      "/assets/header/dia-mundial-sem-carro.webp",
      "/assets/header/dicas-para-bike-anjo.webp",
      "/assets/header/dicas-para-pedalar.webp",
      "/assets/header/doe.webp",
      "/assets/header/escola-bike-anjo.webp",
      "/assets/header/faca-nosso-curso.webp",
      "/assets/header/header-image.webp",
      "/assets/header/iniciativas.webp",
      "/assets/header/pedala-ou-repassa.webp",
      "/assets/header/quem-somos.webp",
      "/assets/header/redes-sociais.webp",
      "/assets/header/voluntariado.webp",
      "/assets/images/EBA/eba.webp",
      "/assets/images/BikeAnjas/bike-anjas-main.webp",
      "/assets/images/PedalaOuRepassa/pedala-ou-repassa.webp",
      "/assets/images/WhoWeAre/what-is-bike-anjo.webp",
      "/assets/images/Home/placeholder/sobre.webp",
    ];
    Object.values(imagePaths).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return <>{children}</>;
};

export default AppWrapper;
