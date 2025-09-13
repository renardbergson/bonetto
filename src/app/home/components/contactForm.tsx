"use client";

import { useState } from "react";

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

import { MyButton } from "@/app/components/MyButton";

const ContactForm = () => {
  const inputRef = useMask({
    mask: "+55 (__) _____-____",
    replacement: { _: /\d/ },
    showMask: true,
    separate: true,
  });
  const [email, setEmail] = useState("");
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  function handleOpenDialog() {
    setDialogIsOpen((prevState) => !prevState);
  }

  function handleSubmitEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleOpenDialog();
  }

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEmail("");
    handleOpenDialog();
  }

  return (
    <>
      <form
        className="mx-auto block w-[80%] text-center"
        onSubmit={handleSubmitEmail}
      >
        <div>
          <p className="block text-sm font-extralight text-[var(--secondary-color)]">
            Precisa de um orçamento personalizado?
          </p>

          <p className="block text-sm font-extralight text-[var(--secondary-color)]">
            Nós entramos em contato com você!
          </p>

          <Input
            id="contact-email"
            type="email"
            placeholder="Insira seu melhor e-mail"
            className="mt-3 bg-[var(--secondary-color)] text-center font-extralight text-[var(--primary-color)] focus-visible:ring-1 focus-visible:ring-[var(--secondary-color)]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <MyButton
          variant="primary"
          asChild={false}
          className="mx-auto mt-4"
          type="submit"
        >
          <span>Enviar contato</span>
        </MyButton>
      </form>

      <Dialog open={dialogIsOpen} onOpenChange={handleOpenDialog}>
        <DialogContent className="bg-[var(--secondary-color)] sm:max-w-[425px]">
          <form onSubmit={handleSubmitForm}>
            <DialogHeader>
              <DialogTitle className="text-[var(--primary-color)]">
                Quase lá!
              </DialogTitle>

              <DialogDescription className="mx-auto w-[70%] font-extralight text-[var(--primary-color)]">
                Complete seus dados e entraremos em contato o mais breve
                possível.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
              <div className="grid gap-3 text-[var(--primary-color)]">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  className="font-extralight focus-visible:ring-1 focus-visible:ring-[var(--tertiary-color)]"
                />
              </div>

              <div className="grid gap-3 text-[var(--primary-color)]">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="font-extralight focus-visible:ring-1 focus-visible:ring-[var(--tertiary-color)]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="grid gap-3 text-[var(--primary-color)]">
                <Label htmlFor="phone">Telefone / Whatsapp</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="font-extralight focus-visible:ring-1 focus-visible:ring-[var(--tertiary-color)]"
                  ref={inputRef}
                />
              </div>
            </div>

            <DialogFooter className="mt-4 block text-center">
              <MyButton asChild={false} variant="secondary" type="submit">
                Enviar
              </MyButton>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;
