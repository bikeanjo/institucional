import { Box, Stack } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LinkIcon from "@mui/icons-material/Link";
import { Title, SubTitle, Section } from "@components";
import { Colors } from "@colors";

interface ShareProps {
  title: string;
  sub: string;
}

const iconStyle = {
  width: 48,
  height: 48,
  color: Colors["Green_70"],
  border: `2px solid ${Colors["Green_70"]}`,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Share({ title, sub }: ShareProps) {
  return (
    <Section>
      <Title>{title}</Title>
      <SubTitle>{sub}</SubTitle>
      <Stack direction="row" spacing={2} justifyContent="center">
        <a
          href="https://wa.me/seunumero"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Entrar em contato pelo WhatsApp"
          title="WhatsApp"
        >
          <Box sx={iconStyle}>
            <WhatsAppIcon />
          </Box>
        </a>

        <a
          href="https://t.me/bikeanjo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Entrar em contato pelo Telegram"
          title="Telegram"
        >
          <Box sx={iconStyle}>
            <SendIcon />
          </Box>
        </a>

        <a
          href="https://instagram.com/bikeanjo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar nosso perfil no Instagram"
          title="Instagram"
        >
          <Box sx={iconStyle}>
            <InstagramIcon />
          </Box>
        </a>

        <a
          href="https://x.com/bikeanjo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar nosso perfil no X"
          title="X"
        >
          <Box sx={iconStyle}>
            <XIcon />
          </Box>
        </a>

        <a
          href="https://facebook.com/bikeanjo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar nossa página no Facebook"
          title="Facebook"
        >
          <Box sx={iconStyle}>
            <FacebookIcon />
          </Box>
        </a>

        <a
          href="https://youtube.com/bikeanjo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar nosso canal no YouTube"
          title="YouTube"
        >
          <Box sx={iconStyle}>
            <YouTubeIcon />
          </Box>
        </a>

        <a
          href="https://linkedin.com/company/bikeanjo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar nosso perfil no LinkedIn"
          title="LinkedIn"
        >
          <Box sx={iconStyle}>
            <LinkedInIcon />
          </Box>
        </a>

        <a
          href="mailto:contato@bikeanjo.com"
          aria-label="Enviar e-mail para a Bike Anjo"
          title="E-mail"
        >
          <Box sx={iconStyle}>
            <EmailIcon />
          </Box>
        </a>

        <a
          href="https://bikeanjo.org"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar nosso site oficial"
          title="Site"
        >
          <Box sx={iconStyle}>
            <LinkIcon />
          </Box>
        </a>
      </Stack>
    </Section>
  );
}
