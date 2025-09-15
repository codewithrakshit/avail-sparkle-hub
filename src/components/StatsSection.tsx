import { Users, BookOpen, Star, Clock, Award, Globe } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Expert Teachers",
      description: "Carefully vetted educators"
    },
    {
      icon: BookOpen,
      number: "50+",
      label: "Subjects",
      description: "From math to languages"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Average Rating",
      description: "Based on 10,000+ reviews"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Availability",
      description: "Book sessions anytime"
    },
    {
      icon: Award,
      number: "10,000+",
      label: "Happy Students",
      description: "Successful learning journeys"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries",
      description: "Students worldwide"
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Trusted by Students Worldwide</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a global community of learners who have achieved their academic goals with BookWise
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center animate-scale-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-soft rounded-2xl mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-sm">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
