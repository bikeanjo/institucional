import {
  Button,
  CityCard,
  CityList,
  FilterInput,
  IconTextWrapper,
  Info,
  InputWrapper,
  SocialMediaWrapper,
  StyledSearchIcon,
  Tag,
  TagsWrapper,
  Title,
} from "./styles";
import { useState } from "react";
import { Box } from "@mui/material";
import { Colors } from "@colors";
import { ChevronLeft } from "@mui/icons-material";

interface LocalOrganization {
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
  localOrg?: LocalOrganization[];
  setSelectedCoords?: React.Dispatch<
    React.SetStateAction<[number, number] | null>
  >;
}

const defaultLocalOrg: LocalOrganization[] = [];
const noop = () => {};

export default function FindLocalArticulation({
  localOrg = defaultLocalOrg,
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

  const filteredCities = localOrg.filter((org) => {
    const matchesRegion =
      selectedRegion === "Todas" || org.region === selectedRegion;
    const matchesSearch = org.name.toLowerCase().includes(search.toLowerCase());
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

      <InputWrapper>
        <StyledSearchIcon />
        <FilterInput
          type="text"
          placeholder="Digite o nome da cidade..."
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </InputWrapper>

      <CityList>
        {filteredCities.slice(0, 3).map((org, index) => {
          const isExpanded = expandedCity === org.name;
          const colorCycle = [
            Colors["Blue_60"],
            Colors["Orange_50"],
            Colors["Green_70"],
          ];
          const currentColor = colorCycle[index % colorCycle.length];

          return (
            <CityCard
              key={org.id}
              expanded={isExpanded}
              colorVariant={currentColor}
            >
              <div className="card-content">
                <div className="image-wrapper">
                  <img src={org.url} alt={`Logo de ${org.name}`} />
                </div>
                <div className="card-body">
                  <h5
                    style={{ cursor: "pointer" }}
                    onClick={() => goToCity(org.coords)}
                  >
                    {org.state}
                  </h5>
                  <h4
                    style={{ cursor: "pointer" }}
                    onClick={() => goToCity(org.coords)}
                  >
                    {org.name}
                  </h4>

                  <SocialMediaWrapper>
                    <p>
                      Instagram:{" "}
                      <span>
                        <a
                          href={`https://www.instagram.com/${org.instagram.replace(
                            "@",
                            "",
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {org.instagram}
                        </a>
                      </span>
                    </p>
                    <p>
                      Facebook:{" "}
                      <span>
                        <a
                          href={`https://www.facebook.com/${org.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {org.facebook}
                        </a>
                      </span>
                    </p>
                  </SocialMediaWrapper>

                  <Button
                    onClick={() => toggleCity(org.name)}
                    expanded={isExpanded}
                  >
                    {isExpanded ? (
                      <>
                        <span>Informações</span>
                        <IconTextWrapper>
                          <ChevronLeft
                            sx={{
                              fontSize: 24,
                              transform: "rotate(90deg)",
                              transition: "transform 0.3s",
                            }}
                          />
                        </IconTextWrapper>
                      </>
                    ) : (
                      <>
                        Informações{" "}
                        <ChevronLeft
                          sx={{
                            fontSize: 24,
                            transform: "rotate(-90deg)",
                            transition: "transform 0.3s",
                          }}
                        />
                      </>
                    )}
                  </Button>

                  {isExpanded && (
                    <Info>
                      <p>
                        <b>Local:</b> {org.location}
                      </p>
                      <p>
                        <b>Data:</b> {org.date}
                      </p>
                      <p>
                        <b>Horário:</b> {org.time}
                      </p>
                      <p>
                        <b>Inscrições:</b> {org.registration}
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
