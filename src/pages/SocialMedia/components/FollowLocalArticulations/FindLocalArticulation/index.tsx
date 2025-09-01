import {
  Button,
  CityCard,
  CityList,
  FilterInput,
  IconTextWrapper,
  Info,
  SocialMediaWrapper,
  Tag,
  TagsWrapper,
  Title,
} from "./styles";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Box } from "@mui/material";
import { Colors } from "../../../../../styles/tokens/colors";

const mockCities = [
  {
    name: "ABC",
    state: "São Paulo",
    region: "Sudeste",
    instagram: "@bikeanjoabc",
    facebook: "EBA.ABC",
    location: "Rua das Flores, 123",
    date: "01/01/2023",
    time: "10:00",
    registration: "https://example.com/registration-abc",
    url: "/assets/icons/sao-paulo.png",
  },
  {
    name: "Aracaju",
    state: "Sergipe",
    region: "Nordeste",
    instagram: "@bikeanjosergipe",
    facebook: "BikeAnjoSergipe",
    location: "Rua das Flores, 123",
    date: "01/01/2023",
    time: "10:00",
    registration: "https://example.com/registration-abc",
    url: "/assets/icons/aracaju.png",
  },
  {
    name: "Belém",
    state: "Pará",
    region: "Norte",
    instagram: "@bikeanjobelem",
    facebook: "BikeAnjoBelem",
    location: "Rua das Flores, 123",
    date: "01/01/2023",
    time: "10:00",
    registration: "https://example.com/registration-abc",
    url: "/assets/icons/abc.png",
  },
  {
    name: "Belo Horizonte",
    state: "Minas Gerais",
    region: "Sudeste",
    instagram: "@bikeanjobh",
    facebook: "BikeAnjoBH",
    location: "Rua das Flores, 123",
    date: "01/01/2023",
    time: "10:00",
    registration: "https://example.com/registration-abc",
    url: "/assets/icons/abc.png",
  },
  {
    name: "Brasília",
    state: "Distrito Federal",
    region: "Centro-Oeste",
    instagram: "@bikeanjodf",
    facebook: "bikeanjodf",
    location: "Rua das Flores, 123",
    date: "01/01/2023",
    time: "10:00",
    registration: "https://example.com/registration-abc",
    url: "/assets/icons/abc.png",
  },
  {
    name: "Campina Grande",
    state: "Paraíba",
    region: "Nordeste",
    instagram: "@bikeanjocg",
    facebook: "bikeanjocg",
    location: "Rua das Flores, 123",
    date: "01/01/2023",
    time: "10:00",
    registration: "https://example.com/registration-abc",
    url: "/assets/icons/abc.png",
  },
  {
    name: "Campinas",
    state: "São Paulo",
    region: "Sudeste",
    instagram: "@bikeanjocampinas",
    facebook: "bikeanjocampinas",
    location: "Rua das Flores, 123",
    date: "01/01/2023",
    time: "10:00",
    registration: "https://example.com/registration-abc",
    url: "/assets/icons/abc.png",
  },
  {
    name: "Caruaru",
    state: "Pernambuco",
    region: "Nordeste",
    instagram: "@Pernambucobikeanjo",
    facebook: "Pernambucobikeanjo",
    location: "Rua das Flores, 123",
    date: "01/01/2023",
    time: "10:00",
    registration: "https://example.com/registration-abc",
    url: "/assets/icons/abc.png",
  },
  {
    name: "Contagem",
    state: "Minas Gerais",
    region: "Sudeste",
    instagram: "@movecultura",
    facebook: "movecultura",
    location: "Rua das Flores, 123",
    date: "01/01/2023",
    time: "10:00",
    registration: "https://example.com/registration-abc",
    url: "/assets/icons/abc.png",
  },
];

export default function FindLocalArticulation() {
  const [search, setSearch] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("Todas");
  const [expandedCity, setExpandedCity] = useState<string | null>(null);
  const regions = [
    "Todas",
    "Norte",
    "Nordeste",
    "Centro-Oeste",
    "Sudeste",
    "Sul",
  ];

  const filteredCities = mockCities.filter((city) => {
    const matchesRegion =
      selectedRegion === "Todas" || city.region === selectedRegion;
    const matchesSearch = city.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const toggleCity = (cityName: string) => {
    setExpandedCity((prev) => (prev === cityName ? null : cityName));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        margin: "40px 0px",
        border: `2px solid ${Colors["G-Grey-30"]}`,
        borderRadius: "16px",
        padding: "24px",
        backgroundColor: Colors["G-Grey-10"],
      }}
    >
      <Title>Encontre uma Articulação Local</Title>
      <TagsWrapper>
        {regions.map((region) => (
          <Tag
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={selectedRegion === region ? "active" : ""}
          >
            {region}
          </Tag>
        ))}
      </TagsWrapper>
      <FilterInput
        type="text"
        placeholder="Digite o nome da cidade..."
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />

      <CityList>
        {filteredCities.map((city) => {
          const isExpanded = expandedCity === city.name;

          return (
            <CityCard key={city.name} expanded={isExpanded}>
              <div className="card-content">
                <img src={city.url} alt={`Logo de ${city.name}`} />
                <div className="card-body">
                  <h5>{city.state}</h5>
                  <h4>{city.name}</h4>
                  <SocialMediaWrapper>
                    <p>
                      Instagram:{" "}
                      <span>
                        <a
                          href={`https://www.instagram.com/${city.instagram.replace(
                            "@",
                            "",
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {city.instagram}
                        </a>
                      </span>
                    </p>
                    <p>
                      Facebook:{" "}
                      <span>
                        <a
                          href={`https://www.facebook.com/${city.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {city.facebook}
                        </a>
                      </span>
                    </p>
                  </SocialMediaWrapper>
                  <Button
                    onClick={() => toggleCity(city.name)}
                    expanded={isExpanded}
                  >
                    {isExpanded ? (
                      <>
                        <span>Info</span>
                        <IconTextWrapper>
                          Mostrar menos <ExpandLessIcon />
                        </IconTextWrapper>
                      </>
                    ) : (
                      "+ info"
                    )}
                  </Button>

                  {isExpanded && (
                    <Info>
                      <p>
                        <b>Local:</b> {city.location}
                      </p>
                      <p>
                        <b>Data:</b> {city.date}
                      </p>
                      <p>
                        <b>Horário:</b> {city.time}
                      </p>
                      <p>
                        <b>Inscrições:</b> {city.registration}
                      </p>
                    </Info>
                  )}
                </div>
              </div>
            </CityCard>
          );
        })}
      </CityList>
    </Box>
  );
}
