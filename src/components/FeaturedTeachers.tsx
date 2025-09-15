import TeacherCard from "./TeacherCard";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";

const FeaturedTeachers = () => {
  const teachers = [
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
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Teachers</h2>
          <p className="text-xl text-muted-foreground">Connect with our top-rated educators</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div 
              key={teacher.id} 
              className="animate-card-scroll animate-card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <TeacherCard {...teacher} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/search" className="btn-soft inline-flex items-center space-x-2 hover-scale">
            <span>View All Teachers</span>
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTeachers;