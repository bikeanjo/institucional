import { Sub, Title, Wrapper } from "./styles";
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

interface ShareProps {
  title: string;
  sub: string;
}

const iconStyle = {
  width: 48,
  height: 48,
  backgroundColor: "#656565",
  color: "#c3c3c3",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Share({ title, sub }: ShareProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Sub>{sub}</Sub>
      <Stack direction="row" spacing={2} justifyContent="center">
        <a
          href="https://wa.me/seunumero"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box sx={iconStyle}>
            <WhatsAppIcon />
          </Box>
        </a>

        <a
          href="https://t.me/seucanal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box sx={iconStyle}>
            <SendIcon />
          </Box>
        </a>

        <a
          href="https://instagram.com/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box sx={iconStyle}>
            <InstagramIcon />
          </Box>
        </a>

        <a
          href="https://twitter.com/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box sx={iconStyle}>
            <XIcon />
          </Box>
        </a>

        <a
          href="https://facebook.com/seupagina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box sx={iconStyle}>
            <FacebookIcon />
          </Box>
        </a>

        <a
          href="https://youtube.com/@seucanal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box sx={iconStyle}>
            <YouTubeIcon />
          </Box>
        </a>

        <a
          href="https://linkedin.com/in/seuperfil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box sx={iconStyle}>
            <LinkedInIcon />
          </Box>
        </a>

        <a href="mailto:contato@seusite.com">
          <Box sx={iconStyle}>
            <EmailIcon />
          </Box>
        </a>

        <a href="https://seusite.com" target="_blank" rel="noopener noreferrer">
          <Box sx={iconStyle}>
            <LinkIcon />
          </Box>
        </a>
      </Stack>
    </Wrapper>
  );
}
