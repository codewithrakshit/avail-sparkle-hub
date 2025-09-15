import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedTeachers from "@/components/FeaturedTeachers";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [bookingModal, setBookingModal] = useState({
    isOpen: false,
    teacher: {
      name: "",
      image: "",
      subject: "",
      hourlyRate: 0
    },
    timeSlot: {
      date: "",
      time: ""
    }
  });

  const openBookingModal = (teacher: any, timeSlot: any) => {
    setBookingModal({
      isOpen: true,
      teacher,
      timeSlot
    });
  };

  const closeBookingModal = () => {
    setBookingModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedTeachers />
      
      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={closeBookingModal}
        teacher={bookingModal.teacher}
        timeSlot={bookingModal.timeSlot}
      />
    </div>
  );
};

export default Index;
