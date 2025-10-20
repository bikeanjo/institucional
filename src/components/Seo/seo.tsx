import { Helmet } from "react-helmet";
import type { FC } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const SEO: FC<SEOProps> = ({
  title = "Bike Anjo | Conectando pessoas por meio da bicicleta 🚴‍♀️",
  description = "Na plataforma você encontra ajuda para aprender e praticar suas pedaladas, recomendações de rotas, acompanhamento no trânsito, dicas e muito mais.",
  url = "https://2025.bikeanjo.org",
  image = "/bikeanjo.svg",
}) => {
  return (
    <Helmet>
      {/* Meta padrão */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="bike anjo, bicicleta, voluntariado, ciclismo, mobilidade urbana, aprender a pedalar, pedaladas, pedalada, acompanhamento no trânsito, dicas de ciclismo, rotas de bicicleta, comunidade ciclista, sustentabilidade, transporte sustentável, saúde e bem-estar, eventos de ciclismo, educação ciclística"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Bike Anjo" />
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn, Telegram etc) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />

      {/* Links das redes sociais */}
      <meta property="article:publisher" content="https://www.facebook.com/bikeanjo" />
      <meta property="article:author" content="https://www.linkedin.com/company/bikeanjo" />
      <meta name="telegram" content="https://t.me/bikeanjo" />
      <meta name="youtube" content="https://www.youtube.com/@bikeanjo" />
      <meta name="instagram" content="https://www.instagram.com/bikeanjo" />
      <meta name="x" content="https://x.com/bikeanjo" />
      <meta name="facebook" content="https://www.facebook.com/bikeanjo" />
      <meta name="linkedin" content="https://linkedin.com/company/bikeanjo" />
      <meta name="email" content="contato@bikeanjo.com" />
    </Helmet>
  );
};

export default SEO;
