import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { Box } from "@mui/material";
import { Colors } from "../../../../styles/tokens/colors";
import { Link } from "react-router-dom";

interface SocialIconProps {
  icon: IconDefinition;
  url: string;
  size?: number;
  external?: boolean;
  title?: string;
}

export const SocialIcon = ({
  icon,
  size = 20,
  url,
  external,
  title,
}: SocialIconProps) => (
  <Link
    to={url}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    aria-label={title}
  >
    <Box
      sx={{
        border: "2px solid",
        borderRadius: "50%",
        width: "33.6px",
        height: "33.6px",
        gap: "10px",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: Colors["Green_70"],
      }}
    >
      <FontAwesomeIcon icon={icon} style={{ fontSize: size }} />
    </Box>
  </Link>
);
