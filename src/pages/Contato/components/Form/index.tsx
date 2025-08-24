import {
  FormContainer,
  Input,
  Textarea,
  SubmitButton,
  FieldWrapper,
  Label,
  AccordionHeader,
  AccordionOption,
  AccordionWrapper,
  AccordionContent,
  ErrorMessage,
} from "./styles";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Form() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const accordionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setFormData((prev) => ({ ...prev, assunto: option }));
    setErrors((prev) => ({ ...prev, assunto: "" }));
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      nome: formData.nome ? "" : "Nome é obrigatório",
      email: formData.email ? "" : "Email é obrigatório",
      assunto: formData.assunto ? "" : "Assunto é obrigatório",
      mensagem: formData.mensagem ? "" : "Mensagem é obrigatória",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    if (hasErrors) return;

    console.log("Dados enviados:", formData);

    setFormData({
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    });
    setSelectedOption("");
    setSuccessMessage("Formulário enviado com sucesso!");

    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FieldWrapper>
        <Label htmlFor="nome">Nome</Label>
        <Input
          id="nome"
          type="text"
          placeholder="Digite seu nome"
          value={formData.nome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("nome", e.target.value)
          }
        />
        {errors.nome && <ErrorMessage>{errors.nome}</ErrorMessage>}
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("email", e.target.value)
          }
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </FieldWrapper>

      <FieldWrapper>
        <Label>Assunto</Label>
        <AccordionWrapper ref={accordionRef}>
          <AccordionHeader onClick={toggleAccordion} isOpen={isOpen}>
            <span>{selectedOption || "Escolha um assunto"}</span>
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </AccordionHeader>
          <AccordionContent isOpen={isOpen}>
            {[
              "Dúvidas gerais",
              "Sou da rede Bike Anjo e preciso de ajuda",
              "Problemas no site ou sistema",
              "Parcerias e projetos colaborativos",
              "Apoio, doações ou assuntos financeiros",
              "Imprensa, eventos e comunicação",
              "Feedback e sugestões",
              "Outro assunto",
            ].map((option) => (
              <AccordionOption
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </AccordionOption>
            ))}
          </AccordionContent>
        </AccordionWrapper>
        {errors.assunto && <ErrorMessage>{errors.assunto}</ErrorMessage>}
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="mensagem">Mensagem</Label>
        <Textarea
          id="mensagem"
          value={formData.mensagem}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => handleChange("mensagem", e.target.value)}
        />
        {errors.mensagem && <ErrorMessage>{errors.mensagem}</ErrorMessage>}
      </FieldWrapper>

      <SubmitButton type="submit">Send</SubmitButton>
      {successMessage && (
        <p style={{ color: "green", marginTop: "1rem" }}>{successMessage}</p>
      )}
    </FormContainer>
  );
}
