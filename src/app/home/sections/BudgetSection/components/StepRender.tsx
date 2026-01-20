import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

import { steps } from "../BudgetSection";
import { useCurrentStep } from "../context/currentStep";
import { Quantity, Segment, Purpose, InputLabel, InputError } from ".";

import { FieldLayout } from ".";

type Props = {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileName: string;
};

const StepRender = ({ handleFileChange, fileName }: Props) => {  
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { currentStep } = useCurrentStep();
  const { type, field, label } = steps[currentStep];

  function handleCEPInput(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
  }

  function handleNameInput(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
  }

  switch (type) {
    /* Quantidade, Segmento, Finalidade */
    case "select":
      if (field === "quantity") {
        return <Quantity field={field} label={label} />;
      } else if (field === "segment") {
        return <Segment field={field} label={label} />;
      } else if (field === "purpose") {
        return <Purpose field={field} label={label} />;
      }

    /* Upload de Logomarca */
    case "file":
      return (
        <FieldLayout>
          <InputLabel htmlFor={field} label={label} />

          <div className="relative">
            <Input
              id={field}
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="hidden"
            />

            <Button
              type="button"
              variant="outline"
              className="bg-background/50 border-border/50 hover:bg-background/70 h-14 w-full text-base backdrop-blur-sm"
              onClick={() => document.getElementById(field)?.click()}
            >
              <Upload className="mr-2 h-5 w-5" />
              {fileName || "Clique para selecionar arquivo"}
            </Button>

            {fileName && (
              <p className="text-muted-foreground mt-2 text-sm">
                Arquivo: {fileName}
              </p>
            )}
          </div>
        </FieldLayout>
      );

    /* WhatsApp, E-mail, Nome Completo, CEP */
    default:
      return (
        <FieldLayout>
          <InputLabel htmlFor={field} label={label} />

          <Input
            key={field}
            id={field}
            type={type}
            placeholder={`Digite seu ${label.toLowerCase()} ${label === "Cep" ? "(entrega)" : ""}`}
            inputMode={label === "Cep" ? "numeric" : undefined}
            pattern={label === "Cep" ? "[0-9]*" : undefined}
            onInput={label === "Cep" ? handleCEPInput : label === "Seu Nome" ? handleNameInput : undefined}
            className="h-14 w-full text-base md:text-[17px]"
            {...register(field)}
          />

          <InputError errors={errors} field={field} />
        </FieldLayout>
      );
  }
};

export default StepRender;
