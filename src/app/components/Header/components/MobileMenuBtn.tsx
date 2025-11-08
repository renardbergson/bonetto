import { Menu } from "lucide-react";

type Props = {
  handleMobileMenu: () => void;
  className?: string;
};

const MobileMenuBtn = ({ handleMobileMenu, className }: Props) => {
  return (
    <button className={className} onClick={handleMobileMenu}>
      {<Menu />}
    </button>
  );
};

export default MobileMenuBtn;
