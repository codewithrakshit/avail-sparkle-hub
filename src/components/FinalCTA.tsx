import { Search, ArrowRight, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FinalCTA = () => {
  const highlights = [
    {
      icon: Star,
      text: "4.9/5 rating"
    },
    {
      icon: Users,
      text: "10,000+ students"
    },
    {
      icon: Clock,
      text: "24/7 availability"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-6">
        <Card className="card-elegant bg-card/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Ready to Transform Your Learning?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join thousands of students who have achieved their academic goals with BookWise. 
                Find your perfect teacher today and start your learning journey.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{highlight.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  className="btn-hero text-lg px-8 py-4 h-14"
                  onClick={() => window.location.href = '/search'}
                >
                  <Search className="h-5 w-5 mr-2" />
                  Find Your Teacher Now
                </Button>
                <Button 
                  variant="outline" 
                  className="btn-soft text-lg px-8 py-4 h-14"
                  onClick={() => window.location.href = '/how-it-works'}
                >
                  Learn How It Works
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                <p>✓ No commitment required ✓ 30-day money-back guarantee ✓ Start learning in minutes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTA;
