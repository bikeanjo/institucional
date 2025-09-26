import React, { useEffect, PropsWithChildren } from "react";

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const imagePaths = [
      "/assets/header/ajude-como-instituicao.webp",
      "/assets/header/bike-anjas.webp",
      "/assets/header/bike-anjo-na-midia.webp",
      "/assets/header/como-funciona.jpg",
      "/assets/header/como-nos-ajudamos.jpg",
      "/assets/header/contato.jpg",
      "/assets/header/dia-mundial-sem-carro.jpg",
      "/assets/header/dicas-para-bike-anjo.jpg",
      "/assets/header/dicas-para-pedalar.jpg",
      "/assets/header/doe.jpg",
      "/assets/header/escola-bike-anjo.webp",
      "/assets/header/faca-nosso-curso.jpg",
      "/assets/header/faca-nosso-curso.webp",
      "/assets/header/header-image.webp",
      "/assets/header/iniciativas.jpg",
      "/assets/header/pedala-ou-repassa.webp",
      "/assets/header/quem-somos.webp",
      "/assets/header/redes-sociais.webp",
      "/assets/header/voluntariado.webp",
      "/assets/images/EBA/eba.jpg",
      "/assets/images/BikeAnjas/bike-anjas-main.png",
      "/assets/images/PedalaOuRepassa/pedala-ou-repassa.jpg",
      "/assets/images/WhoWeAre/what-is-bike-anjo.png",
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
