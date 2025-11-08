"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Data = { value: string; label: string; src?: string };
export type Endpoint = "businesses" | "capmodels";
type Props = {
  endpoint: Endpoint;
  placeholder: string;
};

const ComboBox = ({ endpoint, placeholder }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState<Data[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/list/${endpoint}`);

        if (!response.ok) {
          throw new Error("Não foi possível obter dados da API.");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Erro ao listar áreas de atuação:", error);
      }
    }
    fetchData();
  }, [endpoint]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? data.find((item) => item.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="z-60 w-[343px] bg-(--secondary-color) p-0 shadow/100 shadow-md shadow-black"
        collisionPadding={8}
        sideOffset={4}
        align="start"
      >
        <Command>
          <CommandInput placeholder="Buscar..." className="h-9" />

          <CommandList>
            <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>

            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setOpen(false);
                  }}
                >
                  {/* Opção */}
                  {item.label}

                  {/* Ícone de check */}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ComboBox;
