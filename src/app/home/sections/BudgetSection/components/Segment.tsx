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

const Segment = ({ field, label }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FieldLayout>
      <InputLabel htmlFor={field} label={label} />

      <Controller
        name="segment"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="bg-background/50 border-border/50 h-14 w-full text-base backdrop-blur-sm">
              <SelectValue placeholder="Selecione o segmento" />
            </SelectTrigger>

            <SelectContent className="border border-(--borders-color) bg-(--secondary-color)">
              {[
                { value: "agricultura", label: "Agricultura" },
                { value: "construcao", label: "Construção Civil" },
                { value: "educacao", label: "Educação" },
                { value: "eventos", label: "Eventos" },
                { value: "industria", label: "Indústria" },
                { value: "saude", label: "Saúde" },
                { value: "tecnologia", label: "Tecnologia" },
                { value: "varejo", label: "Varejo" },
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

export default Segment;
