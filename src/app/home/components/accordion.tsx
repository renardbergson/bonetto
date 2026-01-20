import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ContentProps {
  title: string;
  content: string;
}

interface AccordionComponentProps {
  items: ContentProps[];
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}

const AccordionComponent = ({
  items,
  className,
  ...props
}: AccordionComponentProps) => {
  return (
    <Accordion
      className={`mx-1 ${className}`}
      type="single"
      collapsible
      {...props}
    >
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-base font-bold hover:cursor-pointer 2xl:text-lg">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-base font-extralight sm:leading-8 2xl:text-lg">
            <p className="text-justify">{item.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
