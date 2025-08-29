import { Box, Typography, Button } from "@mui/material";
import type { JSX } from "react";

interface SocialCardProps {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export function SocialCard({
  icon,
  title,
  subtitle,
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
        backgroundColor: "#d9d9d9",
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
          backgroundColor: "#656565",
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
            color: "#606060",
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
              backgroundColor: "#fff",
              padding: "8px 24px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "100%",
              color: "#486284",
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
