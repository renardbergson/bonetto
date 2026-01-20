"use client";

import { useState } from "react";
import { toast } from "sonner";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import validator from "validator";

import Section from "@/app/components/Section";
import Article from "@/app/components/Article";
import Paragraph from "../../components/paragraph";
import TitleComponent from "../../components/sectionTitle";
import { ProgressBar, Form, StepIndicators, Dialog } from "./components";
import { CurrentStepProvider } from "./context/currentStep";
import { FormProvider, useForm } from "react-hook-form";

export const steps = [
  { field: "whatsapp", label: "WhatsApp", type: "tel" },
  { field: "email", label: "E-mail", type: "email" },
  { field: "name", label: "Seu Nome", type: "text" },
  { field: "quantity", label: "Quantidade Desejada", type: "select" },
  { field: "segment", label: "Segmento da Empresa", type: "select" },
  { field: "purpose", label: "Finalidade do Pedido", type: "select" },
  { field: "delivery", label: "Cep", type: "tel" },
  { field: "logo", label: "Envie sua Logomarca", type: "file" },
] as const;

type Props = {
  aosParams?: Record<string, string>;
};

const BudgetSection = ({ aosParams }: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [fileName, setFileName] = useState<string>("");
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const methods = useForm({
    resolver: zodResolver(
      z.object({
        whatsapp: z.string().refine((value) => validator.isMobilePhone(value, "pt-BR"), "Informe um número de whatsapp válido").min(11, "Informe um número de whatsapp válido"),
        email: z.string().refine(validator.isEmail, "Informe um e-mail válido"),
        name: z.string().min(3, "Informe um nome com pelo menos 3 caracteres"),
        quantity: z.string().min(1, "Informe a quantidade desejada"),
        segment: z.string().min(1, "Informe o segmento de atuação"),
        purpose: z.string().min(1, "Informe a finalidade do seu pedido"),
        delivery: z.string().min(8, "O CEP deve conter 8 dígitos").max(8, "O CEP deve conter 8 dígitos"),
        logo: z.custom<File>().optional(),
        companyName: z.string().min(3, "Informe o nome da empresa"),
      }),
    ),
  });

  const handleFormSubmit = () => {
    // Se não tem logo, abrir dialog para nome da empresa
    if (!fileName) {
      setDialogIsOpen(true);
      return;
    }

    // Se tem logo, submeter diretamente
    submitForm();
  };

  const handleSubmitCompany = () => {
    if (!companyName.trim()) {
      toast.error("Por favor, informe o nome da empresa");
      return;
    }

    methods.setValue("companyName", companyName);
    setDialogIsOpen(false);
    submitForm();
  };

  const submitForm = () => {
    methods.reset();
    setCurrentStep(0);
    toast.success("Informações enviadas com sucesso!");
    // Implementar o envio para API
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      methods.setValue("logo", file);
    }
  };

  const paragraphContent = (
    <p {...aosParams}>
      Que tal agilizar o processo? Preencha os dados a seguir e receba um
      orçamento personalizado. <br className="hidden xl:block"/> Certifique-se de que todos os dados sejam informados corretamente, nós entraremos em contato o mais breve possível.
    </p>
  );

  return (
    <Section variant="secondary" id="budget-section">
      <Article>
        <TitleComponent title="Solicite seu Orçamento" {...aosParams} />

        <Paragraph {...aosParams}>{paragraphContent}</Paragraph>

        <div
          {...aosParams}
          className="relative container mx-auto space-y-9 rounded-2xl"
        >
          <FormProvider {...methods}>
            <CurrentStepProvider value={{ currentStep, setCurrentStep }}>
              <ProgressBar />

              <Form
                handleFormSubmit={handleFormSubmit}
                fileName={fileName}
                handleFileChange={handleFileChange}
              />

              <StepIndicators />
            </CurrentStepProvider>
          </FormProvider>
        </div>

        <Dialog
          dialogIsOpen={dialogIsOpen}
          setDialogIsOpen={setDialogIsOpen}
          companyName={companyName}
          setCompanyName={setCompanyName}
          handleSubmitCompany={handleSubmitCompany}
        />
      </Article>
    </Section>
  );
};

export default BudgetSection;
