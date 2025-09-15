import { useState } from "react";
import { Search, Calendar, BookOpen, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroIllustration from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const steps = [
    {
      icon: Search,
      title: "Find a Teacher",
      description: "Search by subject or teacher name"
    },
    {
      icon: Calendar,
      title: "Select Time Slot",
      description: "Choose from available appointments"
    },
    {
      icon: CheckCircle,
      title: "Start Learning",
      description: "Confirm and begin your session"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-soft/20 to-accent-soft/20">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">BookWise</span>
          </div>
            <div className="hidden md:flex space-x-6">
              <a href="/search" className="text-muted-foreground hover:text-foreground transition-colors">Find Teachers</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
              <Button variant="outline" className="btn-soft">Sign In</Button>
            </div>
        </nav>
      </header>

      {/* Hero Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Find Available Teachers
              <span className="text-primary block">Book with Ease</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with expert teachers instantly. Schedule appointments seamlessly 
              and start your learning journey today.
            </p>
            
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="flex bg-card rounded-2xl shadow-lg p-2 hover-lift">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Search subjects or teacher names..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-4 border-0 bg-transparent text-lg placeholder:text-muted-foreground"
                  />
                </div>
                <Button className="btn-hero">
                  <a href="/search" className="text-inherit">Search Teachers</a>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Expert Teachers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-muted-foreground">Happy Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Subjects</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src={heroIllustration} 
                alt="Students connecting with teachers through digital platforms"
                className="w-full rounded-3xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <section className="mt-24">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to start learning</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index} 
                  className="text-center animate-scale-in hover-lift"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-soft rounded-2xl mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HeroSection;