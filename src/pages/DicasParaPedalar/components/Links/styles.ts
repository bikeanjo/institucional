import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 40px auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  color: #000;
  font-size: 32px;
  font-weight: 700;
  margin: 0;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const LinkItem = styled.li`
  img {
    margin-right: 10px;
  }

  a {
    font-size: 16px;
    color: #000;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`;
