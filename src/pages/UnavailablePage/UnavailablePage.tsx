import { Box, Typography, Link } from "@mui/material";
import { Container, Text } from "@components";
import { Colors } from "@colors";
import { BikerIcon } from "@components/Icons/Biker";

const UnavailablePage: React.FC = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "630px" },
          gap: "32px",
          mx: "auto",
          my: 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            alignItems: "center",
            gap: "24px",
            justifyContent: { xs: "center", md: "start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <BikerIcon width={79} height={72} />
          <Typography
            color={Colors["Pink_50"]}
            fontWeight="700"
            fontSize={{ xs: "32px", lg: "56px" }}
            whiteSpace="nowrap"
          >
            Enchendo o Pneu...
          </Typography>
        </Box>

        <Text fontSize={{ xs: "18px", lg: "24px" }}>
          A página que você procurou está fora do ar no momento. Estamos
          calibrando tudo para que você tenha a melhor experiência possível.
        </Text>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: { xs: "center", lg: "flex-start" },
            alignItems: "center",
            gap: "4px",
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
            }}
          >
            Enquanto isso, que tal voltar para a
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
            }}
          >
            <Link
              href="/"
              color={Colors["Green_70"]}
              fontWeight="700"
              sx={{
                textDecoration: "underline",
              }}
            >
              página inicial?
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
export default UnavailablePage;
