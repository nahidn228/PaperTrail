import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I purchase a book?",
    answer:
      "Simply browse our collection, add your favorite books to the cart, and proceed to checkout. You can securely pay using your preferred payment method.",
  },
  {
    question: "Do you offer digital (eBooks) versions?",
    answer:
      "Currently, we focus on physical books. However, we’re planning to add eBooks and audiobooks soon!",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 3–7 business days depending on your location. You’ll also receive a tracking number once your order ships.",
  },
  {
    question: "Can I return or exchange a book?",
    answer:
      "Yes, you can return or exchange a book within 7 days of delivery if it’s in its original condition. Please check our return policy for details.",
  },
  {
    question: "Do you offer discounts for bulk purchases?",
    answer:
      "Absolutely! We provide special discounts for bulk or institutional orders. Contact our support team for customized pricing.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us via the contact form, email, or phone number listed on our website. We usually respond within 24 hours.",
  },
];

const Faq = () => {
  return (
    <div className="max-w-2xl mx-auto my-16 ">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-base">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-balance">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
