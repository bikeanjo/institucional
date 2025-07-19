import styled from "styled-components";

interface HeroProps {
  secondary?: boolean;
  gap?: string;
  padding?: string;
  height?: string;
}

const Hero = styled.div<HeroProps>`
  width: 100%;
  padding-bottom: 32px;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  background-color: ${(props) =>
    props.secondary && "var(--mui-palette-secondary-main)"};
  gap: ${(props) => props.gap};
  height: 232px;
  h2 {
    color: #486284;
    font-size: 48px;
    font-weight: 600;
    line-height: 100%;
    margin: 0 0 4px;
  }
`;

export default Hero;
