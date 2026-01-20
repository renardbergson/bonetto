import { useFormContext, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FieldLayout, InputLabel, InputError } from ".";

type Props = {
  field: string;
  label: string;
};

const Purpose = ({ field, label }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FieldLayout>
      <InputLabel htmlFor={field} label={label} />

      <Controller
        name="purpose"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="bg-background/50 border-border/50 h-14 w-full text-base backdrop-blur-sm">
              <SelectValue placeholder="Selecione a finalidade" />
            </SelectTrigger>

            <SelectContent className="border border-(--borders-color) bg-(--secondary-color)">
              {[
                { value: "uniformes", label: "Uniformes" },
                { value: "brinde", label: "Brinde Corporativo" },
                { value: "eventos", label: "Eventos / Feiras" },
                { value: "revenda", label: "Revenda" },
                { value: "campanha", label: "Campanha Promocional" },
                { value: "outros", label: "Outros" },
              ].map(({ value, label }, index) => {
                return (
                  <SelectItem key={index} value={value}>
                    {label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        )}
      />

      <InputError errors={errors} field={field} />
    </FieldLayout>
  );
};

export default Purpose;
