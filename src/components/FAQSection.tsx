import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How do I book a session with a teacher?",
      answer: "Simply search for teachers by subject, browse their profiles, and click 'Book Now' to select an available time slot. You'll receive instant confirmation and meeting details."
    },
    {
      question: "What subjects are available on BookWise?",
      answer: "We offer 50+ subjects including Mathematics, Computer Science, Languages, Sciences, Business, Arts, Music, Test Prep, and more. If you don't see your subject, you can request a teacher."
    },
    {
      question: "How much does tutoring cost?",
      answer: "Prices vary by teacher and subject, starting from $25/hour. We also offer monthly packages that provide significant savings. All pricing is transparent with no hidden fees."
    },
    {
      question: "Can I reschedule or cancel my session?",
      answer: "Yes! You can reschedule or cancel sessions up to 24 hours in advance at no cost. Cancellations within 24 hours may incur a fee depending on the teacher's policy."
    },
    {
      question: "What technology do I need for online sessions?",
      answer: "You just need a computer, tablet, or smartphone with internet connection. We provide meeting links that work in any web browser. No special software required!"
    },
    {
      question: "How are teachers vetted and qualified?",
      answer: "All teachers undergo a rigorous screening process including background checks, qualification verification, and teaching assessments. We only accept teachers with proven expertise and excellent ratings."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with your learning experience, we'll refund your payment, no questions asked."
    },
    {
      question: "Can I book sessions with the same teacher regularly?",
      answer: "Absolutely! Many students work with the same teacher for ongoing support. You can book recurring sessions and build a long-term learning relationship with your preferred teachers."
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about learning with BookWise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="card-elegant hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Collapsible 
                  open={openItems.includes(index)} 
                  onOpenChange={() => toggleItem(index)}
                >
                  <CollapsibleTrigger asChild>
                    <CardContent className="p-6 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-foreground pr-4">
                          {faq.question}
                        </h3>
                        {openItems.includes(index) ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="pt-0 px-6 pb-6">
                      <div className="border-t border-border/50 pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="btn-soft">
              Contact Support
            </Button>
            <Button className="btn-hero">
              Start Learning Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
