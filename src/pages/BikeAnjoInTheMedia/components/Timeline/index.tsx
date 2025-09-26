import { type ReactNode, useState, useMemo } from "react";
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
import CalendarIcon from "../../../../../public/assets/images/mediaIcons/calendar.svg";
import LocationIcon from "../../../../../public/assets/images/mediaIcons/location.svg";
import TimelineComponent from "./TimelineComponent";
import { mediaIcons } from "./midiaIcons";
import { timelineData } from "./data";
import type { TimelineYear } from "./data";

function Timeline(): ReactNode {
  const availableYears = useMemo(
    () => timelineData.map((data) => data.year),
    [],
  );

  const [selectedYear, setSelectedYear] = useState<number>(availableYears[0]);

  const currentYearData = useMemo<TimelineYear | undefined>(
    () => timelineData.find((data) => data.year === selectedYear),
    [selectedYear],
  );

  const handleYearSelection = (year: number) => {
    setSelectedYear(year);
  };

  if (!currentYearData) return null;

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
                        <img src={"/assets/images/link-icon.svg"} />
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
