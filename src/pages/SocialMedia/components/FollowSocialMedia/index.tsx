import { Sub, Title, Wrapper } from "./styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Stack } from "@mui/material";
import { SocialCard } from "./SocialMediaCard";

interface SocialMediaProps {
  title: string;
  sub: string;
}

export default function FollowSocialMedia({ title, sub }: SocialMediaProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Sub>{sub}</Sub>
      <Stack spacing={3} sx={{ alignItems: "center", mx: "auto" }}>
        <SocialCard
          icon={<InstagramIcon sx={{ fontSize: 80, color: "#c3c3c3" }} />}
          title="Instagram"
          subtitle="Aqui você encontra a agenda de eventos, registros das atividades, campanhas, dicas de pedal."
          onClick={() => window.open("https://instagram.com", "_blank")}
        />

        <SocialCard
          icon={<FacebookIcon sx={{ fontSize: 80, color: "#c3c3c3" }} />}
          title="Facebook"
          subtitle="Acompanhe nossas ações, fotos, vídeos, eventos, notícias da rede e conteúdos que fortalecem quem já pedala e quem está começando agora. "
          onClick={() => window.open("https://facebook.com", "_blank")}
        />

        <SocialCard
          icon={<LinkedInIcon sx={{ fontSize: 80, color: "#c3c3c3" }} />}
          title="LinkedIn"
          subtitle="Conecte-se à Bike Anjo no LinkedIn e acompanhe parcerias, eventos corporativos, cases de impacto e insights em mobilidade urbana. Inspirando quem já pedala e quem está começando!"
          onClick={() => window.open("https://linkedin.com", "_blank")}
        />

        <SocialCard
          icon={<YouTubeIcon sx={{ fontSize: 80, color: "#c3c3c3" }} />}
          title="YouTube"
          subtitle="Quer aprender mais sobre mobilidade, segurança e dicas de pedal? No nosso canal você encontra vídeos educativos, tutoriais e histórias que inspiram e ensinam. Dá o play!"
          onClick={() => window.open("https://youtube.com", "_blank")}
        />
      </Stack>
    </Wrapper>
  );
}
