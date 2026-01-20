import { createContext, useContext, Dispatch, SetStateAction } from "react";

type CurrentStepContextValue = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

export const CurrentStepContext = createContext<CurrentStepContextValue>({
  currentStep: 0,
  setCurrentStep: () => {},
});

export const CurrentStepProvider = CurrentStepContext.Provider;

export function useCurrentStep() {
  const context = useContext(CurrentStepContext);
  if (!context) {
    throw new Error("useCurrentStep must be used inside CurrentStepProvider");
  }
  return context;
}
