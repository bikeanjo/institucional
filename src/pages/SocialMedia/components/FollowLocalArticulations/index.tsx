import MapInteractive from "@components/Map";
import FindLocalArticulation from "./FindLocalArticulation";
import SubTitle from "@components/SubTitle";
import Title from "@components/Title";
import { Box } from "@mui/material";
import { useState } from "react";

interface LocalArticulationsProps {
  title: string;
  titleAlign?: "left" | "center" | "right";
  sub: string;
}

export default function FollowLocalArticulations({
  title,
  titleAlign = "left",
  sub,
}: LocalArticulationsProps) {
  const tupleCoords = (lat: number, lng: number): [number, number] => [
    lat,
    lng,
  ];
  const [selectedCoords, setSelectedCoords] = useState<[number, number] | null>(
    null,
  );

  const articulations = [
    {
      id: "abc-sp",
      name: "ABC",
      state: "São Paulo",
      region: "Sudeste",
      instagram: "@bikeanjoabc",
      facebook: "EBA.ABC",
      location: "Praça IV Centenário, 04 - Centro, Santo André - SP, 09015-080",
      date: "Último domingo do mês",
      time: "Das 14:00 às 17:00",
      registration:
        "Atendimento em ordem de chegada no local, sem pré inscrições.",
      url: "/assets/icons/sao-paulo.png",
      coords: tupleCoords(-23.656187, -46.532035),
    },
    {
      id: "aracaju-se",
      name: "Aracaju",
      state: "Sergipe",
      region: "Nordeste",
      instagram: "@bikeanjosergipe",
      facebook: "BikeAnjoSergipe",
      location:
        "Parque da Sementeira - Av. Jornalista Santos Santana, s/n - Jardins, Aracaju - SE",
      date: "Último domingo do mês",
      time: "Nos meses de dias curtos, será das 15:00 as 17:00. Nos meses de dias longos, das 16:00 as 18:00",
      registration:
        "Ordem de chegada, limite para 10 podendo ser até 20 a depender da quantidade de anjos disponíveis.",
      url: "/assets/icons/aracaju.png",
      coords: tupleCoords(-10.943583, -37.054385),
    },
    {
      id: "belem-pa",
      name: "Belém",
      state: "Pará",
      region: "Norte",
      instagram: "@bikeanjobelem",
      facebook: "BikeAnjoBelem",
      location:
        "Praça da Bandeira - R. João Diogo, 316 - Campina, Belém - PA, 66015-165",
      date: "Último sábado do mês",
      time: "Das 09:00 às 11:00",
      registration: "Até às 10:00, na Praça da Bandeira no dia da EBA.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-1.454761, -48.499777),
    },
    {
      id: "belo-horizonte-mg",
      name: "Belo Horizonte",
      state: "Minas Gerais",
      region: "Sudeste",
      instagram: "@bikeanjobh",
      facebook: "BikeAnjoBH",
      location:
        "Praça da Ciclista - Av. Carandaí, 331 - Funcionários, Belo Horizonte - MG, 30140-020",
      date: "Último domingo do mês",
      time: "Das 09:00 às 12:00",
      registration:
        "Os alunos fazem inscrição no Sympla. São quatro vagas para cada hora. E também temos lista de espera no dia da EBA para as pessoas que não conseguiram se inscrever.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-19.928316, -43.927589),
    },
    {
      id: "brasilia-df",
      name: "Brasília",
      state: "Distrito Federal",
      region: "Centro-Oeste",
      instagram: "@bikeanjodf",
      facebook: "bikeanjodf",
      location: "Praça do Indígena Galdino - 706, Qd 705 - Asa Sul, DF",
      date: "Último domingo do mês",
      time: "Das 15:00 às 18:00",
      registration:
        "Inscrições não são ilimitadas, se faz pelo formulário disponível no Instagram.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-15.807422, -47.901387),
    },
    {
      id: "campina-grande-pb",
      name: "Campina Grande",
      state: "Paraíba",
      region: "Nordeste",
      instagram: "@bikeanjocg",
      facebook: "bikeanjocg",
      location:
        "Capela São Vicente De Paulo - 297, Av. Mal. Deodoro, 143, Campina da Lagoa - PR, 87345-000",
      date: "Último domingo do mês",
      time: "Das 15:00 às 18:00",
      registration: "Feitas por ordem de chegada.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-24.58626, -52.801075),
    },
    {
      id: "campinas-sp",
      name: "Campinas",
      state: "São Paulo",
      region: "Sudeste",
      instagram: "@bikeanjocampinas",
      facebook: "bikeanjocampinas",
      location:
        "Kartódromo - Av. Dr. Heitor Penteado, 329 - Jardim Nossa Sra. Auxiliadora, Campinas - SP, 13075-460",
      date: "Último domingo do mês",
      time: "Das 09:00 às 12:00",
      registration: "Pelas redes sociais e na hora (aula de 30min por aluno).",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-22.878374, -47.061901),
    },
    {
      id: "caruaru-pe",
      name: "Caruaru",
      state: "Pernambuco",
      region: "Nordeste",
      instagram: "@pernambucobikeanjo",
      facebook: "Pernambucobikeanjo",
      location:
        "Av. Agamenon Magalhães, 1029 - Maurício de Nassau, Caruaru - PE, 55014-000",
      date: "Segundo domingo do mês (no momento não estão acontecendo)",
      time: "Das 09:00 às 12:00",
      registration:
        "No local, pelo Instagram ou WhatsApp (as vagas não são limitadas).",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-8.274227, -35.973963),
    },
    {
      id: "contagem-mg",
      name: "Contagem",
      state: "Minas Gerais",
      region: "Sudeste",
      instagram: "@movecultura",
      facebook: "movecultura",
      location:
        "Parque Ecológico Eldorado - R. Paineiras, 753 - Eldorado, Contagem - MG, 32310-400",
      date: "Último domingo do mês",
      time: "Das 09:00 às 12:00",
      registration: "Sympla ou no local e limitados a 25 vagas.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-19.940174, -44.039169),
    },
    {
      id: "curitiba-pr",
      name: "Curitiba",
      state: "Paraná",
      region: "Sul",
      instagram: "@bikeanjocuritiba",
      facebook: "bikeanjocuritiba",
      location:
        "Praça Nossa Senhora de Salete - Av. Cândido de Abreu, 1039 - Centro Cívico, Curitiba - PR, 80050-540",
      date: "Primeiro domingo do mês (atualmente parado)",
      time: "Das 09:00 às 12:00",
      registration: "Atendimento por ordem de chegada.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-25.41436, -49.268329),
    },
    {
      id: "fortaleza-ce",
      name: "Fortaleza",
      state: "Ceará",
      region: "Nordeste",
      instagram: "@pernambucobikeanjo",
      facebook: "pernambucobikeanjo",
      location:
        "Av. Visconde do Rio Branco, 922 - Centro, Fortaleza - CE, 60055-170",
      date: "1 domingo por mês, em data a definir a cada mês de acordo com disponibilidade das pessoas voluntárias",
      time: "Das 8:30 às 11:30",
      registration: "No local.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-3.730884, -38.525269),
    },
    {
      id: "santos-sp",
      name: "Santos",
      state: "São Paulo",
      region: "Sudeste",
      instagram: "@bikeanjolitoralsp",
      facebook: "bikeanjolitoralsp",
      location:
        "Museu do Surf - Av. Pres. Wilson, 170 - José Menino, Santos - SP, 11065-201",
      date: "Último domingo do mês",
      time: "Das 10:00 às 13:00",
      registration: "No local.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-23.970583, -46.350045),
    },
    {
      id: "manaus-am",
      name: "Manaus",
      state: "Amazonas",
      region: "Norte",
      instagram: "@bikeanjomanaus",
      facebook: "bikeanjomanaus",
      location:
        "Parque dos Bilhares - Av. Constantino Nery, S/n - Chapada, Manaus - AM, 69058-795",
      date: "Último domingo do mês",
      time: "Das 16:00 às 18:00",
      registration:
        "Inscrições limitadas, realizadas através de link disponibilizado no instagran do BAM.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-3.101852, -60.027098),
    },
    {
      id: "natal-rn",
      name: "Natal",
      state: "Rio Grande do Norte",
      region: "Nordeste",
      instagram: "@bikeanjonatal",
      facebook: "bikeanjonatal",
      location:
        "Estacionamento da UFRN - Túnel da UFRN - Lagoa Nova, Natal - RN, 59064-741",
      date: "Primeiro domingo do mês",
      time: "Das 15:00 às 17:30",
      registration: "No local da EBA.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-5.836744, -35.209369),
    },
    {
      id: "niteroi-rj",
      name: "Niterói",
      state: "Rio de Janeiro",
      region: "Sudeste",
      instagram: "@bikeanjoniteroi",
      facebook: "bikeanjoniteroi",
      location:
        "Teatro Popular - R. Jorn. Rogério Coelho Neto, s/n - Centro, Niterói - RJ, 24020-011",
      date: "Terceiro domingo do mês",
      time: "A partir das 9:00",
      registration: "Informação não disponível.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-22.88998, -43.128315),
    },
    {
      id: "porto-alegre-rs",
      name: "Porto Alegre",
      state: "Rio Grande do Sul",
      region: "Sul",
      instagram: "@bikeanjopoa",
      facebook: "bikeanjopoa",
      location:
        "R. Prof. Freitas e Castro, 191 - Azenha, Porto Alegre - RS, 90040-400",
      date: "Último domingo do mês",
      time: "Das 9:00 as 12:00",
      registration:
        "Não necessita inscrição prévia, atendimento conforme a chegada.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-30.04947, -51.215476),
    },
    {
      id: "recife-pe",
      name: "Recife",
      state: "Pernambuco",
      region: "Nordeste",
      instagram: "@pernambucobikeanjo",
      facebook: "pernambucobikeanjo",
      location:
        "Praça das Ciclistas/Contêiner Bike Anjo - Santo Amaro, Recife - PE, 50030-230",
      date: "Último domingo do mês e segundo domingo do mês",
      time: "Das 09:00 às 12:00 e das 09:00 às 14:00",
      registration:
        "Inscrições para os pré-cadastrados da plataforma, convite via sympla com aulas de 40min, 5min de intervalo entre turmas e o limite é a quantidade de bicicleta que temos disponíveis.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-8.055227, -34.876951),
    },
    {
      id: "rio-de-janeiro-rj",
      name: "Rio de Janeiro",
      state: "Rio de Janeiro",
      region: "Sudeste",
      instagram: "@bikeanjo.rio",
      facebook: "bikeanjo.rio",
      location:
        "Parque Quinta da Boa Vista - Imperial de São Cristóvão, Rio de Janeiro - RJ, 20940-040",
      date: "Terceiro domingo do mês",
      time: "Das 9:00 às 12:00 ou das 15:30 às 18:00",
      registration:
        "As inscrições são feitas no local e por ordem de chegada no dia do evento, sendo limitadas de acordo com o número de pessoas voluntárias.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-22.905174, -43.221817),
    },
    {
      id: "salvador-ba",
      name: "Salvador",
      state: "Bahia",
      region: "Nordeste",
      instagram: "@bikeanjosalvador",
      facebook: "bikeanjosalvador",
      location:
        "Praça Dois de Julho, s/n - Campo Grande, Salvador - BA, 40080-121",
      date: "Último domingo do mês",
      time: "Das 08:00 às 11:00",
      registration:
        "As inscrições são feitas no local e por ordem de chegada no dia do evento, sendo limitadas de acordo com o número de pessoas voluntárias.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-12.988952, -38.521455),
    },
    {
      id: "sao-luis-ma",
      name: "São Luís",
      state: "Maranhão",
      region: "Nordeste",
      instagram: "@bikeanjoslz",
      facebook: "bikeanjoslz",
      location: "Praça Maria Aragão - Centro, São Luís - MA, 65010-230",
      date: "Varia com a programação da articulação.",
      time: "Das 16:00 às 19:00",
      registration:
        "Atendimento apenas mediante inscrição por formulário online, previamente divulgado.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-2.52371, -44.297062),
    },
    {
      id: "sao-paulo-sp",
      name: "São Paulo",
      state: "São Paulo",
      region: "Sudeste",
      instagram: "@bikeanjosp",
      facebook: "bikeanjosp",
      location:
        "Largo da Batata - Av. Brig. Faria Lima, S/N - Pinheiros, São Paulo - SP, 05426-030",
      date: "Primeiro e último domingos do mês",
      time: "Das 9:00 às 12:00",
      registration:
        "Aprender a Pedalar é com inscrição na hora, por ordem de chegada, Pedalar Pela Cidade tem inscrição prévia.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-23.567119, -46.694762),
    },
    {
      id: "teresina-pi",
      name: "Teresina",
      state: "Piauí",
      region: "Nordeste",
      instagram: "@bikeanjoteresina",
      facebook: "bikeanjoteresina",
      location:
        "Parque Potycabana - Av. Raul Lopes, s/n - Noivos, Teresina - PI, 64046-010",
      date: "Último domingo do mês",
      time: "Das 17:00 às 19:00",
      registration:
        "Inscrições limitadas pelo link que disponibilizamos no grupo da Escola e pelo Instagram.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-5.086347, -42.790908),
    },
    {
      id: "valenca-ba",
      name: "Valença",
      state: "Bahia",
      region: "Nordeste",
      instagram: "@bikeanjovalenca",
      facebook: "bikeanjovalenca",
      location: "EBA CENTRAL - R. Rui Barbosa - Valença, BA, 45400-000",
      date: "Sem data definida, depende de parcerias",
      time: "Das 09:00 às 12:00",
      registration:
        "Inscrições limitadas à 06 pessoas, aproximadamente, via redes sociais do BA Valença.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-13.372855, -39.071544),
    },
    {
      id: "viana-es",
      name: "Viana",
      state: "Espírito Santo",
      region: "Sudeste",
      instagram: "@bikeanjoes",
      facebook: "bikeanjoes",
      location: "Parque Linear de Canaã - R. Furtado - Viana, ES, 29135-000",
      date: "Terceiro domingo do mês",
      time: "Das 9:30 às 11:30",
      registration:
        "Vagas somente com inscrição prévia pelo WhatsApp até meio-dia de sábado.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-20.356436, -40.430822),
    },
    {
      id: "vila-velha-es",
      name: "Vila Velha",
      state: "Espírito Santo",
      region: "Sudeste",
      instagram: "@bikeanjoes",
      facebook: "bikeanjoes",
      location: "Estacionamento - Centro de Vila Velha, Vila Velha - ES",
      date: "Último domingo do mês",
      time: "Das 08:00 as 11:00",
      registration: "No local da EBA.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-20.328288, -40.290906),
    },
    {
      id: "vitoria-es",
      name: "Vitória",
      state: "Espírito Santo",
      region: "Sudeste",
      instagram: "@bikeanjoes",
      facebook: "bikeanjoes",
      location:
        "Praça do Papa - Av. Nossa Sra. dos Navegantes - Praia do Suá, Vitória - ES, 29052-150",
      date: "Primeiro domingo do mês",
      time: "Das 08:00 as 11:00",
      registration: "No local da EBA.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-20.317139, -40.295047),
    },
    {
      id: "volta-redonda-rj",
      name: "Volta Redonda",
      state: "Rio de Janeiro",
      region: "Sudeste",
      instagram: "@bikeanjovr",
      facebook: "bikeanjovr",
      location:
        "Casa Bike Anjo Volta Redonda - Ilha São João - Rua Alexandre Polastri Filho Jardim Botânico - Voldac, Volta Redonda - RJ, 27213-090",
      date: "Primeiro domingo do mês (Sujeito a alteração)",
      time: "Das 8:00 às 10:30 para o público e das 7h às 12h para voluntários",
      registration:
        "Limitadas. Divulgamos o link para solicitação de pré inscrição até uma semana antes do evento. Daí até dois dias antes enviamos a confirmação por e-mail e publicamos a lista dos pré-inscritos. Fazemos lista de espera no local para ocupar vagas caso haja desistências e de acordo com a disponibilidade de voluntários e bicicletas, para isso pedimos que os interessados cheguem cedo, antes das 8h.",
      url: "/assets/icons/abc.png",
      coords: tupleCoords(-22.489899, -44.088387),
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Title align={titleAlign}>{title}</Title>
      <SubTitle>{sub}</SubTitle>

      <MapInteractive
        articulations={articulations}
        selectedCoords={selectedCoords}
        setSelectedCoords={setSelectedCoords}
      />
      <FindLocalArticulation
        articulations={articulations}
        setSelectedCoords={setSelectedCoords}
      />
    </Box>
  );
}
