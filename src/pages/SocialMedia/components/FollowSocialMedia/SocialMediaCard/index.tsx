import { Box, Typography, Button } from "@mui/material";
import type { JSX } from "react";
import { Colors } from "../../../../../styles/tokens/colors";

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
        border: `2px solid ${Colors["G-Grey-30"]}`,
        backgroundColor: Colors["G-Grey-10"],
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
          <Button
            sx={{
              backgroundColor: Colors["G-Grey-80"],
              padding: "8px 24px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "100%",
              color: Colors["G-White"],
              textTransform: "none",
            }}
            onClick={onClick}
          >
            Acesse
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
