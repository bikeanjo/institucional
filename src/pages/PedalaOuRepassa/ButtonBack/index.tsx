import { Button } from "./styles";
import ArrowBackBlack from "../../../assets/images/arrow-back-black.png";

export default function ButtonBack() {
  return (
    <Button onClick={() => window.history.back()}>
      <img
        src={ArrowBackBlack}
        alt="Seta para retornar à pagina de Iniciativas"
      />
      Voltar às Iniciativas
    </Button>
  );
}
