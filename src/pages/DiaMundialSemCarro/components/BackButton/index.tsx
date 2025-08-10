import type { ReactNode } from "react";
import { Container, StyledButton, StyledIcon } from "./styles";

function BackButton(): ReactNode {
  return (
    <>
      <Container>
        <StyledButton
          disableRipple
          variant="text"
          href="#"
          startIcon={<StyledIcon />}
        >
          Voltar as iniciativas
        </StyledButton>
      </Container>
    </>
  );
}
export default BackButton;
