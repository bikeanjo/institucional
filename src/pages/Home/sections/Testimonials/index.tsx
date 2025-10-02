import type { JSX } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Colors } from "../../../../styles/tokens/colors";
import Section from "@components/Section";

function Testimonials(): JSX.Element {
  return (
    <Section
      center
      backgroundColor={Colors["Green-20"]}
      borderColor={Colors["Green-70"]}
    >
      <Title variant="h2" color={Colors["Green-70"]}>
        Depoimentos
      </Title>
      <SubTitle>
        Histórias reais de quem já transformou sua relação com a bicicleta.
      </SubTitle>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "start", md: "center" },
          gap: { xs: 1, md: 4 },
          width: { xs: "350px", md: "800px", lg: "1030px" },
          overflow: "hidden",
        }}
      >
        <Card
          sx={{
            width: { xs: 299, lg: 499 },
            height: { xs: 308, lg: 249 },
            border: `2px solid ${Colors["Green-70"]}`,
            marginTop: 5,
            padding: "21px 30px",
            borderRadius: 2,
            display: "flex",
            flexShrink: "0",
            flexDirection: "column",
            boxShadow: "none",
          }}
        >
          <CardContent sx={{ padding: 0, marginBottom: 4 }}>
            <Typography
              sx={{
                color: Colors["G-Grey-100"],
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae
              ligula sed urna sit sagittis interdum a. Blandit mattis mattis
              lobortis orci. Facilisis dui sagittis tempor egestas pellentesque
              eu maecenas. Risus lectus nisl.
            </Typography>
          </CardContent>
          <CardActions sx={{ height: "100%", padding: 0 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <img
                src={"/assets/images/photoPlaceholder/juliana.webp"}
                alt="julianaImage"
                title="julianaImage"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  border: `2px solid ${Colors["Blue-60"]}`,
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1,
                    color: Colors["Blue-60"],
                    margin: "2px 0px",
                  }}
                >
                  Juliana, São Paulo
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: 1,
                    color: Colors["G-Grey-100"],
                    margin: "10px 0px",
                  }}
                >
                  Atendida
                </Typography>
              </Box>
            </Box>
          </CardActions>
        </Card>
        <Card
          sx={{
            width: { xs: 299, lg: 499 },
            height: { xs: 308, lg: 249 },
            border: `2px solid ${Colors["Green-70"]}`,
            marginTop: 5,
            padding: "21px 30px",
            borderRadius: 2,
            display: "flex",
            flexShrink: "0",
            flexDirection: "column",
            boxShadow: "none",
          }}
        >
          <CardContent sx={{ padding: 0, marginBottom: 4 }}>
            <Typography
              sx={{
                color: Colors["G-Grey-100"],
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae
              ligula sed urna sit sagittis interdum a. Blandit mattis mattis
              lobortis orci. Facilisis dui sagittis tempor egestas pellentesque
              eu maecenas. Risus lectus nisl.
            </Typography>
          </CardContent>
          <CardActions sx={{ height: "100%", padding: 0 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <img
                src={"/assets/images/photoPlaceholder/jualiana2.webp"}
                alt="juliana2Image"
                title="juliana2Image"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  border: `2px solid ${Colors["Orange-50"]}`,
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1,
                    color: Colors["Orange-50"],
                    margin: "2px 0px",
                  }}
                >
                  Juliana, São Paulo
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: 1,
                    color: Colors["G-Grey-100"],
                    margin: "10px 0px",
                  }}
                >
                  Atendida
                </Typography>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </Section>
  );
}

export default Testimonials;
