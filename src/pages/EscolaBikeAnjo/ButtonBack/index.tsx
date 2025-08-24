import type { ReactNode } from "react";
import { Container, StyledButton, StyledIcon } from "./styles";
import { Link } from "react-router-dom";

function BackButton(): ReactNode {
  return (
    <>
      <Container>
        <Link to="/iniciativas">
          <StyledButton disableRipple variant="text" startIcon={<StyledIcon />}>
            Voltar as iniciativas
          </StyledButton>
        </Link>
      </Container>
    </>
  );
}
export default BackButton;
