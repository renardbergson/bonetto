import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

import { steps } from "../BudgetSection";
import { useCurrentStep } from "../context/currentStep";

type Props = {
  handlePrevious: () => void;
  handleNext: () => void;
  handleFormSubmit: () => void;
};

const NavigationButtons = ({
  handlePrevious,
  handleNext,
  handleFormSubmit,
}: Props) => {
  const { trigger } = useFormContext();
  const { currentStep } = useCurrentStep();

  async function goToNextStep() {
    const currentField = steps[currentStep].field;
    const isValid = await trigger(currentField);
    if (isValid) {
      handleNext();
    }
  }

  return (
    <div className="flex gap-4">
      {currentStep > 0 && (
        <Button
          type="button"
          variant="outline"
          onClick={handlePrevious}
          className="h-12 flex-1 cursor-pointer hover:bg-(--quaternary-color)"
        >
          <ChevronLeft className="mr-2 h-5 w-5" />
          Voltar
        </Button>
      )}

      <Button
        type="button"
        onClick={
          currentStep === steps.length - 1 ? handleFormSubmit : goToNextStep
        }
        className="h-12 flex-1 cursor-pointer bg-(--quaternary-color) hover:scale-105"
      >
        {currentStep === steps.length - 1 ? (
          <>
            <Send className="mr-2 h-5 w-5" />
            Enviar Orçamento
          </>
        ) : (
          <>
            Próximo
            <ChevronRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </div>
  );
};

export default NavigationButtons;
