import { Box, Typography } from "@mui/material";
import type { JSX } from "react";
import { Colors } from "../../../../../styles/tokens/colors";
import Button from "@components/Button";

interface SocialCardProps {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  color?: string;
  onClick?: () => void;
}

export function SocialCard({
  icon,
  title,
  subtitle,
  color,
  onClick,
}: SocialCardProps) {
  return (
    <Box
      sx={{
        maxWidth: "750px",
        height: "auto",
        padding: "32px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        border: `2px solid ${Colors["G_Grey_30"]}`,
        backgroundColor: Colors["G_Grey_10"],
      }}
    >
      <Box
        sx={{
          width: "120px",
          height: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: `5px solid ${color}`,
          backgroundColor: Colors["G-Gray-30"],
          mr: "32px",
        }}
      >
        {icon}
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "140%",
            color: color,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "125%",
            color: "#000",
            mt: "8px",
            mb: "24px",
          }}
        >
          {subtitle}
        </Typography>
        <Box>
          <Button variantcolor="gray" onClick={onClick} sx={{ height: "48px" }}>
            Acesse
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
