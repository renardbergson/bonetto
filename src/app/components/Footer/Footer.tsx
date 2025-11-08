"use client";

import {
  DecorativeBorder,
  FooterLogo,
  SocialMedia,
  Links,
  OpeningHours,
  Contact,
  Copyright,
} from "./components";

import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="relative bg-(--primary-color)" id="footer">
      <DecorativeBorder />

      <div className="m-10 place-items-center space-y-24 text-(--secondary-color) lg:grid lg:grid-cols-3 lg:gap-4 lg:gap-y-36">
        <div className="space-y-24 lg:col-span-3 lg:m-0 lg:flex lg:w-full lg:justify-evenly">
          <div className="space-y-4 text-center md:space-y-6 lg:mb-0">
            <FooterLogo />
          </div>

          <div className="col-start-3 text-center md:space-y-6 lg:mb-0">
            <SocialMedia />
          </div>
        </div>

        <div className="space-y-24 lg:col-span-3 lg:m-0 lg:flex lg:w-full lg:justify-evenly">
          <Links />

          <OpeningHours />
        </div>

        <Contact />
      </div>

      <Separator className="bg-(--tertiary-color)" />

      <Copyright />
    </footer>
  );
};

export default Footer;
