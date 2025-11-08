import Title from "./Title";

import {
  WhatsAppOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const SocialMedia = () => {
  const socialMedia = [
    {
      href: `https://wa.me/${process.env.NEXT_PUBLIC_COMPANY_WHATSAPP_NUMBER}`,
      ariaLabel: "Whatsapp",
      icon: WhatsAppOutlined,
    },
    {
      href: "https://www.instagram.com/seubonetto",
      ariaLabel: "Instagram",
      icon: InstagramOutlined,
    },
    {
      href: "https://www.linkedin.com/in/bonetto-bonés-personalizados-0462b6381",
      ariaLabel: "LinkedIn",
      icon: LinkedinOutlined,
    },
    {
      href: "https://www.facebook.com/people/Seubonetto/61578306574212",
      ariaLabel: "Facebook",
      icon: FacebookOutlined,
    },
    {
      href: "https://www.tiktok.com/@seubonetto",
      ariaLabel: "TikTok",
      icon: TikTokOutlined,
    },
  ];

  return (
    <section className="space-y-4">
      <Title title="Conecte-se conosco" />

      <nav>
        <ul className="flex list-none justify-center gap-4 text-(--quaternary-color) lg:justify-start">
          {socialMedia.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                aria-label={link.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-(--tertiary-color) transition-all duration-300 hover:scale-110 hover:bg-(--secondary-color) hover:text-(--primary-color)"
              >
                <link.icon className="text-primary group-hover:text-primary-foreground text-2xl transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default SocialMedia;
