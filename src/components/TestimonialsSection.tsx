import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Computer Science Student",
      university: "Stanford University",
      image: teacher2,
      rating: 5,
      text: "BookWise transformed my learning experience. My calculus tutor helped me go from failing to getting an A+. The one-on-one sessions made all the difference.",
      subject: "Mathematics"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "High School Student",
      university: "Lincoln High School",
      image: teacher3,
      rating: 5,
      text: "I was struggling with Spanish until I found my teacher on BookWise. Now I'm fluent and even got accepted to study abroad in Madrid!",
      subject: "Languages"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Graduate Student",
      university: "MIT",
      image: teacher1,
      rating: 5,
      text: "The flexibility of scheduling sessions around my research work is incredible. My physics tutor is amazing and always available when I need help.",
      subject: "Physics"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Working Professional",
      university: "Self-Employed",
      image: teacher2,
      rating: 5,
      text: "Learning Python through BookWise helped me transition into data science. The practical approach and real-world examples were exactly what I needed.",
      subject: "Computer Science"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Medical Student",
      university: "Johns Hopkins",
      image: teacher3,
      rating: 5,
      text: "Organic chemistry was my nightmare until I found the perfect tutor. The step-by-step explanations and practice problems made everything click.",
      subject: "Chemistry"
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Business Student",
      university: "Wharton School",
      image: teacher1,
      rating: 5,
      text: "My economics tutor helped me understand complex theories through real-world examples. I aced my finals and got an internship at Goldman Sachs!",
      subject: "Economics"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-soft/30 to-accent-soft/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Students Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful students who have transformed their learning with BookWise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="card-elegant hover-lift animate-card-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                
                <Quote className="h-6 w-6 text-primary mb-4 opacity-50" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.university}</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="inline-block px-3 py-1 bg-primary-soft text-primary text-sm rounded-full">
                    {testimonial.subject}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <Star className="h-5 w-5 fill-warning text-warning" />
            <span className="text-lg font-semibold">4.9/5</span>
            <span>average rating from 10,000+ students</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
