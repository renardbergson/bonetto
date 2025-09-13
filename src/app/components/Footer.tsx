import Logo from "./Logo";
import ContactForm from "@/app/home/components/contactForm";

import Link from "next/link";
import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="space-y-11 bg-[var(--primary-color)] px-6 py-12 text-[var(--secondary-color)]">
      <div className="text-center">
        <Logo className="mx-auto w-[35%]" />

        <p className="mx-auto block w-[60%] text-center text-sm font-extralight">
          Bonés personalizados que elevam sua identidade visual.
        </p>
      </div>

      <div className="flex justify-center gap-8">
        <Link
          href="https://www.linkedin.com/in/bonetto-bonés-personalizados-0462b6381"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinOutlined className="text-2xl" />
        </Link>

        <Link
          href="https://www.facebook.com/people/Seubonetto/61578306574212"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookOutlined className="text-2xl" />
        </Link>

        <Link
          href="https://www.instagram.com/seubonetto"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramOutlined className="text-2xl" />
        </Link>

        <Link
          href="https://www.tiktok.com/@seubonetto"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <TikTokOutlined className="text-2xl" />
        </Link>

        <Link
          href="https://wa.me/5584996247281"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <WhatsAppOutlined className="text-2xl" />
        </Link>
      </div>

      <div className="text-center">
        <p className="text-sm font-extralight tracking-wider">
          bonettocustomcaps@gmail.com
        </p>
      </div>

      <ContactForm />

      <div className="text-center">
        <p className="text-sm font-extralight">
          © 2025. Todos os direitos reservados.
        </p>
        <p className="text-sm font-extralight">CNPJ: 62.420.184/0001-04</p>
      </div>
    </footer>
  );
};

export default Footer;
