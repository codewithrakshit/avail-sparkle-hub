import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedTeachers from "@/components/FeaturedTeachers";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import SubjectCategories from "@/components/SubjectCategories";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <StatsSection />
      <FeaturedTeachers />
      <TestimonialsSection />
      <SubjectCategories />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      
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
