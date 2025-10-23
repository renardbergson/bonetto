import Logo from "./Logo";
import ContactForm from "@/app/home/components/contactForm";

import Link from "next/link";
import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer
      className="space-y-20 bg-[var(--primary-color)] px-6 py-12 text-[var(--secondary-color)]"
      id="footer"
    >
      <div className="text-center">
        <Logo className="mx-auto" />

        <p className="mx-auto block w-[60%] text-center text-sm leading-6 font-extralight -tracking-tight sm:text-base">
          Bonés personalizados que <br /> elevam sua identidade visual.
        </p>
      </div>

      <div className="space-y-4">
        <p className="block text-center text-sm font-extralight -tracking-tight sm:text-base">
          Estamos nas principais redes sociais!
        </p>

        <div className="flex justify-center gap-9">
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
            href={`https://wa.me/${process.env.NEXT_PUBLIC_COMPANY_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsAppOutlined className="text-2xl" />
          </Link>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <MailOutlined className="text-1xl" />
        <p className="text-sm font-extralight tracking-widest sm:text-base">
          bonettocustomcaps@gmail.com
        </p>
      </div>

      <ContactForm />

      <div className="text-center text-sm -tracking-tight sm:text-base">
        <p className="font-extralight">
          © 2025. Todos os direitos reservados.
        </p>
        <p className="font-extralight">CNPJ: 62.420.184/0001-04</p>
      </div>
    </footer>
  );
};

export default Footer;
