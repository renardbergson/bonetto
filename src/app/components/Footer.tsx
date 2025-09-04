import Logo from "./Logo";
import ContactForm from "@/app/home/components/contactForm";

import {
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="space-y-10 bg-[var(--primary-color)] px-6 py-12 text-[var(--secondary-color)]">
      <div className="text-center">
        <Logo className="mx-auto w-[35%]" />

        <p className="mx-auto block w-[60%] text-center font-extralight">
          Bonés personalizados que elevam sua identidade visual.
        </p>
      </div>

      <div className="flex justify-center gap-8">
        <FacebookOutlined className="text-2xl" />
        <InstagramOutlined className="text-2xl" />
        <TikTokOutlined className="text-2xl" />
      </div>

      <div className="text-center">
        <p className="font-extralight">contato@usebonetto.com.br</p>
        <p className="font-extralight">+55 84 99624-7281</p>
      </div>

      <ContactForm />

      <div className="text-center">
        <p className="font-extralight">
          © 2025. Todos os direitos reservados.
        </p>
        <p className="font-extralight">CNPJ: 48.671.715/0001-00</p>
      </div>
    </footer>
  );
};

export default Footer;
