import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Is the camp really free?",
    answer: "Yes. Speech Spark is a non-profit student-led initiative. Our coaches volunteer their time. Students and families pay nothing - no tuition, no materials fee, no late charges."
  },
  {
    question: "What are the age requirements?",
    answer: "4th through 9th grade. The curriculum is made for absolute beginners as well as students who already compete in local circuits."
  },
  {
    question: "Do students need debate experience to join?",
    answer: "No. Most of our students have either never debated before, or are trying a new style of debate. We first do a test meeting and evaluate our students' abilities, and then split them up into groups varying in difficulty. For beginners, we start with the basics - what a flow is, how a round runs, how to write a contention - and ramp into mock rounds by the end of camp."
  },
  {
    question: "Where are camps held?",
    answer: "Our current camps involve weekly 1-2 hour sessions both online and at partner schools across the area. If your school isn't on our list yet, have an administrator or PTA contact us - we set up new sites every season."
  },
  {
    question: "Who are the coaches?",
    answer: "Our coaching team is made of officers and varsity debaters here at Thomas Jefferson High School for Science and Technology. Many of our coaches are state and national qualifiers, and have past experience with teaching debate."
  },
  {
    question: "How do I bring Speech Spark to my school?",
    answer: "Use the contact form above and select 'School / Educator Inquiry'. We'll send a one-page program overview, sample schedule, and the volunteer paperwork our coaches complete."
  }
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Header & CTA */}
          <div className="lg:sticky lg:top-8">
            <span className="inline-block text-accent font-semibold mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Questions from families, students, schools, and PTAs about the free debate program for grades 4–9.
            </p>
            
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-xl font-bold font-display text-foreground mb-3">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-4">
                Call or submit the form above and choose the inquiry type that fits you.
              </p>
              <a href="tel:5713891747">
                <Button variant="accent" size="lg" className="w-full">
                  <Phone className="h-5 w-5" />
                  5713891747
                </Button>
              </a>
            </div>
          </div>

          {/* Right - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
