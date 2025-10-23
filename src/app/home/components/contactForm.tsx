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
import { UserOutlined, MailOutlined, MobileOutlined } from "@ant-design/icons";
import { Loader2Icon } from "lucide-react";

import MainButton from "@/app/components/MainButton";

const ContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useMask({
    mask: "55 (__) _____-____",
    replacement: { _: /\d/ },
    showMask: true,
    separate: true,
  });
  const [emailValue, setEmailValue] = useState("");
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const emailIsValid = validator.isEmail(emailValue);

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
        className="mx-auto block w-72 max-w-full space-y-3 text-center sm:w-80"
        onSubmit={handleSubmitEmail}
        noValidate
      >
        <div className="space-y-4">
          <div>
            <p className="block text-sm font-extralight -tracking-tight text-[var(--secondary-color)] sm:text-base">
              Precisa de um orçamento personalizado? <br />
              Nós entramos em contato com você!
            </p>
          </div>

          <Input
            id="contact-email"
            type="email"
            placeholder="Insira seu melhor e-mail"
            className="inline-block w-64 bg-[var(--secondary-color)] text-center text-base font-extralight -tracking-tight text-[var(--primary-color)] focus-visible:ring-1 focus-visible:ring-[var(--secondary-color)] sm:w-72"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>

        <MainButton
          style="primary"
          variant="outline"
          asChild={false}
          className="mx-auto mt-4 text-sm -tracking-tight sm:text-base"
          type="submit"
        >
          <span>Enviar contato</span>
        </MainButton>
      </form>

      {/* DIALOG FORM */}
      <Dialog open={dialogIsOpen} onOpenChange={handleOpenDialog}>
        <DialogContent className="bg-[var(--secondary-color)] duration-300 ease-out sm:max-w-[425px]">
          <form onSubmit={handleSubmitForm} noValidate className="space-y-8">
            <div>
              <DialogHeader>
                <DialogTitle className="font-extrabold text-[var(--primary-color)]">
                  Quase lá!
                </DialogTitle>

                <DialogDescription className="mx-auto w-[80%] text-base font-extralight text-[var(--primary-color)]">
                  Complete seus dados e entraremos em contato o mais breve
                  possível.
                </DialogDescription>
              </DialogHeader>
            </div>

            <div className="space-y-4">
              <div className="space-y-1 text-[var(--primary-color)]">
                <Label htmlFor="name">Nome</Label>
                <div className="relative">
                  <UserOutlined className="absolute top-[11px] left-2" />
                  <Input
                    ref={nameRef}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Insira seu nome"
                    className="pl-8 font-extralight focus-visible:ring-1 focus-visible:ring-[var(--tertiary-color)]"
                    autoComplete="nope"
                  />
                </div>
              </div>

              <div className="space-y-1 text-[var(--primary-color)]">
                <Label htmlFor="email">E-mail</Label>
                <div className="relative">
                  <MailOutlined className="absolute top-[11px] left-2" />
                  <Input
                    readOnly
                    id="email"
                    name="email"
                    type="email"
                    className="pl-8 font-extralight focus-visible:ring-1 focus-visible:ring-[var(--tertiary-color)]"
                    value={emailValue}
                  />
                </div>
              </div>

              <div className="space-y-1 text-[var(--primary-color)]">
                <Label htmlFor="phone">Celular / Whatsapp</Label>
                <div className="relative">
                  <MobileOutlined className="absolute top-[11px] left-2" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="pl-8 font-extralight focus-visible:ring-1 focus-visible:ring-[var(--tertiary-color)]"
                    ref={phoneRef}
                    onClick={handleFocusPhone}
                    autoComplete="nope"
                  />
                </div>
              </div>
            </div>

            <DialogFooter className="mt-6 block text-center">
              <MainButton
                asChild={false}
                style="primary"
                variant="outline"
                type="submit"
                disabled={isPending}
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

export default ContactForm;
