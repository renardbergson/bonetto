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
}

const AccordionComponent = ({ items }: AccordionComponentProps) => {
  return (
    <Accordion className="mx-1" type="single" collapsible>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-base font-bold">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-base font-extralight">
            <p className="text-justify">{item.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
