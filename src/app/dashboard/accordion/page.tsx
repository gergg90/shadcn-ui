import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: 1,
    name: "Item 1",
    question: "¿Cuál es la capital de Francia?",
    answer: "París",
  },
  {
    id: 2,
    name: "Item 2",
    question: "¿Cuál es la fórmula química del agua?",
    answer: "H2O",
  },
  {
    id: 3,
    name: "Item 3",
    question: "¿En qué año llegó el hombre a la luna?",
    answer: "1969",
  },
  {
    id: 4,
    name: "Item 4",
    question: "¿Quién escribió 'Don Quijote de la Mancha'?",
    answer: "Miguel de Cervantes",
  },
  {
    id: 5,
    name: "Item 5",
    question: "¿Cuál es el animal terrestre más rápido?",
    answer: "El guepardo",
  },
];

function AccordionPage() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) => (
        <AccordionItem value={item.name} key={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionPage;
