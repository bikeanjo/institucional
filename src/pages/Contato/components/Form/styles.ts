import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  padding: 12px 16px;
  border-radius: 16px;
  margin: auto;
  width: 80%;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #121414;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  color: #656565;
  border: 1px solid #d9dbde;
  background-color: #e5e5e5;
  border-radius: 8px;
`;

export const AccordionWrapper = styled.div`
  border: 1px solid #d9dbde;
  border-radius: 8px;
  overflow: hidden;
  background-color: #e5e5e5;
`;

export const AccordionHeader = styled.button.attrs({ type: "button" })<{
  isOpen: boolean;
}>`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  color: #656565;
  background-color: ${({ isOpen }) => (isOpen ? "#d4d4d4" : "#e5e5e5")};
  border: none;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  background-color: #e5e5e5;
  border-top: none;
`;

export const AccordionOption = styled.div`
  background-color: #e5e5e5;
  color: #656565;
  padding: 16px;
  border-top: 1px solid #d9dbde;
  cursor: pointer;

  &:hover {
    background-color: #d9d9d9;
  }
`;

export const Textarea = styled.textarea`
  border: 1px solid #d9dbde;
  background-color: #e5e5e5;
  border-radius: 8px;
  resize: none;
  min-height: 144px;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  color: #656565;
  font-family: "Roboto", sans-serif;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 4px;
`;
