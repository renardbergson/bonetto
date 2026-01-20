import { steps } from "../BudgetSection";
import { useCurrentStep } from "../context/currentStep";

const StepIndicators = () => {
  const { currentStep } = useCurrentStep();
  return (
    <div className="flex justify-center gap-2">
      {steps.map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === currentStep
              ? "w-8 bg-(--tertiary-color)"
              : index < currentStep
                ? "w-2 bg-(--primary-color)/60"
                : "w-2 bg-(--borders-color)"
          }`}
        />
      ))}
    </div>
  );
};

export default StepIndicators;
