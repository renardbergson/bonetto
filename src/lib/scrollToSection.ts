export type scrollHandler = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
) => void;

const scrollToSection: scrollHandler = (e, id) => {
  e.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default scrollToSection;
