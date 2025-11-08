"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMask } from "@react-input/mask";
import { toast } from "sonner";
import validator from "validator";
import {
  UserOutlined,
  MailOutlined,
  MobileOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Loader2Icon } from "lucide-react";

import MainButton from "@/app/components/MainButton";
import ComboBox, { Endpoint } from "./comboBox";

const BudgetForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useMask({
    mask: "55 (__) _____-____",
    replacement: { _: /\d/ },
    showMask: true,
    separate: true,
  });

  const [emailValue, setEmailValue] = useState("");
  const emailIsValid = validator.isEmail(emailValue);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  useEffect(() => {
    if (dialogIsOpen) {
      // Remove o foco de qualquer elemento ativo
      setTimeout(() => {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }, 100);
    }
  }, [dialogIsOpen]);

  const [isPending, startTransition] = useTransition();

  function handleInvalidName() {
    toast.error("Por favor, informe seu nome corretamente!");
    return;
  }

  function handleInvalidEmail() {
    toast.error("Por favor, insira um endereço de e-mail válido!");
    return;
  }

  function handleInvalidPhone() {
    toast.error("Por favor, insira um número de telefone válido!");
    return;
  }

  function handleOpenDialog() {
    setDialogIsOpen((prevState) => !prevState);
  }

  function handleSubmitEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!emailIsValid) {
      handleInvalidEmail();
      return;
    }

    handleOpenDialog();
  }

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nameValue = nameRef.current?.value?.trim() || "";
    const nameIsValid = nameValue.length >= 3;
    if (!nameValue || !nameIsValid) {
      handleInvalidName();
      return;
    }
    const phoneValue = phoneRef.current?.value?.trim() || "";
    const numbersOnly = phoneValue.replace(/\D/g, "");
    const phoneIsValid =
      validator.isMobilePhone(numbersOnly, ["pt-BR"]) &&
      numbersOnly.length === 13;
    if (!phoneIsValid) {
      handleInvalidPhone();
      return;
    }

    const customerData = {
      nome: nameValue,
      email: emailValue,
      celular: phoneValue,
    };

    startTransition(async () => {
      try {
        const request = await fetch("/api/customers/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(customerData),
        });

        if (!request.ok) {
          toast.error("Desculpe! Ocorreu um erro na requisição.");
          throw new Error("Ocorreu um erro na requisição!");
        }

        setEmailValue("");
        handleOpenDialog();
        toast.success("Seus dados foram enviados com sucesso!");
      } catch (error) {
        console.error(`Erro ao processar dados do cliente: ${error}`);
        toast.error("Desculpe! Ocorreu um erro ao enviar seus dados.");
      }
    });
  }

  function handleFocusPhone(e: React.MouseEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    target.setSelectionRange(4, 4);
  }

  return (
    <>
      {/* E-MAIL FORM */}
      <form
        id="contact-form"
        className="mx-auto block w-72 max-w-full space-y-3 text-center lg:m-0"
        onSubmit={handleSubmitEmail}
        noValidate
      >
        <div className="space-y-4">
          <div>
            <p className="block text-sm font-extralight -tracking-tight text-(--secondary-color) sm:text-base lg:text-start">
              Que tal um orçamento personalizado? <br />
              Nós entramos em contato com você!
            </p>
          </div>

          <Input
            id="contact-email"
            type="email"
            placeholder="Insira seu melhor e-mail"
            className="inline-block w-64 bg-(--secondary-color) text-center text-base font-light -tracking-tight text-(--primary-color) focus-visible:ring-1 focus-visible:ring-(--secondary-color) sm:w-72 sm:tracking-wider md:text-[15px] md:tracking-widest lg:text-[16px] lg:font-extralight lg:tracking-wider"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>

        <MainButton
          style="primary"
          variant="outline"
          asChild={false}
          className="mx-auto mt-4 w-[70%] text-sm -tracking-tight sm:text-base"
          type="submit"
        >
          <span>Enviar contato</span>
        </MainButton>
      </form>

      {/* DIALOG FORM */}
      <Dialog open={dialogIsOpen} modal={false} onOpenChange={handleOpenDialog}>
        <DialogContent className="bg-(--secondary-color) duration-300 ease-out sm:max-w-[425px]">
          <form onSubmit={handleSubmitForm} noValidate className="space-y-8">
            <div>
              <DialogHeader>
                <DialogTitle className="text-center font-extrabold text-(--primary-color) 2xl:text-lg">
                  Quase lá!
                </DialogTitle>

                <DialogDescription className="mx-auto w-[80%] text-center text-base font-extralight text-(--primary-color) sm:text-lg">
                  Complete seus dados e entraremos em contato o mais breve
                  possível.
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Campos textuais */}
            <div className="space-y-5">
              {[
                {
                  ref: nameRef,
                  label: "name",
                  text: "Nome",
                  type: "text",
                  icon: UserOutlined,
                  placeholder: "Insira seu nome",
                },
                {
                  label: "email",
                  text: "E-mail",
                  type: "email",
                  value: emailValue,
                  icon: MailOutlined,
                  placeholder: "Insira seu e-mail",
                },
                {
                  ref: phoneRef,
                  label: "phone",
                  text: "Celular / Whatsapp",
                  type: "tel",
                  icon: MobileOutlined,
                  placeholder: "Insira seu telefone",
                  onClick: handleFocusPhone,
                },
              ].map(
                (
                  { ref, label, text, type, value, icon, placeholder, onClick },
                  index,
                ) => {
                  const Icon = icon;

                  return (
                    <div
                      key={index}
                      className="space-y-1 text-(--primary-color)"
                    >
                      <Label className="font-sans" htmlFor={label}>
                        {text}
                      </Label>

                      <div className="relative">
                        <Icon className="absolute top-[11px] left-2" />

                        <Input
                          readOnly={Boolean(value)}
                          ref={ref && ref}
                          aria-label={label}
                          id={label}
                          name={label}
                          type={type}
                          value={value && value}
                          placeholder={placeholder}
                          className="pl-8 font-extralight focus-visible:ring-1 focus-visible:ring-(--tertiary-color) sm:text-lg md:text-[17px] lg:text-[18px]"
                          autoComplete="nope"
                          onClick={onClick && onClick}
                          onChange={() => console.log("change")}
                        />
                      </div>
                    </div>
                  );
                },
              )}

              {/* Campos de Seleção */}
              {[
                {
                  label: "Modelo desejado",
                  placeholder: "Selecione um modelo...",
                  endpoint: "capmodels",
                },
                {
                  label: "Segmento da sua empresa",
                  placeholder: "Selecione uma área...",
                  endpoint: "businesses",
                },
              ].map(({ label, placeholder, endpoint }, index) => {
                return (
                  <div key={index} className="space-y-1 text-(--primary-color)">
                    <Label className="font-sans">{label}</Label>

                    <ComboBox
                      endpoint={endpoint as Endpoint}
                      placeholder={placeholder}
                    />
                  </div>
                );
              })}
            </div>

            {/* Botão Enviar */}
            <DialogFooter className="mt-10 block text-center">
              <MainButton
                asChild={false}
                style="primary"
                variant="outline"
                type="submit"
                disabled={isPending}
                className="w-[70%]"
              >
                {isPending && <Loader2Icon className="size-4 animate-spin" />}
                {isPending ? "Enviando..." : "Enviar"}
              </MainButton>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BudgetForm;
