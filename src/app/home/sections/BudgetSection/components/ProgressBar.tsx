import { Progress } from "@/components/ui/progress";

import { steps } from "../BudgetSection";
import { useCurrentStep } from "../context/currentStep";

const ProgressBar = () => {
  const { currentStep } = useCurrentStep();

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="px-2">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-muted-foreground text-sm sm:text-[15px] 2xl:text-base">
          Etapa {currentStep + 1} de {steps.length}
        </span>

        <span className="text-muted-foreground text-sm">
          {Math.round(progress)}%
        </span>
      </div>

      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default ProgressBar;
