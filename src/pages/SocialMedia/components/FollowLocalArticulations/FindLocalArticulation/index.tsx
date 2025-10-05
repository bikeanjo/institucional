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
import { Colors } from "@colors";

interface Articulation {
  id: string;
  name: string;
  state: string;
  region: string;
  instagram: string;
  facebook: string;
  location: string;
  date: string;
  time: string;
  registration: string;
  url: string;
  coords: [number, number];
}

interface FindLocalArticulationProps {
  articulations?: Articulation[];
  setSelectedCoords?: React.Dispatch<
    React.SetStateAction<[number, number] | null>
  >;
}

const defaultArticulations: Articulation[] = [];
const noop = () => {};

export default function FindLocalArticulation({
  articulations = defaultArticulations,
  setSelectedCoords = noop,
}: FindLocalArticulationProps) {
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

  const filteredCities = articulations.filter((art) => {
    const matchesRegion =
      selectedRegion === "Todas" || art.region === selectedRegion;
    const matchesSearch = art.name.toLowerCase().includes(search.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const toggleCity = (cityName: string) => {
    setExpandedCity((prev) => (prev === cityName ? null : cityName));
  };

  const goToCity = (coords: [number, number]) => {
    setSelectedCoords(null);
    setTimeout(() => setSelectedCoords([...coords]), 0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        margin: "40px 0px",
        border: `2px solid ${Colors["G_Grey_30"]}`,
        borderRadius: "16px",
        padding: "24px",
        backgroundColor: Colors["G_Grey_10"],
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
        {filteredCities.map((art) => {
          const isExpanded = expandedCity === art.name;

          return (
            <CityCard key={art.id} expanded={isExpanded}>
              <div className="card-content">
                <img src={art.url} alt={`Logo de ${art.name}`} />
                <div className="card-body">
                  <h5
                    style={{ cursor: "pointer" }}
                    onClick={() => goToCity(art.coords)}
                  >
                    {art.state}
                  </h5>
                  <h4
                    style={{ cursor: "pointer" }}
                    onClick={() => goToCity(art.coords)}
                  >
                    {art.name}
                  </h4>

                  <SocialMediaWrapper>
                    <p>
                      Instagram:{" "}
                      <span>
                        <a
                          href={`https://www.instagram.com/${art.instagram.replace(
                            "@",
                            "",
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {art.instagram}
                        </a>
                      </span>
                    </p>
                    <p>
                      Facebook:{" "}
                      <span>
                        <a
                          href={`https://www.facebook.com/${art.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {art.facebook}
                        </a>
                      </span>
                    </p>
                  </SocialMediaWrapper>

                  <Button
                    onClick={() => toggleCity(art.name)}
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
                        <b>Local:</b> {art.location}
                      </p>
                      <p>
                        <b>Data:</b> {art.date}
                      </p>
                      <p>
                        <b>Horário:</b> {art.time}
                      </p>
                      <p>
                        <b>Inscrições:</b> {art.registration}
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
