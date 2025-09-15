import { useState } from "react";
import { Calendar, Clock, Users, DollarSign, MessageCircle, Settings, Bell, Plus, Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";

const TeacherDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  // Mock teacher data
  const teacherData = {
    name: "Dr. Sarah Johnson",
    image: teacher1,
    subject: "Mathematics",
    rating: 4.9,
    totalStudents: 340,
    totalEarnings: 12450,
    thisMonth: 2850,
    upcomingAppointments: 8,
    notifications: 3
  };

  const upcomingAppointments = [
    {
      id: 1,
      student: "Alex Chen",
      avatar: teacher2,
      subject: "Calculus",
      date: "Today",
      time: "3:00 PM - 4:00 PM",
      status: "confirmed",
      meetingLink: "https://meet.bookwise.app/abc123"
    },
    {
      id: 2,
      student: "Maria Rodriguez",
      avatar: teacher3,
      subject: "Statistics",
      date: "Today",
      time: "5:00 PM - 6:00 PM",
      status: "confirmed",
      meetingLink: "https://meet.bookwise.app/def456"
    },
    {
      id: 3,
      student: "James Wilson",
      avatar: teacher1,
      subject: "Algebra",
      date: "Tomorrow",
      time: "2:00 PM - 3:00 PM",
      status: "pending",
      meetingLink: null
    }
  ];

  const recentMessages = [
    {
      id: 1,
      student: "Alex Chen",
      avatar: teacher2,
      message: "Hi Dr. Johnson, I have a question about the calculus homework...",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      student: "Maria Rodriguez",
      avatar: teacher3,
      message: "Thank you for the great session yesterday! Could we schedule another one?",
      time: "5 hours ago",
      unread: true
    },
    {
      id: 3,
      student: "James Wilson",
      avatar: teacher1,
      message: "Looking forward to our session tomorrow. Should I prepare anything specific?",
      time: "1 day ago",
      unread: false
    }
  ];

  const availabilitySlots = [
    { day: "Monday", slots: ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"] },
    { day: "Tuesday", slots: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"] },
    { day: "Wednesday", slots: ["10:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"] },
    { day: "Thursday", slots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM"] },
    { day: "Friday", slots: ["9:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
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
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                {teacherData.notifications > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {teacherData.notifications}
                  </span>
                )}
              </Button>
              
              <div className="flex items-center space-x-3">
                <img
                  src={teacherData.image}
                  alt={teacherData.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="hidden md:block">
                  <div className="text-sm font-medium text-foreground">{teacherData.name}</div>
                  <div className="text-xs text-muted-foreground">{teacherData.subject} Teacher</div>
                </div>
              </div>
              
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, Dr. Johnson!
          </h1>
          <p className="text-muted-foreground">Here's what's happening with your teaching schedule today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slide-up">
          <Card className="card-elegant hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Today's Appointments</p>
                  <p className="text-2xl font-bold text-foreground">{teacherData.upcomingAppointments}</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Students</p>
                  <p className="text-2xl font-bold text-foreground">{teacherData.totalStudents}</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">This Month</p>
                  <p className="text-2xl font-bold text-foreground">${teacherData.thisMonth}</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Rating</p>
                  <p className="text-2xl font-bold text-foreground">{teacherData.rating}</p>
                </div>
                <div className="text-warning">★</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="animate-scale-in">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Upcoming Appointments */}
              <div className="lg:col-span-2">
                <Card className="card-elegant">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Upcoming Appointments</CardTitle>
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Slot
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingAppointments.slice(0, 3).map((appointment) => (
                      <div key={appointment.id} className="p-4 bg-secondary/30 rounded-xl hover-lift">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={appointment.avatar} alt={appointment.student} />
                              <AvatarFallback>{appointment.student[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-foreground">{appointment.student}</div>
                              <div className="text-sm text-muted-foreground">{appointment.subject}</div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-sm font-medium text-foreground">{appointment.time}</div>
                            <div className="text-xs text-muted-foreground">{appointment.date}</div>
                          </div>
                          
                          <Badge
                            variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                            className={appointment.status === 'confirmed' ? 'bg-success text-success-foreground' : ''}
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                        
                        {appointment.meetingLink && (
                          <div className="mt-3 pt-3 border-t border-border">
                            <Button size="sm" className="btn-hero">
                              <Eye className="h-3 w-3 mr-2" />
                              Join Meeting
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Recent Messages */}
              <div>
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle>Recent Messages</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentMessages.slice(0, 3).map((message) => (
                      <div key={message.id} className="p-3 hover:bg-secondary/30 rounded-xl cursor-pointer transition-colors">
                        <div className="flex items-start space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={message.avatar} alt={message.student} />
                            <AvatarFallback>{message.student[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium text-foreground">{message.student}</span>
                              {message.unread && (
                                <div className="w-2 h-2 bg-accent rounded-full" />
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                              {message.message}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <Button variant="outline" className="w-full btn-soft">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      View All Messages
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            <Card className="card-elegant">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>All Appointments</CardTitle>
                  <Button className="btn-hero">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Time Slot
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="p-6 bg-secondary/30 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={appointment.avatar} alt={appointment.student} />
                          <AvatarFallback>{appointment.student[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-foreground">{appointment.student}</h3>
                          <p className="text-muted-foreground">{appointment.subject}</p>
                        </div>
                      </div>
                      
                      <Badge
                        variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                        className={appointment.status === 'confirmed' ? 'bg-success text-success-foreground' : ''}
                      >
                        {appointment.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-6 mb-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{appointment.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{appointment.time}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      {appointment.meetingLink && (
                        <Button size="sm" className="btn-hero">
                          <Eye className="h-3 w-3 mr-2" />
                          Join Meeting
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-3 w-3 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Messages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="p-4 bg-secondary/30 rounded-xl hover-lift cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={message.avatar} alt={message.student} />
                        <AvatarFallback>{message.student[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-foreground">{message.student}</span>
                            {message.unread && (
                              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                                New
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-muted-foreground">{message.time}</span>
                        </div>
                        <p className="text-muted-foreground">{message.message}</p>
                        <div className="mt-3 flex space-x-2">
                          <Button size="sm" variant="outline">Reply</Button>
                          <Button size="sm" variant="outline">Mark as Read</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="availability" className="space-y-6">
            <Card className="card-elegant">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Weekly Availability</CardTitle>
                  <Button className="btn-hero">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Time Slot
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {availabilitySlots.map((day, index) => (
                  <div key={day.day} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-foreground">{day.day}</h3>
                      <Button variant="outline" size="sm">
                        <Plus className="h-3 w-3 mr-2" />
                        Add Slot
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {day.slots.map((slot, slotIndex) => (
                        <div
                          key={slotIndex}
                          className="p-3 bg-primary-soft rounded-lg text-center hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer group"
                        >
                          <div className="font-medium">{slot}</div>
                          <div className="text-xs opacity-75 mt-1">Available</div>
                          <div className="hidden group-hover:flex justify-center space-x-1 mt-2">
                            <Button size="sm" variant="outline" className="h-6 w-6 p-0">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline" className="h-6 w-6 p-0">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeacherDashboard;