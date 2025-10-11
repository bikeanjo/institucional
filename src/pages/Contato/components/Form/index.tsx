import {
  FormContainer,
  Input,
  Textarea,
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
import { Button } from "@components";

export function Form() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    telefone: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      nome: formData.nome ? "" : "Nome é obrigatório",
      email: formData.email ? "" : "Email é obrigatório",
      telefone: "",
      assunto: formData.assunto ? "" : "Assunto é obrigatório",
      mensagem: formData.mensagem ? "" : "Mensagem é obrigatória",
    };

    setErrors(newErrors);
    setErrorMessage("");
    setSuccessMessage("");

    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    if (hasErrors) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "men0sC2rr0s2025",
        },
        body: JSON.stringify({
          to: "contato@bikeanjo.org",
          subject: `Contato via site - ${formData.assunto}`,
          template: "contato",
          data: {
            nome: formData.nome,
            email: formData.email,
            telefone: formData.telefone || "Não informado",
            assunto: formData.assunto,
            mensagem: formData.mensagem,
            data: new Date().toLocaleDateString("pt-BR"),
          },
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Erro ao enviar mensagem");
      }

      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      });
      setSelectedOption("");
      setSuccessMessage(
        "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      );

      setTimeout(() => setSuccessMessage(""), 7000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Erro ao enviar mensagem. Tente novamente mais tarde.",
      );
      setTimeout(() => setErrorMessage(""), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
        <Label htmlFor="telefone">Telefone (opcional)</Label>
        <Input
          id="telefone"
          type="tel"
          placeholder="(00) 00000-0000"
          value={formData.telefone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("telefone", e.target.value)
          }
        />
        {errors.telefone && <ErrorMessage>{errors.telefone}</ErrorMessage>}
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

      <Button
        fullWidthDesktop
        fullWidthMobile
        sx={{ borderRadius: "16px" }}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
      {successMessage && (
        <p style={{ color: "#2e7d32", marginTop: "1rem", fontWeight: "500" }}>
          {successMessage}
        </p>
      )}
      {errorMessage && (
        <p style={{ color: "#d32f2f", marginTop: "1rem", fontWeight: "500" }}>
          {errorMessage}
        </p>
      )}
    </FormContainer>
  );
}
