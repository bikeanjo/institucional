import {
  Box,
  Typography,
  Link,
  Stack,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Container from "@components/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { Colors } from "../../styles/tokens/colors";
import { useEffect, useMemo, useRef, useState } from "react";

const SearchResults: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q") || "";
  const [inputValue, setInputValue] = useState(searchQuery);
  const [filteredResults, setFilteredResults] = useState<typeof allLinks>([]);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const allLinks = useMemo(
    () => [
      { title: "Início", path: "/" },
      {
        title: "Ajude como Instituição",
        path: "/ajude-como-instituicao",
      },
      { title: "Mídias Sociais", path: "/social-media" },
      { title: "Dicas Bike Anjo", path: "/dicas-bike-anjo" },
      { title: "Doação", path: "/doacao" },
      { title: "Contato", path: "/contato" },
      { title: "FAQ", path: "/faq" },
      {
        title: "Escola Bike Anjo",
        path: "/escola-bike-anjo",
      },
      {
        title: "Pedala ou Repassa",
        path: "/pedala-ou-repassa",
      },
      {
        title: "Dicas para Pedalar",
        path: "/dicas-para-pedalar",
      },
      {
        title: "Dia Mundial Sem Carro",
        path: "/dia-mundial-sem-carro",
      },
      { title: "Bike Anjas", path: "/bike-anjas" },
      {
        title: "Como Nós Ajudamos",
        path: "/como-nos-ajudamos",
      },
      { title: "Como Funciona", path: "/como-funciona" },
      { title: "Matérias", path: "/materias" },
      { title: "Iniciativas", path: "/iniciativas" },
      {
        title: "Voluntariado",
        path: "/voluntariado",
      },
    ],
    [],
  );

  const searchResults = searchQuery
    ? allLinks.filter((link) =>
        link.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];

  const handleSearch = () => {
    if (inputValue) {
      void navigate(`/buscar?q=${inputValue}`);
    }
  };

  useEffect(() => {
    if (inputValue) {
      const results = allLinks
        .filter((link) =>
          link.title.toLowerCase().includes(inputValue.toLowerCase()),
        )
        .slice(0, 3);
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [inputValue, allLinks]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setFilteredResults([]); // fecha a caixa
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "630px" },
          gap: "32px",
          mx: "auto",
          position: "relative",
        }}
      >
        {searchResults.length > 0 ? (
          <>
            <Typography fontWeight={400} fontSize={{ xs: "24px", lg: "32px" }}>
              Resultado de busca para{" "}
              <span style={{ color: Colors["Pink-50"], fontWeight: 700 }}>
                "{searchQuery}"
              </span>
            </Typography>

            <Box ref={boxRef} sx={{ position: "relative" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: `2px solid ${Colors["Green-70"]}`,
                  borderRadius: "8px",
                  px: "9px",
                  py: "8px",
                  gap: "16px",
                  width: "206px",
                  height: "48px",
                }}
              >
                <SearchIcon sx={{ color: Colors["Green-70"], width: "24px" }} />
                <InputBase
                  placeholder="Pesquise páginas, tópicos ou áreas..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                      setFilteredResults([]);
                    }
                  }}
                  sx={{
                    flex: 1,
                    "&::placeholder": {
                      color: Colors["Green-70"],
                      opacity: 1,
                    },
                  }}
                />
                {inputValue && (
                  <IconButton onClick={() => setInputValue("")}>
                    <CloseIcon sx={{ color: Colors["Green-70"] }} />
                  </IconButton>
                )}
              </Box>

              {filteredResults.length > 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "56px",
                    left: 0,
                    right: 0,
                    maxWidth: "400px",
                    bgcolor: "G-White",
                    border: `2px solid ${Colors["Green-20"]}`,
                    borderRadius: "8px",
                    zIndex: 10,
                  }}
                >
                  {filteredResults.map((result) => (
                    <Link
                      key={result.path}
                      href={result.path}
                      underline="none"
                      sx={{
                        display: "block",
                        px: "16px",
                        py: "12px",
                        borderBottom: `2px solid ${Colors["Green-20"]}`,
                        color: Colors["Green-70"],
                        fontWeight: 400,
                        "&:last-child": { borderBottom: "none" },
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {result.title}
                    </Link>
                  ))}
                </Box>
              )}
            </Box>

            <Typography fontSize="18px" fontWeight={400} color="#000">
              Exibindo {searchResults.length} resultados:
            </Typography>

            <Stack gap="8px">
              {searchResults.map((result) => (
                <Link
                  key={result.path}
                  href={result.path}
                  underline="none"
                  sx={{
                    width: "100%",
                    height: "61px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: "8px 24px",
                    border: `2px solid ${Colors["Green-70"]}`,
                    borderRadius: "8px",
                  }}
                >
                  <Typography
                    fontSize="18px"
                    color={Colors["Green-70"]}
                    fontWeight={700}
                  >
                    {result.title}
                  </Typography>
                  <ArrowForwardIosIcon
                    sx={{ color: Colors["Green-70"], fontSize: "16px" }}
                  />
                </Link>
              ))}
            </Stack>
          </>
        ) : (
          <>
            <Typography fontWeight={400} fontSize={{ xs: "24px", lg: "32px" }}>
              Nenhum resultado para{" "}
              <span style={{ color: Colors["Pink-50"], fontWeight: 700 }}>
                "{searchQuery}"
              </span>
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: `2px solid ${Colors["Green-70"]}`,
                borderRadius: "8px",
                px: "9px",
                py: "8px",
                gap: "16px",
                width: "206px",
                height: "48px",
              }}
            >
              <SearchIcon sx={{ color: Colors["Green-70"], width: "24px" }} />
              <InputBase
                placeholder="Pesquise páginas, tópicos ou áreas..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                sx={{
                  flex: 1,
                  "&::placeholder": {
                    color: Colors["Green-70"],
                    opacity: 1,
                  },
                }}
              />
              {inputValue && (
                <IconButton onClick={() => setInputValue("")}>
                  <CloseIcon sx={{ color: Colors["Green-70"] }} />
                </IconButton>
              )}
            </Box>

            <Typography fontSize="16px" fontWeight={400} color="#000">
              Tente novamente escrevendo o termo de busca de outra forma ou
              usando outra palavra-chave.
              <br />
              Caso prefira,{" "}
              <a
                style={{
                  color: Colors["Green-70"],
                  fontWeight: 700,
                  textDecoration: "underline",
                }}
                href="/"
              >
                retorne à nossa página principal
              </a>
              .
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
};

export default SearchResults;
