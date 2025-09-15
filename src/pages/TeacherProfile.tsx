import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Star, MapPin, Clock, Calendar, Share2, Heart, ChevronLeft, Award, BookOpen, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";

const TeacherProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<{ date: string; time: string } | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTab, setSelectedTab] = useState("overview");

  // Mock teacher data (in real app, fetch by ID)
  const teacher = {
    id: id || "1",
    name: "Dr. Sarah Johnson",
    image: teacher1,
    subject: "Mathematics",
    title: "Ph.D. in Applied Mathematics",
    location: "Stanford, CA",
    specialties: ["Calculus", "Statistics", "Algebra", "Linear Algebra", "Differential Equations"],
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 45,
    totalStudents: 340,
    lessonsCompleted: 1250,
    experience: "8 years",
    responseTime: "< 1 hour",
    languages: ["English", "Spanish"],
    isAvailable: true,
    bio: "I'm passionate about making mathematics accessible and enjoyable for students of all levels. With over 8 years of teaching experience and a Ph.D. in Applied Mathematics from Stanford, I specialize in helping students build strong foundations in mathematical concepts while developing problem-solving skills that extend beyond the classroom.",
    education: [
      { degree: "Ph.D. in Applied Mathematics", school: "Stanford University", year: "2016" },
      { degree: "M.S. in Mathematics", school: "MIT", year: "2012" },
      { degree: "B.S. in Mathematics", school: "UC Berkeley", year: "2010" }
    ],
    achievements: [
      "Top 1% Teacher on BookWise",
      "Excellence in Teaching Award 2023",
      "Published researcher in Mathematical Modeling",
      "Certified Advanced Mathematics Instructor"
    ]
  };

  const timeSlots = [
    { date: "Today", slots: ["2:00 PM", "3:00 PM", "4:00 PM", "6:00 PM"] },
    { date: "Tomorrow", slots: ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"] },
    { date: "Wednesday", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"] },
    { date: "Thursday", slots: ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"] }
  ];

  const reviews = [
    {
      id: 1,
      student: "Alex Chen",
      avatar: teacher2,
      rating: 5,
      date: "2 days ago",
      comment: "Dr. Johnson is an amazing teacher! She explained calculus concepts in a way that finally made sense to me. Highly recommend!"
    },
    {
      id: 2,
      student: "Maria Rodriguez",
      avatar: teacher3,
      rating: 5,
      date: "1 week ago",
      comment: "Excellent teaching style and very patient. Helped me prepare for my statistics exam and I got an A+!"
    },
    {
      id: 3,
      student: "James Wilson",
      avatar: teacher1,
      rating: 5,
      date: "2 weeks ago",
      comment: "Great experience! Very knowledgeable and makes complex topics easy to understand."
    }
  ];

  const handleBookSlot = (date: string, time: string) => {
    setSelectedTimeSlot({ date, time });
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex flex-col">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.history.back()}
                className="hover-scale"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
              <div className="w-px h-6 bg-border" />
              <a href="/" className="flex items-center space-x-2 hover-scale">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">BW</span>
                </div>
                <span className="text-xl font-bold text-foreground">BookWise</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Teacher Header */}
        <div className="card-elegant mb-8 animate-fade-in">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Teacher Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="relative">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-32 h-32 rounded-3xl object-cover ring-4 ring-primary-soft"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-card flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-card" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <h1 className="text-3xl font-bold text-foreground mb-2">{teacher.name}</h1>
                    <p className="text-lg text-muted-foreground mb-1">{teacher.title}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{teacher.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Responds in {teacher.responseTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 fill-warning text-warning" />
                        <span className="text-lg font-semibold text-foreground">{teacher.rating}</span>
                      </div>
                      <span className="text-muted-foreground">({teacher.reviewCount} reviews)</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      ${teacher.hourlyRate}<span className="text-lg text-muted-foreground">/hour</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {teacher.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary-soft text-primary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button 
                      className="btn-hero flex-1 sm:flex-none text-lg px-8 py-4"
                      onClick={() => {
                        // Open booking modal with first available slot
                        const firstSlot = timeSlots[0]?.slots[0];
                        if (firstSlot) {
                          handleBookSlot(timeSlots[0].date, firstSlot);
                        }
                      }}
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick Stats */}
            <div className="lg:w-80">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-secondary/50 rounded-2xl">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{teacher.totalStudents}</div>
                  <div className="text-sm text-muted-foreground">Students Taught</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-2xl">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{teacher.lessonsCompleted}</div>
                  <div className="text-sm text-muted-foreground">Lessons Completed</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-2xl">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{teacher.experience}</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
                <div className="text-center p-4 bg-success-soft rounded-2xl">
                  <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
                  <div className="text-2xl font-bold text-success">100%</div>
                  <div className="text-sm text-success">Response Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="animate-slide-up">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* About Preview */}
              <div className="lg:col-span-2">
                <div className="card-elegant">
                  <h2 className="text-xl font-semibold text-foreground mb-4">About {teacher.name}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{teacher.bio}</p>
                  
                  <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full">
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="animate-fade-in">
                      <div className="mt-6 space-y-6">
                        <div>
                          <h3 className="font-semibold text-foreground mb-3">Education</h3>
                          <div className="space-y-2">
                            {teacher.education.map((edu, index) => (
                              <div key={index} className="flex justify-between items-start">
                                <div>
                                  <div className="font-medium text-foreground">{edu.degree}</div>
                                  <div className="text-muted-foreground">{edu.school}</div>
                                </div>
                                <div className="text-muted-foreground">{edu.year}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold text-foreground mb-3">Achievements</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {teacher.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Award className="h-4 w-4 text-primary" />
                                <span className="text-sm text-foreground">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>

              {/* Quick Schedule */}
              <div>
                <div className="card-elegant">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Available Today</h2>
                  <div className="space-y-3">
                    {timeSlots[0].slots.slice(0, 3).map((time, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-between hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                        onClick={() => handleBookSlot("Today", time)}
                      >
                        <span>{time}</span>
                        <span className="text-sm opacity-75">Available</span>
                      </Button>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 btn-soft"
                    onClick={() => setSelectedTab("schedule")}
                  >
                    View Full Schedule
                  </Button>
                </div>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="card-elegant">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Recent Reviews</h2>
                <Button
                  variant="outline"
                  onClick={() => setSelectedTab("reviews")}
                  className="btn-soft"
                >
                  View All Reviews
                </Button>
              </div>
              <div className="space-y-4">
                {reviews.slice(0, 2).map((review) => (
                  <div key={review.id} className="p-4 bg-secondary/30 rounded-xl">
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={review.avatar} alt={review.student} />
                        <AvatarFallback>{review.student[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-foreground">{review.student}</span>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-warning text-warning" />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <div className="card-elegant">
              <h2 className="text-xl font-semibold text-foreground mb-6">Available Time Slots</h2>
              <div className="space-y-6">
                {timeSlots.map((day, dayIndex) => (
                  <div key={dayIndex} className="animate-fade-in" style={{ animationDelay: `${dayIndex * 0.1}s` }}>
                    <h3 className="font-semibold text-foreground mb-3">{day.date}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {day.slots.map((time, timeIndex) => (
                        <Button
                          key={timeIndex}
                          variant="outline"
                          className="h-12 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                          onClick={() => handleBookSlot(day.date, time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <div className="card-elegant">
              <h2 className="text-xl font-semibold text-foreground mb-6">Student Reviews</h2>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div
                    key={review.id}
                    className="p-6 bg-secondary/30 rounded-xl animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={review.avatar} alt={review.student} />
                        <AvatarFallback>{review.student[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="font-semibold text-foreground">{review.student}</span>
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                            ))}
                          </div>
                          <span className="text-muted-foreground">{review.date}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            <div className="card-elegant">
              <h2 className="text-xl font-semibold text-foreground mb-6">About {teacher.name}</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-muted-foreground leading-relaxed text-lg">{teacher.bio}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4">Education</h3>
                  <div className="space-y-4">
                    {teacher.education.map((edu, index) => (
                      <div key={index} className="flex justify-between items-start p-4 bg-secondary/30 rounded-xl">
                        <div>
                          <div className="font-semibold text-foreground">{edu.degree}</div>
                          <div className="text-muted-foreground">{edu.school}</div>
                        </div>
                        <div className="text-muted-foreground font-medium">{edu.year}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4">Achievements & Certifications</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {teacher.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-primary-soft rounded-xl">
                        <Award className="h-5 w-5 text-primary" />
                        <span className="text-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4">Languages</h3>
                  <div className="flex space-x-2">
                    {teacher.languages.map((lang, index) => (
                      <Badge key={index} variant="secondary" className="bg-accent-soft text-accent">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Booking Modal */}
      {selectedTimeSlot && (
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          teacher={teacher}
          timeSlot={selectedTimeSlot}
        />
      )}
      <Footer />
    </div>
  );
};

export default TeacherProfile;