import styled from "styled-components";

interface ButtonProps {
  expanded?: boolean;
}

export const Wrapper = styled.div`
  background-color: #ddd;
  margin-top: 40px;
  padding: 20px 20px 36px;
  border-radius: 8px;
`;

export const Title = styled.h3`
  color: #000;
  font-size: 24px;
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
  background-color: #f9f9f9;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0;
  color: #000;
  font-size: 16px;
  cursor: pointer;

  transition: all 0.2s;

  &.active {
    background-color: #666;
    color: #fff;
  }
`;

export const FilterInput = styled.input`
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 11px;
  margin: 0 auto 20px;
  font-size: 16px;
`;

export const CityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CityCard = styled.div<ButtonProps>`
  background-color: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: ${({ expanded }) => (expanded ? "0" : "4px")};
  border-bottom-right-radius: ${({ expanded }) => (expanded ? "0" : "4px")};
  padding: 16px;

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

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #ddd;
  }

  h5 {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    color: #000;
  }

  h4 {
    margin: 8px 0;
    font-size: 24px;
    font-weight: 700;
    color: #000;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  p {
    color: #666;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  span {
    background-color: #f1f1f1;
    border-radius: 110px;
    margin-left: 8px;
    padding: 8px;
    font-size: 16px;
    font-weight: 400;
    color: #666;

    a {
      text-decoration: none;
      color: #666;
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  background-color: #666;
  color: #fff;
  border: none;
  border-radius: ${({ expanded }) => (expanded ? "4px 4px 0 0" : "4px")};
  padding: 6px 12px;
  margin-top: 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  width: ${({ expanded }) => (expanded ? "100%" : "fit-content")};
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
