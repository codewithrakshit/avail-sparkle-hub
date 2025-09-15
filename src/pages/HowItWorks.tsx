import { useState } from "react";
import { Search, Calendar, CheckCircle, Users, Star, Clock, BookOpen, ArrowRight, Play, MessageCircle, CreditCard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Search,
      title: "Find Your Perfect Teacher",
      description: "Browse our extensive database of qualified educators. Filter by subject, availability, rating, and price to find the ideal match for your learning needs.",
      details: [
        "Search by subject or teacher name",
        "Filter by availability and rating",
        "Read detailed teacher profiles",
        "Compare hourly rates and specialties"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Calendar,
      title: "Select Your Time Slot",
      description: "Choose from available appointment times that work with your schedule. Our calendar shows real-time availability for each teacher.",
      details: [
        "View real-time availability",
        "Choose from multiple time slots",
        "See teacher's weekly schedule",
        "Book recurring sessions"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: CheckCircle,
      title: "Start Learning",
      description: "Confirm your booking and join your session. Get instant access to meeting links, materials, and communication tools.",
      details: [
        "Instant booking confirmation",
        "Automatic meeting link generation",
        "Access to learning materials",
        "Direct communication with teacher"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const features = [
    {
      icon: Users,
      title: "500+ Expert Teachers",
      description: "Carefully vetted educators across 50+ subjects"
    },
    {
      icon: Star,
      title: "4.9 Average Rating",
      description: "High-quality teaching with proven results"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Book sessions anytime, anywhere in the world"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Safe and encrypted payment processing"
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Personalized Learning",
      description: "One-on-one sessions tailored to your learning style and pace"
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Chat with your teacher before and after sessions"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Pay per session with no long-term commitments"
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Reschedule or cancel sessions with 24-hour notice"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex flex-col">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2 hover-scale">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BW</span>
              </div>
              <span className="text-xl font-bold text-foreground">BookWise</span>
            </a>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/search" className="text-muted-foreground hover:text-foreground transition-colors">Find Teachers</a>
              <a href="/how-it-works" className="text-foreground font-medium">How it Works</a>
              <Button variant="outline" className="btn-soft">Sign In</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            How BookWise Works
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with expert teachers in just three simple steps. Start your learning journey today with our intuitive booking platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4" onClick={() => window.location.href = '/search'}>
              <Search className="h-5 w-5 mr-2" />
              Find Teachers Now
            </Button>
            <Button variant="outline" className="btn-soft text-lg px-8 py-4">
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Steps Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Three Simple Steps</h2>
            <p className="text-xl text-muted-foreground">From finding a teacher to starting your first session</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index}
                  className={`card-elegant hover-lift cursor-pointer transition-all duration-300 ${
                    activeStep === index ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <CardHeader className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${step.bgColor}`}>
                      <Icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center mb-4">{step.description}</p>
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Step Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index ? 'bg-primary scale-125' : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose BookWise?</h2>
            <p className="text-xl text-muted-foreground">Trusted by thousands of students worldwide</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-elegant text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-soft rounded-xl mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Learning Benefits</h2>
            <p className="text-xl text-muted-foreground">Everything you need for successful online learning</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="card-elegant hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-soft rounded-xl flex-shrink-0">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="card-elegant bg-gradient-to-r from-primary-soft to-accent-soft border-0">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Start Learning?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of students who are already learning with BookWise. Find your perfect teacher today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero text-lg px-8 py-4" onClick={() => window.location.href = '/search'}>
                  <Search className="h-5 w-5 mr-2" />
                  Browse Teachers
                </Button>
                <Button variant="outline" className="btn-soft text-lg px-8 py-4">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
