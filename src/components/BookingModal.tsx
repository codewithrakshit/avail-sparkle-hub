import { useState } from "react";
import { X, Calendar, Clock, User, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  teacher: {
    name: string;
    image: string;
    subject: string;
    hourlyRate: number;
  };
  timeSlot: {
    date: string;
    time: string;
  };
}

const BookingModal = ({ isOpen, onClose, teacher, timeSlot }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStep(3); // Success step
    setIsSubmitting(false);
  };

  const resetModal = () => {
    setStep(1);
    setFormData({ name: "", email: "", phone: "", notes: "" });
    setIsSubmitting(false);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-card rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            {step === 3 ? 'Booking Confirmed!' : 'Book Appointment'}
          </h2>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Progress Indicator */}
        {step < 3 && (
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                1
              </div>
              <span className="text-sm text-muted-foreground">Details</span>
            </div>
            <div className="flex-1 h-0.5 bg-muted">
              <div className={`h-full bg-primary transition-all duration-300 ${
                step >= 2 ? 'w-full' : 'w-0'
              }`} />
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                2
              </div>
              <span className="text-sm text-muted-foreground">Confirm</span>
            </div>
          </div>
        )}

        {/* Step 1: Appointment Details */}
        {step === 1 && (
          <div className="animate-fade-in">
            <div className="bg-secondary/50 rounded-2xl p-4 mb-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-semibold text-foreground">{teacher.name}</h3>
                  <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="font-bold text-foreground">${teacher.hourlyRate}</div>
                  <div className="text-sm text-muted-foreground">per hour</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{timeSlot.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{timeSlot.time}</span>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Any specific topics or questions?"
                  rows={3}
                />
              </div>
            </form>

            <div className="flex space-x-3 mt-8">
              <Button variant="outline" onClick={handleClose} className="flex-1">
                Cancel
              </Button>
              <Button 
                onClick={() => setStep(2)} 
                className="flex-1 btn-hero"
                disabled={!formData.name || !formData.email}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Confirmation */}
        {step === 2 && (
          <div className="animate-fade-in">
            <div className="text-center mb-6">
              <User className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Please review your booking details</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-secondary/50 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Teacher:</span>
                    <div className="font-medium">{teacher.name}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Subject:</span>
                    <div className="font-medium">{teacher.subject}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Date:</span>
                    <div className="font-medium">{timeSlot.date}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Time:</span>
                    <div className="font-medium">{timeSlot.time}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Student:</span>
                    <div className="font-medium">{formData.name}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Rate:</span>
                    <div className="font-medium">${teacher.hourlyRate}/hour</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Back
              </Button>
              <Button 
                onClick={handleSubmit} 
                className="flex-1 btn-hero"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Booking...' : 'Confirm Booking'}
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="text-center animate-scale-in">
            <div className="mb-6">
              <CheckCircle2 className="h-16 w-16 text-success mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Appointment Booked Successfully!
              </h3>
              <p className="text-muted-foreground">
                You'll receive a confirmation email shortly with meeting details.
              </p>
            </div>

            <div className="bg-success-soft rounded-xl p-4 mb-6">
              <div className="text-sm">
                <div className="font-medium text-foreground mb-2">Next Steps:</div>
                <ul className="text-left space-y-1 text-muted-foreground">
                  <li>• Check your email for the meeting link</li>
                  <li>• Add the appointment to your calendar</li>
                  <li>• Prepare any questions or materials</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full btn-hero" onClick={handleClose}>
                Done
              </Button>
              <Button variant="outline" className="w-full">
                Add to Calendar
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;