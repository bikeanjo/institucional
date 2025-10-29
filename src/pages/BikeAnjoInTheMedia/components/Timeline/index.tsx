import { type ReactNode, useState, useMemo, useEffect } from "react";
import {
  Container,
  ContainerItems,
  Items,
  Month,
  BoxMonth,
  MonthName,
  Line,
  Media,
  BoxMedia,
  MediaTitle,
  LinkButton,
  Infos,
  BoxInfos,
  InfoName,
} from "./styles";
import CalendarIcon from "/assets/icons/calendar.svg";
import LocationIcon from "/assets/icons/location.svg";
import TimelineComponent from "./TimelineComponent";
import { mediaIcons } from "./midiaIcons";
import { loadTextContent } from "@/textContent";
import type { TimelineYear } from "./data";
import LinkIcon from "@components/Icons/link-icon";

function Timeline(): ReactNode {
  const [timelineData, setTimelineData] = useState<TimelineYear[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    void loadTextContent("media")
      .then((data) => {
        setTimelineData(data as TimelineYear[]);
      })
      .catch((error) => {
        console.error("❌ Timeline: Erro ao carregar JSON media:", error);
      });
  }, []);

  const availableYears = useMemo(
    () => timelineData.map((data) => data.year),
    [timelineData],
  );

  const [selectedYear, setSelectedYear] = useState<number | undefined>(
    undefined,
  );

  // Definir o primeiro ano quando os dados estiverem carregados
  useEffect(() => {
    if (availableYears.length > 0 && selectedYear === undefined) {
      setSelectedYear(availableYears[0]);
    }
  }, [availableYears, selectedYear]);

  const currentYearData = useMemo<TimelineYear | undefined>(
    () => timelineData.find((data) => data.year === selectedYear),
    [selectedYear, timelineData],
  );

  const handleYearSelection = (year: number) => {
    setSelectedYear(year);
  };

  if (!currentYearData) {
    return null;
  }
  return (
    <>
      <Container>
        <TimelineComponent
          data={availableYears}
          onYearSelect={handleYearSelection}
        />

        <ContainerItems>
          {currentYearData.months.map((month) => (
            <Items key={month.id}>
              <Month>
                <BoxMonth>
                  <MonthName>{month.month}</MonthName>
                </BoxMonth>
                <Line />
              </Month>
              <Media>
                {month.items.map((item) => {
                  const mediaInfo = mediaIcons[item.media.toLowerCase()] ?? {
                    label: item.media,
                    icon: "",
                  };

                  return (
                    <BoxMedia key={item.id}>
                      <MediaTitle>{item.title}</MediaTitle>
                      <LinkButton href={item.link.url}>
                        <LinkIcon />
                        {item.link.text}
                      </LinkButton>
                      <Infos>
                        <BoxInfos>
                          <img src={mediaInfo.icon} alt={mediaInfo.label} />
                          <InfoName>{mediaInfo.label}</InfoName>
                        </BoxInfos>
                        <BoxInfos>
                          <img src={CalendarIcon} />
                          <InfoName>{item.date}</InfoName>
                        </BoxInfos>
                        <BoxInfos>
                          <img src={LocationIcon} />
                          <InfoName>{item.location}</InfoName>
                        </BoxInfos>
                      </Infos>
                    </BoxMedia>
                  );
                })}
              </Media>
            </Items>
          ))}
        </ContainerItems>
      </Container>
    </>
  );
}
export default Timeline;
