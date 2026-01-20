import { useFormContext } from "react-hook-form";
import { useCurrentStep } from "../context/currentStep";
import { steps } from "../BudgetSection";
import { StepRender, NavigationButtons } from ".";

type Props = {
  handleFormSubmit: () => void;
  fileName: string;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({ handleFormSubmit, fileName, handleFileChange }: Props) => {
  const { handleSubmit } = useFormContext();
  const { currentStep, setCurrentStep } = useCurrentStep();

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = async () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="bg-card/50 rounded-2xl border border-(--borders-color) p-8 shadow-lg lg:p-12 mx-auto">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="m-0 flex min-h-[160px] w-full items-center">
          <StepRender handleFileChange={handleFileChange} fileName={fileName} />
        </div>

        <NavigationButtons
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          handleFormSubmit={handleFormSubmit}
        />
      </form>
    </div>
  );
};

export default Form;
