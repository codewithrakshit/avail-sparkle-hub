import { Star, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TeacherCardProps {
  id: string;
  name: string;
  image: string;
  subject: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  nextAvailable: string;
  availableSlots: number;
  isAvailable: boolean;
}

const TeacherCard = ({
  id,
  name,
  image,
  subject,
  specialties,
  rating,
  reviewCount,
  hourlyRate,
  nextAvailable,
  availableSlots,
  isAvailable
}: TeacherCardProps) => {
  return (
    <div className="card-teacher group">
      {/* Header with Image and Basic Info */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <img 
            src={image} 
            alt={`${name} - ${subject} teacher`}
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-primary-soft group-hover:ring-primary transition-all duration-300"
          />
          <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-card ${
            isAvailable ? 'bg-success' : 'bg-muted'
          }`} />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-muted-foreground font-medium">{subject}</p>
          
          {/* Rating */}
          <div className="flex items-center space-x-1 mt-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="text-sm font-medium text-foreground">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-lg font-bold text-foreground">${hourlyRate}</div>
          <div className="text-sm text-muted-foreground">per hour</div>
        </div>
      </div>

      {/* Specialties */}
      <div className="flex flex-wrap gap-2 mb-4">
        {specialties.map((specialty, index) => (
          <Badge 
            key={index} 
            variant="secondary" 
            className="bg-primary-soft text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            {specialty}
          </Badge>
        ))}
      </div>

      {/* Availability Info */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center space-x-2 text-sm">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Next available:</span>
          <span className="font-medium text-foreground">{nextAvailable}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{availableSlots} slots available this week</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          onClick={() => window.location.href = `/teacher/${id}`}
        >
          View Profile
        </Button>
        <Button 
          size="sm" 
          className="flex-1 btn-hero"
          disabled={!isAvailable}
          onClick={() => window.location.href = `/teacher/${id}`}
        >
          {isAvailable ? 'Book Now' : 'Unavailable'}
        </Button>
      </div>
    </div>
  );
};

export default TeacherCard;