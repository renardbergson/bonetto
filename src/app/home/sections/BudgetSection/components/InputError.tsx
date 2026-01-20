import { FieldErrors, FieldValues } from "react-hook-form";

type Props = {
  errors: FieldErrors<FieldValues>;
  field: string;
};

const InputError = ({ errors, field }: Props) => {
  return (
    <p className="text-sm text-red-800 2xl:text-[16px]">
      {errors[field]?.message as string}
    </p>
  );
};

export default InputError;