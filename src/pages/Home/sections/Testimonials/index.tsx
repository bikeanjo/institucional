import { useState, useEffect, type JSX } from "react";
import Title from "../../components/Title";
import SubTitle from "../../components/Subtitle";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Colors } from "@colors";
import { Section } from "@components";
import { loadTextContent } from "@/textContent";

type Testimonial = {
  id: number;
  text: string;
  name: string;
  role: string;
  imageUrl: string;
  borderColor: keyof typeof Colors;
};

function Testimonials(): JSX.Element {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    void loadTextContent("testimonials").then((data) =>
      setTestimonials(data as Testimonial[]),
    );
  }, []);

  // TODO: Layout currently shows only 2 testimonials.
  // Consider adding carousel/scroll for multiple testimonials in the future.
  return (
    <Section
      center
      backgroundColor={Colors["Green_20"]}
      borderColor={Colors["Green_70"]}
    >
      <Title variant="h2" color={Colors["Green_70"]}>
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
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            sx={{
              width: { xs: 299, lg: 499 },
              height: { xs: 308, lg: 249 },
              border: `2px solid ${Colors["Green_70"]}`,
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
                  color: Colors["G_Grey_100"],
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                {testimonial.text}
              </Typography>
            </CardContent>
            <CardActions sx={{ height: "100%", padding: 0 }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  title={testimonial.name}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    border: `2px solid ${Colors[testimonial.borderColor]}`,
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: 1,
                      color: Colors[testimonial.borderColor],
                      margin: "2px 0px",
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: 1,
                      color: Colors["G_Grey_100"],
                      margin: "10px 0px",
                    }}
                  >
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Section>
  );
}

export default Testimonials;
