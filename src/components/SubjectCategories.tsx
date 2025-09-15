import { Calculator, Code, Globe, Atom, BookOpen, Palette, Music, Microscope, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SubjectCategories = () => {
  const categories = [
    {
      icon: Calculator,
      name: "Mathematics",
      description: "Algebra, Calculus, Statistics, Geometry",
      teacherCount: 85,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Code,
      name: "Computer Science",
      description: "Programming, Data Science, AI/ML, Web Development",
      teacherCount: 72,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Globe,
      name: "Languages",
      description: "English, Spanish, French, Mandarin, German",
      teacherCount: 68,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Atom,
      name: "Sciences",
      description: "Physics, Chemistry, Biology, Environmental Science",
      teacherCount: 54,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: BookOpen,
      name: "Literature",
      description: "Creative Writing, Poetry, Essay Writing, Reading",
      teacherCount: 42,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: TrendingUp,
      name: "Business",
      description: "Economics, Finance, Marketing, Management",
      teacherCount: 38,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: Palette,
      name: "Arts",
      description: "Drawing, Painting, Digital Art, Art History",
      teacherCount: 29,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      icon: Music,
      name: "Music",
      description: "Piano, Guitar, Voice, Music Theory",
      teacherCount: 25,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200"
    },
    {
      icon: Microscope,
      name: "Test Prep",
      description: "SAT, ACT, GRE, GMAT, MCAT",
      teacherCount: 45,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200"
    },
    {
      icon: Heart,
      name: "Health & Wellness",
      description: "Psychology, Nutrition, Fitness, Mental Health",
      teacherCount: 31,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Explore All Subjects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From mathematics to music, find expert teachers in every subject you need to master
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className={`card-elegant hover-lift cursor-pointer transition-all duration-300 border-2 ${category.borderColor} hover:shadow-lg animate-card-scroll`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => window.location.href = '/search'}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${category.bgColor}`}>
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <Badge variant="secondary" className="bg-primary-soft text-primary">
                    {category.teacherCount} teachers
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 text-muted-foreground">
            <span className="text-sm">Can't find your subject?</span>
            <button className="text-primary hover:text-primary/80 font-medium transition-colors">
              Request a teacher →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectCategories;
