import { Check, Star, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PricingSection = () => {
  const plans = [
    {
      name: "Pay Per Session",
      description: "Perfect for occasional learning",
      price: "From $25",
      period: "per hour",
      features: [
        "No monthly commitment",
        "Choose any teacher",
        "Flexible scheduling",
        "Cancel anytime",
        "24/7 support"
      ],
      popular: false,
      color: "border-border"
    },
    {
      name: "Monthly Package",
      description: "Best for regular learners",
      price: "$199",
      period: "per month",
      features: [
        "8 hours of tutoring",
        "Save 20% vs pay-per-session",
        "Priority booking",
        "Progress tracking",
        "Unlimited subject changes",
        "24/7 support"
      ],
      popular: true,
      color: "border-primary"
    },
    {
      name: "Premium Package",
      description: "For intensive learning",
      price: "$399",
      period: "per month",
      features: [
        "20 hours of tutoring",
        "Save 30% vs pay-per-session",
        "VIP teacher access",
        "Personalized learning plan",
        "Monthly progress reports",
        "Dedicated support manager",
        "24/7 support"
      ],
      popular: false,
      color: "border-accent"
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Top-Rated Teachers",
      description: "All teachers are vetted and rated 4.5+ stars"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your schedule"
    },
    {
      icon: Users,
      title: "One-on-One Learning",
      description: "Personalized attention for better results"
    },
    {
      icon: Award,
      title: "Money-Back Guarantee",
      description: "Not satisfied? Get your money back"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-primary-soft/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that works best for your learning goals. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`card-elegant hover-lift relative transition-all duration-300 border-2 ${plan.color} ${
                plan.popular ? 'scale-105 shadow-lg' : ''
              } animate-card-scroll`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'btn-hero' : 'btn-soft'}`}
                  onClick={() => window.location.href = '/search'}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-soft rounded-xl mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include our 30-day money-back guarantee
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="btn-soft">
              Compare Plans
            </Button>
            <Button className="btn-hero">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
