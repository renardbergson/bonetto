import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { steps } from "../BudgetSection";
import { useCurrentStep } from "../context/currentStep";

type Props = {
  dialogIsOpen: boolean;
  setDialogIsOpen: (open: boolean) => void;
  companyName: string;
  setCompanyName: (name: string) => void;
  handleSubmitCompany: () => void;
};

const DialogComponent = ({
  dialogIsOpen,
  setDialogIsOpen,
  companyName,
  setCompanyName,
  handleSubmitCompany,
}: Props) => {
  const { setCurrentStep } = useCurrentStep();

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogContent className="bg-card/95 space-y-4 border border-(--borders-color) bg-(--secondary-color) sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-foreground text-xl">
            Logomarca não enviada
          </DialogTitle>

          <DialogDescription className="text-muted-foreground text-base font-extralight">
            Você não enviou uma logomarca. <br /> Por favor, informe o nome da
            sua empresa:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="company-name" className="text-foreground">
              Nome da Empresa
            </Label>
            <Input
              id="company-name"
              placeholder="Digite o nome da sua empresa"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="bg-background/50 border-border/50"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmitCompany();
                }
              }}
            />
          </div>
        </div>

        <DialogFooter className="gap-3">
          <Button
            type="button"
            variant="outline"
            className="border-(--borders-color)"
            onClick={() => {
              setDialogIsOpen(false);
              setCurrentStep(steps.length - 1); // Volta para o step da logo
            }}
          >
            Voltar e Enviar Logo
          </Button>

          <Button
            type="button"
            className="bg-(--quaternary-color)"
            onClick={handleSubmitCompany}
          >
            Finalizar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
