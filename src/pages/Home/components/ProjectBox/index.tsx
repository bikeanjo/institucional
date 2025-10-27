import styled from "styled-components";

const ProjectBox = styled.div<{ $colorCard: string }>`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: center;
  width: 328px;
  height: auto;
  margin: auto;
  border-radius: 16px;
  border: 2px solid ${(props) => props.$colorCard};
  box-sizing: border-box;
  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.15);
  padding: 24px;
  gap: 10px;
  background-color: #f4f4f4;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    outline: 5px solid ${(props) => props.$colorCard};
    outline-offset: 5px;
  }

  @media (max-width: 900px) {
    min-width: 254px;
    padding: 16px;
    border-radius: 8px;

    img {
      width: 120px;
      height: 120px;
    }
  }
`;

export default ProjectBox;
