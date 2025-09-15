
import { useState, useEffect } from "react";
import { CheckCircle2, Calendar, Clock, User, Mail, Phone, CalendarPlus, ArrowLeft, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import teacher1 from "@/assets/teacher-1.jpg";

const BookingConfirmation = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    // Trigger animations sequence
    const timeouts = [
      setTimeout(() => setAnimationStep(1), 300),
      setTimeout(() => setAnimationStep(2), 600),
      setTimeout(() => setShowConfetti(true), 900),
      setTimeout(() => setShowConfetti(false), 3000)
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Mock booking data (in real app, get from URL params or context)
  const bookingDetails = {
    id: "BW-2024-001",
    student: {
      name: "Alex Chen",
      email: "alex.chen@email.com",
      phone: "+1 (555) 123-4567"
    },
    teacher: {
      name: "Dr. Sarah Johnson",
      image: teacher1,
      subject: "Mathematics",
      title: "Ph.D. in Applied Mathematics"
    },
    appointment: {
      date: "Wednesday, March 15, 2024",
      time: "3:00 PM - 4:00 PM",
      duration: "1 hour",
      timezone: "PST"
    },
    meeting: {
      link: "https://meet.bookwise.app/bw-2024-001",
      id: "BW-2024-001",
      passcode: "Math123"
    },
    rate: 45,
    total: 45
  };

  const Confetti = () => (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        >
          <div className="w-2 h-2 bg-primary rounded-full opacity-80" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-soft/10 to-accent-soft/10 flex flex-col">
      {showConfetti && <Confetti />}
      
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2 hover-scale">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BW</span>
              </div>
              <span className="text-xl font-bold text-foreground">BookWise</span>
            </a>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Receipt
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 transition-all duration-500 ${
              animationStep >= 1 ? 'bg-success scale-100' : 'bg-muted scale-0'
            }`}>
              <CheckCircle2 className={`h-12 w-12 text-card transition-all duration-500 ${
                animationStep >= 2 ? 'scale-100' : 'scale-0'
              }`} />
            </div>
            
            <div className={`transition-all duration-500 ${animationStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="text-4xl font-bold text-foreground mb-4">Appointment Confirmed!</h1>
              <p className="text-xl text-muted-foreground">
                Your session with {bookingDetails.teacher.name} has been successfully booked.
              </p>
            </div>
          </div>

          {/* Booking Details Card */}
          <Card className="card-elegant mb-8 animate-scale-in">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground">Booking Details</h2>
                <Badge variant="secondary" className="bg-success-soft text-success">
                  Confirmed
                </Badge>
              </div>

              {/* Teacher Info */}
              <div className="flex items-center space-x-4 mb-8 p-4 bg-secondary/30 rounded-2xl">
                <img
                  src={bookingDetails.teacher.image}
                  alt={bookingDetails.teacher.name}
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{bookingDetails.teacher.name}</h3>
                  <p className="text-muted-foreground">{bookingDetails.teacher.title}</p>
                  <p className="text-primary font-medium">{bookingDetails.teacher.subject}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">${bookingDetails.rate}</div>
                  <div className="text-sm text-muted-foreground">per hour</div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Date</div>
                      <div className="text-muted-foreground">{bookingDetails.appointment.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Time</div>
                      <div className="text-muted-foreground">
                        {bookingDetails.appointment.time} ({bookingDetails.appointment.timezone})
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Student</div>
                      <div className="text-muted-foreground">{bookingDetails.student.name}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">{bookingDetails.student.email}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meeting Details */}
              <div className="p-6 bg-primary-soft rounded-2xl mb-6">
                <h3 className="font-semibold text-foreground mb-4">Meeting Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Meeting Link:</span>
                    <a
                      href={bookingDetails.meeting.link}
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Meeting
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Meeting ID:</span>
                    <code className="bg-card px-2 py-1 rounded text-sm font-mono">
                      {bookingDetails.meeting.id}
                    </code>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Passcode:</span>
                    <code className="bg-card px-2 py-1 rounded text-sm font-mono">
                      {bookingDetails.meeting.passcode}
                    </code>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-6 border-t border-border">
                <span className="text-lg font-medium text-foreground">Total</span>
                <span className="text-2xl font-bold text-foreground">${bookingDetails.total}</span>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex justify-center">
              <Button className="btn-hero h-12 px-8">
                <CalendarPlus className="h-4 w-4 mr-2" />
                Add to Calendar
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-12">
                Book Another Session
              </Button>
              <Button variant="outline" className="h-12">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Search
              </Button>
            </div>
          </div>

          {/* Next Steps */}
          <Card className="card-elegant mt-8 animate-slide-up">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">What's Next?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Check your email</div>
                    <div className="text-sm text-muted-foreground">
                      We've sent confirmation details and the meeting link to {bookingDetails.student.email}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Prepare for your session</div>
                    <div className="text-sm text-muted-foreground">
                      Gather any materials or questions you'd like to discuss during the appointment
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Join the meeting</div>
                    <div className="text-sm text-muted-foreground">
                      Click the meeting link 5 minutes before your scheduled time
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <div className="text-center mt-8 text-muted-foreground">
            <p>Need help? <a href="#" className="text-primary hover:text-primary/80 transition-colors">Contact Support</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingConfirmation;