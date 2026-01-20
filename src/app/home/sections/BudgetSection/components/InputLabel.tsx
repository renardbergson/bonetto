import { Label } from "@/components/ui/label";

type Props = {
  htmlFor: string;
  label: string;
};

const InputLabel = ({ htmlFor, label }: Props) => {
  return (
    <Label htmlFor={htmlFor} className="text-foreground text-base 2xl:text-lg">
      {label}
    </Label>
  );
};

export default InputLabel;