import { useState, useEffect } from "react";
import { Search, Filter, Calendar as CalendarIcon, Grid3X3, List, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import TeacherCard from "@/components/TeacherCard";
import Footer from "@/components/Footer";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";

const SearchTeachers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'calendar'>('grid');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [showFilters, setShowFilters] = useState(false);

  const subjects = ["Mathematics", "Computer Science", "Languages", "Physics", "Chemistry", "Biology", "History", "Economics"];
  const ratings = ["4.8+", "4.5+", "4.0+", "3.5+"];

  const allTeachers = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      image: teacher1,
      subject: "Mathematics",
      specialties: ["Calculus", "Statistics", "Algebra"],
      rating: 4.9,
      reviewCount: 127,
      hourlyRate: 45,
      nextAvailable: "Today, 3:00 PM",
      availableSlots: 8,
      isAvailable: true
    },
    {
      id: "2",
      name: "Prof. Michael Chen",
      image: teacher2,
      subject: "Computer Science",
      specialties: ["Python", "Data Science", "AI/ML"],
      rating: 4.8,
      reviewCount: 203,
      hourlyRate: 60,
      nextAvailable: "Tomorrow, 10:00 AM",
      availableSlots: 12,
      isAvailable: true
    },
    {
      id: "3",
      name: "Ms. Emily Rodriguez",
      image: teacher3,
      subject: "Languages",
      specialties: ["Spanish", "French", "English"],
      rating: 4.9,
      reviewCount: 156,
      hourlyRate: 35,
      nextAvailable: "Today, 7:00 PM",
      availableSlots: 15,
      isAvailable: true
    },
    {
      id: "4",
      name: "Dr. James Wilson",
      image: teacher1,
      subject: "Physics",
      specialties: ["Quantum Physics", "Mechanics", "Thermodynamics"],
      rating: 4.7,
      reviewCount: 89,
      hourlyRate: 50,
      nextAvailable: "Tomorrow, 2:00 PM",
      availableSlots: 6,
      isAvailable: true
    },
    {
      id: "5",
      name: "Prof. Maria Garcia",
      image: teacher3,
      subject: "Chemistry",
      specialties: ["Organic Chemistry", "Biochemistry", "Lab Techniques"],
      rating: 4.8,
      reviewCount: 134,
      hourlyRate: 48,
      nextAvailable: "Today, 4:00 PM",
      availableSlots: 10,
      isAvailable: true
    },
    {
      id: "6",
      name: "Mr. David Kim",
      image: teacher2,
      subject: "Economics",
      specialties: ["Microeconomics", "Macroeconomics", "Finance"],
      rating: 4.6,
      reviewCount: 98,
      hourlyRate: 42,
      nextAvailable: "Tomorrow, 11:00 AM",
      availableSlots: 7,
      isAvailable: false
    }
  ];

  const [filteredTeachers, setFilteredTeachers] = useState(allTeachers);

  useEffect(() => {
    let filtered = allTeachers;

    if (searchQuery) {
      filtered = filtered.filter(teacher =>
        teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    if (selectedSubject) {
      filtered = filtered.filter(teacher => teacher.subject === selectedSubject);
    }

    if (selectedRating) {
      const minRating = parseFloat(selectedRating.replace('+', ''));
      filtered = filtered.filter(teacher => teacher.rating >= minRating);
    }

    setFilteredTeachers(filtered);
  }, [searchQuery, selectedSubject, selectedRating]);

  const CalendarView = () => (
    <div className="card-elegant">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Available Appointments</h3>
        <Badge variant="secondary" className="bg-success-soft text-success">
          {filteredTeachers.reduce((sum, teacher) => sum + teacher.availableSlots, 0)} slots available
        </Badge>
      </div>
      
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="rounded-md border-0"
        classNames={{
          day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
        }}
      />
      
      {selectedDate && (
        <div className="mt-6 animate-fade-in">
          <h4 className="font-medium text-foreground mb-4">
            Available on {selectedDate.toLocaleDateString()}
          </h4>
          <div className="space-y-3">
            {filteredTeachers.slice(0, 3).map((teacher) => (
              <div key={teacher.id} className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-xl hover-lift cursor-pointer">
                <img src={teacher.image} alt={teacher.name} className="w-10 h-10 rounded-lg object-cover" />
                <div className="flex-1">
                  <div className="font-medium text-foreground">{teacher.name}</div>
                  <div className="text-sm text-muted-foreground">{teacher.subject}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">3:00 PM</div>
                  <div className="text-xs text-muted-foreground">${teacher.hourlyRate}/hr</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

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
              <a href="/search" className="text-foreground font-medium">Find Teachers</a>
              <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Teacher Dashboard</a>
              <Button variant="outline" className="btn-soft">Sign In</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Search Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Your Perfect Teacher</h1>
          <p className="text-muted-foreground">Discover expert educators ready to help you learn</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 animate-slide-up">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search teachers, subjects, or specialties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card border-border/50 hover:border-primary/30 focus:border-primary transition-colors"
              />
            </div>

            {/* Filter Button */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="h-12 px-6 border-border/50 hover:border-primary/30 transition-all"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>

            {/* View Mode Toggle */}
            <div className="flex bg-card rounded-lg p-1 border border-border/50">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="h-10 w-10 p-0"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="h-10 w-10 p-0"
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'calendar' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('calendar')}
                className="h-10 w-10 p-0"
              >
                <CalendarIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 p-6 bg-card rounded-2xl border border-border/50 animate-fade-in">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger>
                      <SelectValue placeholder="All subjects" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All subjects</SelectItem>
                      {subjects.map(subject => (
                        <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Minimum Rating</label>
                  <Select value={selectedRating} onValueChange={setSelectedRating}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any rating</SelectItem>
                      {ratings.map(rating => (
                        <SelectItem key={rating} value={rating}>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-warning text-warning" />
                            <span>{rating}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Availability</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? selectedDate.toLocaleDateString() : "Any date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedSubject || selectedRating || selectedDate) && (
                <div className="mt-4 pt-4 border-t border-border">
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSubject("");
                  setSelectedRating("");
                  setSelectedDate(undefined);
                }}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear all filters
              </Button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results */}
        <div className="animate-scale-in">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {filteredTeachers.length} Teacher{filteredTeachers.length !== 1 ? 's' : ''} Found
              </h2>
              {(searchQuery || selectedSubject || selectedRating) && (
                <p className="text-muted-foreground mt-1">
                  {searchQuery && `Searching for "${searchQuery}"`}
                  {selectedSubject && ` • ${selectedSubject}`}
                  {selectedRating && ` • ${selectedRating} rating`}
                </p>
              )}
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Updated 2 minutes ago</span>
            </div>
          </div>

          {/* Results Grid/List/Calendar */}
          {viewMode === 'calendar' ? (
            <CalendarView />
          ) : (
            <div className={cn(
              "gap-6",
              viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3' : 'space-y-4'
            )}>
              {filteredTeachers.map((teacher, index) => (
                <div
                  key={teacher.id}
                  className="animate-scale-in hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-full">
                    <TeacherCard {...teacher} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredTeachers.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No teachers found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or filters
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSubject("");
                  setSelectedRating("");
                  setSelectedDate(undefined);
                }}
                className="btn-soft"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchTeachers;