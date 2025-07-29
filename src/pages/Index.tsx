import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoomGallery from "@/components/RoomGallery";
import BookingCalendar from "@/components/BookingCalendar";
import MapLocation from "@/components/MapLocation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <RoomGallery />
      <BookingCalendar />
      <MapLocation />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
