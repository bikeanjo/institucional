import styled from "styled-components";
import { Colors } from "@colors";
import SearchIcon from "@mui/icons-material/Search";

interface CityCardProps {
  expanded?: boolean;
  colorVariant?: string;
}

export const Wrapper = styled.div`
  background-color: #ddd;
  margin-top: 40px;
  padding: 20px 20px 36px;
  border-radius: 8px;
`;

export const Title = styled.h3`
  color: ${Colors["Green_70"]};
  font-size: 32px;
  font-weight: 700;
  margin: 0;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
`;

export const Tag = styled.span`
  background-color: ${Colors["G_White"]};
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0;
  color: ${Colors["Green_70"]};
  font-size: 16px;
  cursor: pointer;
  border: 2px solid ${Colors["Green_70"]};
  border-radius: 30px;
  width: 130px;
  height: fit-content;
  text-align: center;

  transition: all 0.2s;

  &.active {
    background-color: ${Colors["Green_70"]};
    color: ${Colors["G_White"]};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  margin-bottom: 20px;
  left: 12px;
  color: ${Colors["Green_70"]};
  pointer-events: none;
`;

export const FilterInput = styled.input`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  border: 2px solid ${Colors["Green_70"]};
  padding: 11px;
  margin: 0 auto 20px;
  font-size: 16px;
  color: ${Colors["Green_70"]};
  padding-left: 42px;

  &::placeholder {
    color: ${Colors["Green_70"]};
  }
`;

export const CityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CityCard = styled.div<CityCardProps>`
  background-color: ${Colors["G_White"]};
  border-radius: ${({ expanded }) => (expanded ? "4px 4px 0 0" : "8px")};
  border: 2px solid ${Colors["G_Grey_30"]};
  padding: 24px;

  .card-content {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }

  .card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .image-wrapper {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid
      ${({ colorVariant }) => colorVariant || Colors["G_Grey_30"]};
    background-color: ${Colors["G_White"]};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .image-wrapper img {
    width: 65%;
    height: 65%;
    object-fit: contain;
  }

  h5 {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    color: #000;
  }

  h4 {
    margin: 8px 0 0;
    font-size: 24px;
    font-weight: 700;
    color: ${({ colorVariant }) => colorVariant || Colors["G_Grey_100"]};
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  p {
    color: ${Colors["G_Grey_100"]};
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  span {
    display: inline-block;
    border-radius: 110px;
    margin: 16px 0;
    margin-left: 8px;
    padding: 13.5px 16px;
    font-size: 16px;
    font-weight: 400;
    border: 2px solid ${Colors["G_Grey_70"]};

    a {
      text-decoration: none;
      color: ${Colors["G_Grey_70"]};
    }
  }
`;

export const Button = styled.button<CityCardProps>`
  background-color: ${Colors["G_Grey_20"]};
  color: ${Colors["G_Grey_100"]};
  border: 1px solid ${Colors["G_Grey_30"]};
  border-radius: ${({ expanded }) => (expanded ? "4px 4px 0 0" : "4px")};
  padding: 10px 24px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  padding: 20px 10px 26px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: #000;
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    margin: 0;
    font-size: 16px;
  }
`;

export const IconTextWrapper = styled.span`
  display: flex;
  font-weight: 400;
  align-items: center;
  gap: 4px;
`;
