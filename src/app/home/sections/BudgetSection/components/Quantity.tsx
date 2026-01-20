import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext, Controller } from "react-hook-form";

import { FieldLayout, InputLabel, InputError } from ".";

type Props = {
  field: string;
  label: string;
};

const Quantity = ({ field, label }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FieldLayout>
      <InputLabel htmlFor={field} label={label} />

      <Controller
        name="quantity"
        defaultValue=""
        control={control}
        shouldUnregister={false}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="bg-background/50 border-border/50 h-14 w-full text-base backdrop-blur-sm">
              <SelectValue placeholder="Selecione a quantidade" />
            </SelectTrigger>

            <SelectContent className="border border-(--borders-color) bg-(--secondary-color)">
              {[
                { value: "30-50", label: "De 30 a 50 unidades" },
                { value: "50-100", label: "De 50 a 100 unidades" },
                { value: "100-200", label: "De 100 a 200 unidades" },
                { value: "200-300", label: "De 200 a 300 unidades" },
                { value: "300-500", label: "De 300 a 500 unidades" },
                { value: "500-1000", label: "De 500 a 1000 unidades" },
                { value: "1000+", label: "1000 unidades ou mais" },
              ].map((item, index) => {
                return (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
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

export default Quantity;
