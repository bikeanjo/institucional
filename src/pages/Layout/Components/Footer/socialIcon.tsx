import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { Box } from "@mui/material";

interface SocialIconProps {
  icon: IconDefinition;
  size?: number;
}

export const SocialIcon = ({ icon, size = 20 }: SocialIconProps) => (
  <Box
    sx={{
      border: "2px solid",
      borderRadius: "50%",
      width: "33.6px",
      height: "33.6px",
      gap: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#656565",
    }}
  >
    <FontAwesomeIcon icon={icon} style={{ fontSize: size }} />
  </Box>
);
